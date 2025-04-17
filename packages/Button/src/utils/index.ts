import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import color from 'picocolors';
import MagicString from 'magic-string';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 获取组件入口
export function getEsEntries() {
  const entry = path.resolve(__dirname, '../components')
  let files = fs.readdirSync(entry)
  const componentEntries = files.reduce((ret:any, item:any) => {
    const itemPath = path.join(entry, item)
    const isDir = fs.statSync(itemPath).isDirectory()

    if (isDir) {
      ret[item] = path.join(itemPath, 'index.ts')
    } else {
      const [name] = item.split('.')
      ret[name] = itemPath
    }
    return ret
  }, {})
  return componentEntries
}
// export interface LibOptions extends LibraryOptions {
//   build?: BuildOptions
//   rollupOptions?: BuildOptions['rollupOptions'];
// }

/**
 * Inject css at the top of each generated chunk file, only works with library mode.
 * @param libOptions Optional libOptions which will overwrite the relevant options.
 */
export function libInjectCss(libOptions?: any) {
  let skipInject = false;

  return {
    name: 'vite:lib-inject-css',
    apply: 'build',
    enforce: 'post',
    config() {
      const { rollupOptions = {}, build, ...lib } = libOptions || {};

      let outputOptions = rollupOptions.output;
      outputOptions = [outputOptions].flat().map(options => ({
        hoistTransitiveImports: false,
        ...options,
      }));

      rollupOptions.output = outputOptions.length === 1
        ? outputOptions[0]
        : outputOptions;

      return {
        build: {
          ...build,
          lib,
          rollupOptions,
          cssCodeSplit: false,
        },
      };
    },
    configResolved({ build } :any) {
      const messages = [];
      const outputOptions = [build.rollupOptions.output].flat();

      if (!build.lib) {
        skipInject = true;
        messages.push('Current build is not in library mode, skip code injection.');
      }

      if (build.lib && build.cssCodeSplit === false) {
        messages.push(
          '`config.build.cssCodeSplit` is set `true` by the plugin internally in library mode, ' +
              'but it seems to be `false` now. This may cause style code injection fail, ' +
                'please check the configuration to prevent this option from being modified.',
        );
      }

      const createPreserveModulesWarning = (optionPath :any) => {
        messages.push(
          'When `' + optionPath + '` is `true`, ' +
          'the association between chunk file and its css references will lose, ' +
          'so the style code injection will be skipped.',
        );
      };

      if (outputOptions.some(v => v?.preserveModules === true)) {
        skipInject = true;
        createPreserveModulesWarning('rollupOptions.output.preserveModules');
      }

      if (build.rollupOptions.preserveModules === true) {
        skipInject = true;
        createPreserveModulesWarning('rollupOptions.preserveModules');
      }

      messages.forEach(msg => console.log(`\n${color.cyan('[vite:lib-inject-css]:')} ${color.yellow(msg)}\n`));
    },
    renderChunk(code :any, chunk:any) {
      if (skipInject || !chunk.viteMetadata) return;
      const { importedCss } = chunk.viteMetadata;
      if (!importedCss.size) return;

      /**
       * Inject the referenced style files at the top of the chunk.
       * Delegate the task of how to handle these files to the user's build tool.
       */
      const ms = new MagicString(code);
      for (const cssFileName of importedCss) {
        let cssFilePath = path.relative(path.dirname(chunk.fileName), cssFileName);
        cssFilePath = cssFilePath.startsWith('.') ? cssFilePath : `./${cssFilePath}`;
        ms.prepend(`import '${cssFilePath}';\n`);
      }
      return {
        code: ms.toString(),
        map: ms.generateMap(),
      };
    },
  };
}

/**
 * Help to generate lib entry object with similar directory structure.
 * 1. **If it is a file**, use filename without extension as entry name
 * 2. **If it is a directory**, assumes 'src/components', it will scan files under, then use `'src/components/xxx/index'` as entry and `'xxx'` as its name.
 * @param entryDirs directories to scan.
 * @returns lib entry object
 * @example
 * ```javascript
 * scanEntries([
 *   'src/index.ts',
 *   'src/components',
 * ])
 * ```
 */
export function scanEntries(entryDirs:any) {
  const entries:any = {};
  const counter :any = {};

  for (const entryDir of [entryDirs].flat()) {
    if (!entryDir) break;

    const flattenEntries = fs.statSync(entryDir).isDirectory()
      ? fs.readdirSync(entryDir).map(v => path.resolve(entryDir, v))
      : [entryDir];

    for (const entry of flattenEntries) {
      const { name } = path.parse(entry);
      const entryIndex = counter[name] || 0;
      entries[`${name}${entryIndex || ''}`] = entry;
      counter[name] = entryIndex + 1;
    }
  }

  return entries;
}