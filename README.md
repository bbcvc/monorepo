# 构建monorepo最佳实践

> [!IMPORTANT]  
> 技术栈：pnpm rollup vite umi react18 typescript

## 一、从零开始构建 monorepo

### 1. 初始化项目文件夹

```bash
// 项目根目录
mkdir monorepo
cd monorepo

pnpm init -y
```

### 2. 创建 pnpm-workspace.yaml

写入以下内容，文件名为 `pnpm-workspace.yaml`  
`pnpm-workspace.yaml`文件中的 `packages` 都会被作为 monorepo 的子模块

```yaml
packages:
  - 'packages/**'
  - 'apps/*'
```

`packages`下用来存放包

`apps`下用来存放程序应用

### 3. 创建子文件夹

```bash
mkdir packages
mkdir apps
```

## 二、配置项目的格式化工具

### 1. prettier

> prettier是什么？  
> 一个代码格式化工具，可以格式化任何代码，使代码更加美观，更加易于阅读，更加易于维护

i. 安装

```bash
pnpm add -D prettier --workspace-root
```

ii. 配置

```json
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": false,
  "useTabs": false,
  "tabWidth": 2,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always"
}
```

iii. 在 CI/CD 中自动格式化

```bash
pnpm add -D lint-staged --workspace-root
```

`.lintstagedrc.json`

```json
{
  "**/*.{js,ts,jsx,tsx}": ["prettier --write"]
}
```

### 2. Editorconfig

> Editorconfig for VS Code 是什么？
> 一个用于编辑器的配置文件，可以自动格式化代码，使代码更加美观，更加易于阅读，更加易于维护。

这是一个 VS Code 的插件，可以通过扩张商店安装

配置如下：

```
root = true

[*]
charset=utf-8
end_of_line=lf
insert_final_newline=true
indent_style=space
indent_size=2
max_line_length = 100

[*.{yml,yaml,json}]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

## 三、在 `packages` 中创建一些模块

### 1. icons

> `icons` 这个包用作项目的图标，因为一些 icon 库并不能完全满足产品或设计上的需求
> 使用 `@svgr/cli` 把 svg 转换成 tsx 文件，https://github.com/gregberge/svgr

`svgr.config.js`

```js
module.exports = {
  // 将 SVG 转换为适合图标的 React 组件
  icon: true,

  // 替换 SVG 中的颜色值
  replaceAttrValues: {
    '#063855': 'currentColor', // 将 #063855 替换为 currentColor
  },

  // 生成 TypeScript 组件
  typescript: true,

  // 自定义模板
  template: (variables, { tpl }) => {
    return tpl`
      import React from 'react';
      import { SVGProps } from 'react';

      const ${variables.componentName} = (props: SVGProps<SVGSVGElement>) => (
        ${variables.jsx}
      );

      export default ${variables.componentName};
    `
  },

  // 自定义输出文件名和路径
  outDir: 'dist', // 输出到 dist/icons 目录
  filenameCase: 'kebab', // 文件名格式为 kebab-case（例如 home-icon.tsx）
}
```

### 2. ui

> `ui` 这个包用作项目的基础组件，包括按钮，输入框，弹窗，等等；
> 使用 `rollup` 进行打包，https://rollupjs.org/。目的是为了在 `apps` 里使用的时候平衡开发体验，入在 `vite` 中引用这个组件库，减少多余的请求

i. `rollup.config.js`

```js
import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { babel } from '@rollup/plugin-babel'
import { name } from './package.json'
import { dts } from 'rollup-plugin-dts'

export default defineConfig([
  {
    input: 'src/index.tsx',
    external: ['react', 'react-dom'],
    plugins: [
      typescript({
        declaration: true,
        check: false, // https://github.com/ezolenko/rollup-plugin-typescript2/issues/214
      }),
      resolve({
        extensions: ['.tsx', '.ts', '.js'],
      }),
      postcss({}),
      babel({
        babelrc: false,
        exclude: '**/node_modules/**',
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
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
        file: './dist/cjs/index.cjs',
        format: 'commonjs',
      },
      {
        name,
        file: './dist/es/index.js',
        format: 'es',
      },
    ],
  },
  {
    input: 'src/index.tsx',
    watch: true,
    output: {
      file: './dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
])
```

ii. `package.json`

```json
{
  "name": "@monorepo/ui",
  "version": "1.0.0",
  "description": "An infrastructure monorepo ui library for all front-end apps.",
  "type": "module",
  "module": "dist/index.js",
  "main": "dist/index.js",
  "typings": "dist/index.d.ts",
  "files": [
    "dist/"
  ],
  "scripts": {
    "start": "pnpm run dev",
    "dev": "rollup --config rollup.config.js --watch",
    "build": "rollup --config rollup.config.js",
    "prepare": "pnpm run build"
  },
  ...
}
```

### 3. pro-components

> `pro-components` 这个包用作项目的业务组件，通常可能是基于多个 `ui` 组件的复合组件，以满足业务的需求
> 这个不做打包处理，在开发中多次打包体验也不好

使用如下的配置，可以避免使用桶文件，同时也支持了快捷的引入，直接使用 `import ReactLoga from '@monorepo/pro-components/react-loga'`

`package.json`

```json
{
  "name": "@monorepo/pro-components",
  "description": "This is a pro-components.",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  // 这里的配置是为了支持使用 `import ReactLoga from '@monorepo/pro-components/react-loga'`
  "exports": {
    "./*": "./*/index.tsx"
  },
  "sideEffects": false,
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@monorepo/ui": "workspace:^",
    "@monorepo/icons": "workspace:^"
  }
}
```

### 4. shared

> 这里可以存放一些项目的公共函数或者配置，比如 `hooks`，`tsconfig` 等

## 四、在 apps 下的项目中引入

### 1. infra

使用 `umi` 快速构建一个用于展示基础组件的项目
i. 初始化

```bash
pnpm dlx create-umi@latest
```

ii. 安装`packages`下的依赖

```bash
pnpm add @monorepo/ui @monorepo/icons @monorepo/pro-components --workspace
```

### 2. 一个业务项目

i. 使用 `vite` 创建一个项目

```bash
pnpm create vite my-vue-app --template react-ts
```

ii. 安装`packages`下的依赖

```bash
pnpm add @monorepo/ui @monorepo/icons @monorepo/pro-components --workspace
```
