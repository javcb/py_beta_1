import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Demo Tailwind Plus</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/documents"
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  location.pathname === '/' || location.pathname.startsWith('/documents')
                    ? 'border-brand-500 text-brand-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Documents
              </Link>
              <Link
                to="/payments"
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  location.pathname === '/payments'
                    ? 'border-brand-500 text-brand-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Payments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
