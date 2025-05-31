import { defineConfig } from 'umi'

export default defineConfig({
  npmClient: 'pnpm',
  routes: [
    { path: '/', component: 'index' },
    { path: '/icons-demo', component: 'icons-demo' },
    { path: '/ui-demo', component: 'ui-demo' },
    { path: '/pro-components-demo', component: 'pro-components-demo' },
  ],

  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {
    content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**/*.tsx'],
    plugins: [require('@tailwindcss/typography')],
  },

  chainWebpack(config) {
    const REG = /\.md$/
    config.module.rule('asset').exclude.add(REG).end()
    config.module.rule('md').test(REG).type('asset/source').end()
  },
})
