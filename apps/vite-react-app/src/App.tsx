import { useState } from 'react'
import './App.css'
import { Button, Input } from '@monorepo/ui'
import { Citrus } from '@monorepo/icons'
import ReactLogo from '@monorepo/pro-components/react-logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full space-y-1 flex flex-col items-center justify-center'>
        <ReactLogo />
        <Button className='bg-amber-500' />
        <Input />
      </div>

      <Citrus color='red' fontSize='24' />

      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
