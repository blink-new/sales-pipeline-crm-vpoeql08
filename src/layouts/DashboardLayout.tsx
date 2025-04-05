
import { UserButton } from '@clerk/clerk-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  LayoutGrid, 
  Users, 
  BarChart3, 
  Settings,
  Building2
} from 'lucide-react'

const navigation = [
  { name: 'Pipeline', href: '/pipeline', icon: LayoutGrid },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Companies', href: '/companies', icon: Building2 },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function DashboardLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="/logo.svg"
                  alt="Your Company"
                />
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          group flex items-center px-2 py-2 text-sm font-medium rounded-md
                          ${location.pathname.startsWith(item.href)
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                        `}
                      >
                        <Icon
                          className={`
                            mr-3 flex-shrink-0 h-6 w-6
                            ${location.pathname.startsWith(item.href)
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500'}
                          `}
                        />
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
            <div className="flex-1 px-4 flex justify-end">
              <div className="ml-4 flex items-center md:ml-6">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>

          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}