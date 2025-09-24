import React, { createContext, useContext, useState, useEffect } from 'react'

type UserRole = 'landlord' | 'tenant'

interface ShellContextType {
  role: UserRole
  setRole: (role: UserRole) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  isSearchOpen: boolean
  setIsSearchOpen: (open: boolean) => void
}

const ShellContext = createContext<ShellContextType | undefined>(undefined)

export function ShellProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('landlord')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Load role from localStorage on mount
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole') as UserRole
    if (savedRole && (savedRole === 'landlord' || savedRole === 'tenant')) {
      setRoleState(savedRole)
    }
  }, [])

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole)
    localStorage.setItem('userRole', newRole)
  }

  return (
    <ShellContext.Provider
      value={{
        role,
        setRole,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </ShellContext.Provider>
  )
}

export function useShell() {
  const context = useContext(ShellContext)
  if (context === undefined) {
    throw new Error('useShell must be used within a ShellProvider')
  }
  return context
}
