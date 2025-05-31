import { Link, Outlet } from 'umi'

const demos_pages = [
  {
    title: 'icons',
    link: 'icons-demo',
  },
  {
    title: 'ui',
    link: 'ui-demo',
  },
  {
    title: 'pro-components',
    link: 'pro-components-demo',
  },
]

export default function Layout() {
  return (
    <div className='h-screen bg-gray-50 flex flex-col overflow-hidden'>
      <nav className='bg-white shadow-sm'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <div className='flex md:space-x-8 space-x-4'>
                <Link
                  to='/'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors'
                >
                  Home
                </Link>
                {demos_pages.map((item) => {
                  return (
                    <Link
                      to={`/${item.link}`}
                      className='whitespace-nowrap inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors'
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className='w-full py-6 px-6 lg:px-8 flex-1 h-0 overflow-auto'>
        <Outlet />
      </main>
    </div>
  )
}
