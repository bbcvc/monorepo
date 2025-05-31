import { Button, Input } from '@monorepo/ui'
import { useState } from 'react'

export default function UIDemo() {
  const [value, setValue] = useState('')
  return (
    <div
      style={{
        maxWidth: 600,
        margin: '40px auto',
        padding: 24,
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)',
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>UI 组件库演示</h2>
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontWeight: 600 }}>Button 按钮</h3>
        <Button onClick={() => alert('按钮点击！')}>默认按钮</Button>
        <Button style={{ marginLeft: 12 }} className='bg-blue-500 text-white'>
          自定义样式
        </Button>
      </div>
      <div>
        <h3 style={{ fontWeight: 600 }}>Input 输入框</h3>
        <Input
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          placeholder='请输入内容...'
        />
        <div style={{ marginTop: 8, color: '#888' }}>当前输入：{value}</div>
      </div>
    </div>
  )
}
