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
