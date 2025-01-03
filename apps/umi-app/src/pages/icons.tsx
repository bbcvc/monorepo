import * as icons from '@monorepo/icons'
const IconsPage = () => {
  return (
    <div>
      <p>This is icons page.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {Object.values(icons).map((Icon, i) => (
          <Icon key={i} style={{ width: 24, height: 24 }} />
        ))}
      </div>
    </div>
  )
}

export default IconsPage
