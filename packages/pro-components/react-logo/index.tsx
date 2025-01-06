import { ReactSvg } from '@monorepo/icons'

export default function ReactLogo() {
  return (
    <div
      style={{
        textAlign: 'center',
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '4px',
      }}
    >
      <h1 className='text-sm text-red-300'>组件库-自定义业务组件</h1>
      <h2>👇这是来自icons的图标</h2>
      <ReactSvg style={{ width: '100px', height: '100px' }} />
    </div>
  )
}
