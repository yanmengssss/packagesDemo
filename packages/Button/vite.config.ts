import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import babel from '@rollup/plugin-babel'
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
    })]
  !isUmd && plugins.push(libInjectCss())
  
  return defineConfig({
    plugins,
    build: {
      outDir: isUmd ? resolve('libCos') : resolve('lib'),
      lib: {
        entry: isUmd ? resolve(__dirname, 'src/index.umd.ts') : getEsEntries(),
        name: 'MyButton',
        formats: isUmd ? ['umd'] : ['es', 'cjs'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          exports: 'named'
        }
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  })
}








