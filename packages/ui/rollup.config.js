import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { babel } from '@rollup/plugin-babel'
import { name } from './package.json'

export default defineConfig([
  {
    input: 'components/index.tsx',
    external: ['react', 'react-dom'],
    plugins: [
      typescript({
        declaration: true, // 是否生成声明文件
        declarationDir: 'dist/types', // 声明文件输出目录
      }),
      resolve({
        extensions: ['.tsx', '.ts', '.js'],
      }),
      postcss({}),
      babel({
        babelrc: false,
        exclude: '**/node_modules/**',
        babelHelpers: 'runtime',
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-syntax-object-rest-spread',
          '@babel/plugin-transform-react-jsx',
          [
            '@babel/plugin-transform-runtime',
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: false,
              regenerator: false,
              useESModules: false,
            },
          ],
        ],
      }),
      commonjs(),
    ],
    output: [
      {
        name,
        file: './dist/index.js',
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        name,
        file: './dist/es/index.js',
        format: 'es',
      },
      {
        name,
        file: './dist/cjs/index.cjs',
        format: 'commonjs',
      },
      // {
      //   file: './dist/index.d.ts',
      //   format: 'es',
      // },
    ],
  },
])
