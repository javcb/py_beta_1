import React from 'react'
import { useShell } from '../contexts/ShellContext'
import { GlobalSearch } from './GlobalSearch'
import { Button } from './adapters/Button'
import { Avatar } from './adapters/Avatar'
import { 
  Menu, 
  Bell, 
  Search,
  ChevronDown
} from 'lucide-react'

interface TopbarProps {
  onMenuClick: () => void
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const { role, setRole, isSearchOpen, setIsSearchOpen } = useShell()

  const handleRoleChange = () => {
    setRole(role === 'landlord' ? 'tenant' : 'landlord')
  }

  return (
    <header className="bg-bg-surface border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Page title */}
          <h1 className="text-lg font-semibold text-text-primary">
            {role === 'landlord' ? 'Landlord Portal' : 'Tenant Portal'}
          </h1>
        </div>

        {/* Center - Global Search */}
        <div className="flex-1 max-w-md mx-4">
          <GlobalSearch />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Role Selector */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleRoleChange}
            className="hidden sm:flex items-center space-x-2"
          >
            <span className="capitalize">{role}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>

          {/* Search toggle for mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="sm:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          {/* User Avatar */}
          <Avatar
            src=""
            alt="User"
            fallback="U"
            className="h-8 w-8"
          />
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="mt-3 sm:hidden">
          <GlobalSearch />
        </div>
      )}
    </header>
  )
}
