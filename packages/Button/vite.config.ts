import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
import { libInjectCss, getEsEntries } from './src/utils/index'

export default ({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '')
  const isUmd = env.BUILD_MODE === 'umd'

  console.log('Build mode:', isUmd ? 'UMD' : 'ES')

  const plugins = [
    react(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
      configFile: resolve(__dirname, '.babelrc')
    }),
    visualizer({
      filename: isUmd ? './stats-umd.html' : './stats-es.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ]
  !isUmd && plugins.push(libInjectCss())

  return defineConfig({
    plugins,
    build: {
      outDir: isUmd ? resolve('libCos') : resolve('lib'),
      lib: {
        entry: isUmd ? resolve(__dirname, 'src/index.umd.ts') : getEsEntries(),
        name: 'MyButton',
        formats: isUmd ? ['umd'] : ['es'],
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          /node_modules/
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsx'
          },
          exports: 'named',
          entryFileNames: isUmd ? 'ye-button/index.js' : '[name]/[name].js',
          assetFileNames: isUmd
            ? 'ye-button/index.css'
            : 'styles/index.css',
          // 添加以下配置
          // 根据模式使用不同的配置
          ...(isUmd ? {
            format: 'umd',
          } : {
            format: 'es',
            preserveModules: true,
            preserveModulesRoot: 'src'
          })
        },
      },
      cssCodeSplit: false
    },
    css: {  // 添加 CSS 配置
      modules: {
        generateScopedName: '[local]_[hash:base64:5]',  // 简化类名生成规则
        localsConvention: 'camelCaseOnly'
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  })
}








