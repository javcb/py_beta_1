import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useShell } from '../contexts/ShellContext'
import { Button } from './adapters/Button'
import { 
  LayoutDashboard, 
  Building2, 
  CreditCard, 
  FileText, 
  Wrench, 
  BarChart3, 
  Receipt, 
  Settings,
  User,
  Car,
  Home
} from 'lucide-react'

interface SidebarProps {
  onClose?: () => void
}

const landlordNavItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/properties', label: 'Properties', icon: Building2 },
  { path: '/payments', label: 'Payments', icon: CreditCard },
  { path: '/document-center', label: 'Document Center', icon: FileText },
  { path: '/maintenance', label: 'Maintenance', icon: Wrench },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
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

const sharedNavItems = [
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar({ onClose }: SidebarProps) {
  const { role } = useShell()
  const location = useLocation()
  
  const navItems = role === 'landlord' ? landlordNavItems : tenantNavItems
  const allNavItems = [...navItems, ...sharedNavItems]

  return (
    <div className="w-64 bg-bg-surface border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-brand-500" />
          <span className="text-xl font-semibold text-text-primary">
            ParcelYield
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {allNavItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path || 
            (item.path !== '/dashboard' && location.pathname.startsWith(item.path))
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-500/10 text-brand-500 border border-brand-500/20'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-muted'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Role Indicator */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <div className={`w-2 h-2 rounded-full ${
            role === 'landlord' ? 'bg-blue-500' : 'bg-green-500'
          }`} />
          <span className="capitalize">{role}</span>
        </div>
      </div>
    </div>
  )
}
