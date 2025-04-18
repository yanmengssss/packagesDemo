import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

import { fileURLToPath } from 'url';
import { dirname, resolve as pathResolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const components = ['Button', 'Input'];

// JavaScript 打包配置
const jsBundles = components.map(component => ({
  input: `src/components/${component}/index.ts`,
  output: [
    {
      file: pathResolve(__dirname, `dist/${component}/cjs/index.cjs.js`),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pathResolve(__dirname, `dist/${component}/esm/index.esm.js`),
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
    postcss({
      extract: true,
      modules: false,
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    }),
  ],
}));

// 集中导出文件的打包配置
const indexBundle = {
  input: 'src/index.ts', // 新增的 index.ts 文件
  output: [
    {
      file: pathResolve(__dirname, 'dist/ye-lib.index.cjs.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pathResolve(__dirname, 'dist/ye-lib.index.esm.js'),
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
    postcss({
      extract: true,
      modules: false,
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    }),
  ],
};

// 类型定义文件打包配置
const dtsBundles = components.map(component => ({
  input: `src/components/${component}/index.ts`,
  output: {
    file: pathResolve(__dirname, `dist/${component}/index.d.ts`),
    format: 'es',
  },
  plugins: [
    dts({
      respectExternal: true,
    }),
  ],
  external: [/\.css$/],
}));

// 新增的 index.ts 类型定义文件打包
const dtsIndexBundle = {
  input: 'src/index.ts',
  output: {
    file: pathResolve(__dirname, 'dist/ye-lib.index.d.ts'),
    format: 'es',
  },
  plugins: [
    dts({
      respectExternal: true,
    }),
  ],
  external: [/\.css$/],
};

export default [
  ...jsBundles,  // 组件的 JavaScript 打包
  indexBundle,   // 新的 index.ts 的 JavaScript 打包
  ...dtsBundles, // 组件的类型定义打包
  dtsIndexBundle, // 新的 index.ts 的类型定义打包
];
