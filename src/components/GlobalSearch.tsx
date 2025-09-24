import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShell } from '../contexts/ShellContext'
import { Button } from './adapters/Button'
import { Card } from './adapters/Card'
import { Badge } from './adapters/Badge'
import { 
  Search, 
  FileText, 
  Building2, 
  CreditCard, 
  X,
  ArrowRight
} from 'lucide-react'

// Mock data for search
const mockDocuments = [
  { id: '1', name: 'Lease Agreement - 123 Main St', type: 'lease', primaryTag: 'legal' },
  { id: '2', name: 'Property Inspection Report', type: 'inspection', primaryTag: 'maintenance' },
  { id: '3', name: 'Rent Receipt - January 2024', type: 'receipt', primaryTag: 'financial' },
]

const mockProperties = [
  { id: '1', name: '123 Main Street', address: '123 Main St, City, State' },
  { id: '2', name: '456 Oak Avenue', address: '456 Oak Ave, City, State' },
  { id: '3', name: '789 Pine Road', address: '789 Pine Rd, City, State' },
]

const mockPayments = [
  { id: '1', amount: 1200, status: 'completed', description: 'Rent Payment - January' },
  { id: '2', amount: 50, status: 'pending', description: 'Late Fee' },
  { id: '3', amount: 1200, status: 'overdue', description: 'Rent Payment - February' },
]

const mockRoutes = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/properties', label: 'Properties', icon: '🏠' },
  { path: '/payments', label: 'Payments', icon: '💳' },
  { path: '/document-center', label: 'Document Center', icon: '📄' },
  { path: '/maintenance', label: 'Maintenance', icon: '🔧' },
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

    // Search documents
    mockDocuments
      .filter(doc => 
        doc.name.toLowerCase().includes(query) || 
        doc.type.toLowerCase().includes(query) ||
        doc.primaryTag.toLowerCase().includes(query)
      )
      .forEach(doc => {
        results.push({ ...doc, category: 'documents', icon: FileText })
      })

    // Search properties
    mockProperties
      .filter(prop => 
        prop.name.toLowerCase().includes(query) || 
        prop.address.toLowerCase().includes(query)
      )
      .forEach(prop => {
        results.push({ ...prop, category: 'properties', icon: Building2 })
      })

    // Search payments
    mockPayments
      .filter(payment => 
        payment.description.toLowerCase().includes(query) ||
        payment.status.toLowerCase().includes(query)
      )
      .forEach(payment => {
        results.push({ ...payment, category: 'payments', icon: CreditCard })
      })

    // Search routes
    mockRoutes
      .filter(route => 
        route.label.toLowerCase().includes(query)
      )
      .forEach(route => {
        results.push({ ...route, category: 'navigation', icon: '🔍' })
      })

    setFilteredResults(results)
  }, [searchQuery])

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
          placeholder="Search documents, properties, payments..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setSearchQuery('')
              setIsOpen(false)
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
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
