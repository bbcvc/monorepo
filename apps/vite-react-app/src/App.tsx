import { useState } from 'react'
import './App.css'
import { Button, Input } from '@monorepo/ui'
import { Citrus } from '@monorepo/icons'
import ReactLogo from '@monorepo/pro-components/react-logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200'>
      <div className='bg-white/80 shadow-xl rounded-2xl p-10 flex flex-col items-center w-full max-w-md'>
        <ReactLogo />
        <h1 className='text-2xl font-bold mb-4 text-gray-800 mt-4'>欢迎使用 Monorepo 模版</h1>
        <p className='mb-6 text-gray-500 text-center'>Vite + React + Monorepo 快速启动</p>
        <div className='flex gap-2 mb-4'>
          <Button className='bg-amber-500' />
          <Input />
        </div>
        <Citrus color='red' fontSize='24' />
        <div className='card w-full mt-4'>
          <button
            className='w-full px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition mb-2'
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className='text-gray-400 text-sm'>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div className='mt-2 text-xs text-gray-400'>
          Click on the Vite and React logos to learn more
        </div>
      </div>
    </div>
  )
}

export default App
