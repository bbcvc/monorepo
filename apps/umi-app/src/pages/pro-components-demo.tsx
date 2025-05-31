import ReactLogo from '@monorepo/pro-components/react-logo'

export default function ProComponentsDemo() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: '40px auto',
        padding: 24,
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px 0 rgba(27, 3, 3, 0.06)',
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Pro Components 组件库演示</h2>
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontWeight: 600 }}>ReactLogo 业务组件</h3>
        <ReactLogo />
      </div>
    </div>
  )
}
