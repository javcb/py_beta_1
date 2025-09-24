import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShell } from '../contexts/ShellContext'
import { Button } from './adapters/Button'
import { Card } from './adapters/Card'
import { Badge } from './adapters/Badge'
import { ShortcutHelp } from './ShortcutHelp'
import { getDocuments } from '../mock/documents'
import { getPayments } from '../mock/payments'
import { 
  Search, 
  FileText, 
  Building2, 
  CreditCard, 
  X,
  ArrowRight,
  Keyboard
} from 'lucide-react'

// Mock data for search - using actual mock data
const mockProperties = [
  { id: '1', name: '123 Main Street', address: '123 Main St, City, State' },
  { id: '2', name: '456 Oak Avenue', address: '456 Oak Ave, City, State' },
  { id: '3', name: '789 Pine Road', address: '789 Pine Rd, City, State' },
]

// Role-based routes
const landlordRoutes = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/properties', label: 'Properties', icon: '🏠' },
  { path: '/payments', label: 'Payments', icon: '💳' },
  { path: '/document-center', label: 'Document Center', icon: '📄' },
  { path: '/maintenance', label: 'Maintenance', icon: '🔧' },
  { path: '/analytics', label: 'Analytics', icon: '📈' },
  { path: '/transactions', label: 'Transactions', icon: '💼' },
]

const tenantRoutes = [
  { path: '/tenant/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/tenant/payments', label: 'Payments', icon: '💳' },
  { path: '/tenant/transactions', label: 'Transactions', icon: '💼' },
  { path: '/tenant/documents', label: 'Documents', icon: '📄' },
  { path: '/tenant/maintenance', label: 'Maintenance', icon: '🔧' },
  { path: '/tenant/vehicles', label: 'Vehicles', icon: '🚗' },
]

export function GlobalSearch() {
  const { searchQuery, setSearchQuery, role } = useShell()
  const [isOpen, setIsOpen] = useState(false)
  const [filteredResults, setFilteredResults] = useState<any[]>([])
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter results based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results: any[] = []

    // Search documents from mock data
    const documents = getDocuments()
    documents
      .filter(doc => 
        doc.title.toLowerCase().includes(query) || 
        doc.owner.toLowerCase().includes(query) ||
        doc.status.toLowerCase().includes(query)
      )
      .forEach(doc => {
        results.push({ 
          ...doc, 
          name: doc.title,
          category: 'documents', 
          icon: FileText,
          type: 'document'
        })
      })

    // Search properties
    mockProperties
      .filter(prop => 
        prop.name.toLowerCase().includes(query) || 
        prop.address.toLowerCase().includes(query)
      )
      .forEach(prop => {
        results.push({ ...prop, category: 'properties', icon: Building2, type: 'property' })
      })

    // Search payments from mock data
    const payments = getPayments()
    payments
      .filter(payment => 
        payment.id.toLowerCase().includes(query) ||
        payment.status.toLowerCase().includes(query)
      )
      .forEach(payment => {
        results.push({ 
          ...payment, 
          name: `Payment ${payment.id}`,
          description: `$${(payment.amount/100).toFixed(2)} - ${payment.status}`,
          category: 'payments', 
          icon: CreditCard,
          type: 'payment'
        })
      })

    // Search routes based on current role
    const routes = role === 'landlord' ? landlordRoutes : tenantRoutes
    routes
      .filter(route => 
        route.label.toLowerCase().includes(query)
      )
      .forEach(route => {
        results.push({ ...route, category: 'navigation', icon: '🔍', type: 'route' })
      })

    setFilteredResults(results)
  }, [searchQuery, role])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setIsOpen(true)
  }

  const handleResultClick = (result: any) => {
    if (result.category === 'navigation') {
      navigate(result.path)
    } else if (result.category === 'documents') {
      navigate('/document-center')
    } else if (result.category === 'properties') {
      navigate('/properties')
    } else if (result.category === 'payments') {
      navigate('/payments')
    }
    
    setSearchQuery('')
    setIsOpen(false)
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      }
      
      // Ctrl/Cmd + ? to show shortcuts help
      if ((e.ctrlKey || e.metaKey) && e.key === '?') {
        e.preventDefault()
        // This will be handled by ShortcutHelp component
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setSearchQuery('')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'pending': return 'warning'
      case 'overdue': return 'destructive'
      default: return 'default'
    }
  }

  return (
    <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search documents, properties, payments... (Ctrl+K)"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setSearchQuery('')
                  setIsOpen(false)
                }}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <ShortcutHelp />
          </div>
        </div>

      {/* Search Results */}
      {isOpen && (searchQuery || filteredResults.length > 0) && (
        <Card className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto z-50">
          {filteredResults.length === 0 ? (
            <div className="p-4 text-center text-text-secondary">
              No results found for "{searchQuery}"
            </div>
          ) : (
            <div className="p-2">
              {filteredResults.map((result, index) => {
                const Icon = result.icon
                return (
                  <button
                    key={`${result.category}-${result.id || index}`}
                    onClick={() => handleResultClick(result)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-bg-muted text-left transition-colors"
                  >
                    <div className="flex-shrink-0">
                      {typeof Icon === 'string' ? (
                        <span className="text-lg">{Icon}</span>
                      ) : (
                        <Icon className="h-5 w-5 text-text-secondary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-text-primary truncate">
                          {result.name || result.label || result.description}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {result.category}
                        </Badge>
                        {result.status && (
                          <Badge variant={getStatusColor(result.status)} className="text-xs">
                            {result.status}
                          </Badge>
                        )}
                      </div>
                      {(result.address || result.type) && (
                        <p className="text-sm text-text-secondary truncate">
                          {result.address || result.type}
                        </p>
                      )}
                      {result.amount && (
                        <p className="text-sm text-text-secondary">
                          ${result.amount.toLocaleString()}
                        </p>
                      )}
                    </div>
                    <ArrowRight className="h-4 w-4 text-text-secondary" />
                  </button>
                )
              })}
            </div>
          )}
        </Card>
      )}
    </div>
  )
}
