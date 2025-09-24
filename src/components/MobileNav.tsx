import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useShell } from '../contexts/ShellContext'
import { 
  LayoutDashboard, 
  Building2, 
  CreditCard, 
  FileText, 
  Wrench, 
  Receipt,
  Car,
  User
} from 'lucide-react'

const landlordNavItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/properties', label: 'Properties', icon: Building2 },
  { path: '/payments', label: 'Payments', icon: CreditCard },
  { path: '/document-center', label: 'Documents', icon: FileText },
  { path: '/maintenance', label: 'Maintenance', icon: Wrench },
  { path: '/transactions', label: 'Transactions', icon: Receipt },
]

const tenantNavItems = [
  { path: '/tenant/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/tenant/payments', label: 'Payments', icon: CreditCard },
  { path: '/tenant/documents', label: 'Documents', icon: FileText },
  { path: '/tenant/maintenance', label: 'Maintenance', icon: Wrench },
  { path: '/tenant/transactions', label: 'Transactions', icon: Receipt },
  { path: '/tenant/vehicles', label: 'Vehicles', icon: Car },
]

export function MobileNav() {
  const { role } = useShell()
  const location = useLocation()
  
  const navItems = role === 'landlord' ? landlordNavItems : tenantNavItems

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-surface border-t border-gray-200 px-2 py-1 md:hidden">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path || 
            (item.path !== '/dashboard' && item.path !== '/tenant/dashboard' && 
             location.pathname.startsWith(item.path))
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-brand-500 bg-brand-500/10'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
