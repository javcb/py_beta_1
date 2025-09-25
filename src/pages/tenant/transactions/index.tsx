import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Input } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { DataTable } from '@javcb/ui'
import { 
  Receipt, 
  Search, 
  Filter,
  Download,
  Eye,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText
} from 'lucide-react'

export default function TenantTransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')

  // Mock data for tenant transactions
  const transactions = [
    {
      id: '1',
      type: 'rent_payment',
      description: 'Rent Payment - January 2024',
      amount: 1200,
      status: 'completed',
      date: '2024-01-01',
      confirmationNumber: 'PAY-123456',
      receiptUrl: '/receipts/rent-jan-2024.pdf',
      paymentMethod: 'Credit Card'
    },
    {
      id: '2',
      type: 'late_fee',
      description: 'Late Fee - January 2024',
      amount: 50,
      status: 'completed',
      date: '2024-01-15',
      confirmationNumber: 'PAY-789012',
      receiptUrl: '/receipts/late-fee-jan-2024.pdf',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: '3',
      type: 'deposit_refund',
      description: 'Security Deposit Refund',
      amount: -500,
      status: 'pending',
      date: '2024-01-20',
      confirmationNumber: 'REF-345678',
      receiptUrl: null,
      paymentMethod: 'Bank Transfer'
    },
    {
      id: '4',
      type: 'utility_payment',
      description: 'Utility Payment - December 2023',
      amount: 85,
      status: 'completed',
      date: '2023-12-28',
      confirmationNumber: 'PAY-901234',
      receiptUrl: '/receipts/utility-dec-2023.pdf',
      paymentMethod: 'Credit Card'
    }
  ]

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.confirmationNumber.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === 'all' || transaction.type === filterType
    return matchesSearch && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'pending': return 'warning'
      case 'failed': return 'destructive'
      case 'cancelled': return 'default'
      default: return 'default'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'pending': return Clock
      case 'failed': return AlertTriangle
      default: return Clock
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'rent_payment': return 'blue'
      case 'late_fee': return 'orange'
      case 'deposit_refund': return 'green'
      case 'utility_payment': return 'purple'
      default: return 'gray'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'rent_payment': return 'Rent Payment'
      case 'late_fee': return 'Late Fee'
      case 'deposit_refund': return 'Deposit Refund'
      case 'utility_payment': return 'Utility Payment'
      default: return type
    }
  }

  const tableColumns = [
    {
      key: 'description',
      header: 'Description',
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-text-primary">{value}</div>
          <div className="text-sm text-text-secondary">{row.confirmationNumber}</div>
        </div>
      )
    },
    {
      key: 'type',
      header: 'Type',
      render: (value: string) => (
        <Badge variant="outline" className={`text-${getTypeColor(value)}-600 border-${getTypeColor(value)}-200`}>
          {getTypeLabel(value)}
        </Badge>
      )
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (value: number) => (
        <div className={`font-medium ${value < 0 ? 'text-green-600' : 'text-text-primary'}`}>
          {value < 0 ? '' : '+'}${Math.abs(value).toLocaleString()}
        </div>
      )
    },
    {
      key: 'status',
      header: 'Status',
      render: (value: string) => {
        const Icon = getStatusIcon(value)
        return (
          <div className="flex items-center space-x-2">
            <Icon className="h-4 w-4" />
            <Badge variant={getStatusColor(value)}>
              {value}
            </Badge>
          </div>
        )
      }
    },
    {
      key: 'date',
      header: 'Date',
      render: (value: string) => (
        <div className="text-sm">
          {new Date(value).toLocaleDateString()}
        </div>
      )
    },
    {
      key: 'paymentMethod',
      header: 'Method',
      render: (value: string) => (
        <div className="text-sm text-text-secondary">
          {value}
        </div>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (value: any, row: any) => (
        <div className="flex items-center space-x-2">
          {row.receiptUrl && (
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <FileText className="h-4 w-4" />
              <span>Receipt</span>
            </Button>
          )}
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Transactions</h1>
          <p className="text-text-secondary">View your payment history and receipts</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Transaction Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Total Paid</p>
                <p className="text-2xl font-bold text-text-primary">$1,335</p>
                <p className="text-xs text-text-secondary">This year</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Receipt className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Transactions</p>
                <p className="text-2xl font-bold text-text-primary">{transactions.length}</p>
                <p className="text-xs text-text-secondary">All time</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Pending</p>
                <p className="text-2xl font-bold text-text-primary">
                  {transactions.filter(t => t.status === 'pending').length}
                </p>
                <p className="text-xs text-text-secondary">Transactions</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardBody className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                <Input
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="all">All Types</option>
                <option value="rent_payment">Rent Payment</option>
                <option value="late_fee">Late Fee</option>
                <option value="deposit_refund">Deposit Refund</option>
                <option value="utility_payment">Utility Payment</option>
              </select>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">
              Transaction History ({filteredTransactions.length})
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Bulk Actions</Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <DataTable
            columns={tableColumns}
            data={filteredTransactions}
            emptyState="No transactions found"
          />
        </CardBody>
      </Card>

      {/* Recent Receipts */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-text-primary">Recent Receipts</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-3">
            {transactions
              .filter(t => t.receiptUrl)
              .slice(0, 3)
              .map((transaction) => (
                <div key={transaction.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <FileText className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary">{transaction.description}</h4>
                    <p className="text-sm text-text-secondary">
                      {transaction.date} • {transaction.confirmationNumber}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-text-primary">${transaction.amount}</span>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
