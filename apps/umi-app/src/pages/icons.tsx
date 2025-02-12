import * as icons from '@monorepo/icons'
import { useState } from 'react'

const IconsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedName, setCopiedName] = useState<string | null>(null)

  const filteredIcons = Object.entries(icons).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCopy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name)
      setCopiedName(name)
      setTimeout(() => setCopiedName(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Icon Library</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search icons..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '24px',
          padding: '16px'
        }}
      >
        {filteredIcons.map(([name, Icon], i) => (
          <div
            key={i}
            onClick={() => handleCopy(name)}
            className="flex flex-col items-center justify-center relative"
            style={{
              aspectRatio: '1',
              padding: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              backgroundColor: 'white',
              transition: 'all 0.2s ease-in-out',
              cursor: 'pointer',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#60a5fa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <div className="flex-1 flex items-center justify-center" style={{ width: '100%' }}>
              <Icon style={{ width: '32px', height: '32px' }} />
            </div>
            <div className="mt-2 text-center w-full">
              <span className="text-sm text-gray-600 break-all px-2">
                {name}
              </span>
            </div>
            {copiedName === name && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  zIndex: 10
                }}
              >
                Copied!
              </div>
            )}
          </div>
        ))}
      </div>
      
      {filteredIcons.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No icons found matching "{searchTerm}"
        </div>
      )}
    </div>
  )
}

export default IconsPage
