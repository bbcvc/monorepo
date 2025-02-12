import { Link, Outlet } from 'umi'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex space-x-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/icons" 
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors"
                >
                  Icons
                </Link>
                <a 
                  href="https://github.com/umijs/umi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
