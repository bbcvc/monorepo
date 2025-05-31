# @/monorepo 组件文档演示应用

本项目是一个基于 monorepo 管理的前端组件库演示平台，旨在集中展示和介绍 `packages` 目录下各个组件包，方便开发、预览和文档编写。

## 项目结构

- `apps/umi-app`：本目录，为组件文档和演示的前端应用，基于 [UmiJS](https://umijs.org/) 搭建。
- `packages/`：存放各类可复用的组件库、工具库等。
- `node_modules/`、`pnpm-lock.yaml`、`package.json` 等：monorepo 根目录的依赖和配置文件。

## 主要功能

- 集中预览和测试 `packages` 下的各个组件包。
- 提供组件文档说明和使用示例。
- 支持 UI 组件库、Pro 组件库、图标库等多种类型的包。

## 快速开始

1. **安装依赖**

   在 monorepo 根目录下执行：

   ```bash
   pnpm install
   ```

2. **启动文档演示应用**

   ```bash
   pnpm --filter ./apps/umi-app dev
   ```

   或进入 `apps/umi-app` 目录后运行：

   ```bash
   pnpm dev
   ```

3. **访问本地预览**

   打开浏览器访问 [http://localhost:8000](http://localhost:8000) 查看组件文档和演示。

## 相关链接

- [UmiJS 官网](https://umijs.org/)
- [项目主仓库](https://github.com/bbcvc/monorepo)

---

如需添加新组件或改进文档，请参考各包下的说明并提交 PR。
