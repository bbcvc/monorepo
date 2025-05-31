import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200'>
      <div className='bg-white/80 shadow-xl rounded-2xl p-10 flex flex-col items-center w-full max-w-md'>
        <img src={logo} className='h-32 mb-6 animate-spin-slow' alt='logo' />
        <h1 className='text-2xl font-bold mb-4 text-gray-800'>欢迎使用 Monorepo 模版</h1>
        <p className='mb-6 text-gray-500 text-center'>快速开始你的多包开发之旅</p>
        <div className='flex gap-4'>
          <a
            className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            React 官网
          </a>
          <a
            className='px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition'
            href='https://tanstack.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            TanStack 官网
          </a>
        </div>
      </div>
    </div>
  )
}

// 自定义动画
// 在 styles.css 里加上：
// .animate-spin-slow { animation: spin 8s linear infinite; }
// @keyframes spin { to { transform: rotate(360deg); } }
