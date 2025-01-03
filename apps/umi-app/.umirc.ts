import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/icons', component: 'icons' },
  ],
  npmClient: 'pnpm',
})
