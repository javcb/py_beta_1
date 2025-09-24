import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '../../adapters/Card'
import { Button } from '../../adapters/Button'
import { Input } from '../../adapters/Input'
import { Badge } from '../../adapters/Badge'
import { Table } from '../../adapters/Table'
import { Modal } from '../../adapters/Modal'
import { PaymentWizard } from '../../patterns/modals/PaymentWizard'
import { 
  CreditCard, 
  Plus, 
  Search, 
  Filter,
  Download,
  MoreHorizontal,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react'

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showPaymentWizard, setShowPaymentWizard] = useState(false)

  // Mock data for payments
  const payments = [
    {
      id: '1',
      propertyId: '1',
      propertyName: '123 Main Street',
      tenantId: '1',
      tenantName: 'John Doe',
      amount: 1200,
      amountPaid: 1200,
      status: 'completed',
      type: 'rent',
      dueDate: '2024-01-01',
      paidDate: '2024-01-01',
      paymentMethod: 'Credit Card',
      notes: 'Monthly rent payment'
    },
    {
      id: '2',
      propertyId: '2',
      propertyName: '456 Oak Avenue',
      tenantId: '2',
      tenantName: 'Jane Smith',
      amount: 1800,
      amountPaid: 0,
      status: 'overdue',
      type: 'rent',
      dueDate: '2024-01-01',
      paymentMethod: null,
      notes: 'Monthly rent payment'
    },
    {
      id: '3',
      propertyId: '1',
      propertyName: '123 Main Street',
      tenantId: '1',
      tenantName: 'John Doe',
      amount: 50,
      amountPaid: 50,
      status: 'completed',
      type: 'fee',
      dueDate: '2024-01-15',
      paidDate: '2024-01-15',
      paymentMethod: 'Bank Transfer',
      notes: 'Late fee'
    }
  ]

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.tenantName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'pending': return 'warning'
      case 'overdue': return 'destructive'
      case 'cancelled': return 'default'
      default: return 'default'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'pending': return Clock
      case 'overdue': return AlertTriangle
      default: return Clock
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'rent': return 'blue'
      case 'deposit': return 'green'
      case 'fee': return 'orange'
      case 'utility': return 'purple'
      default: return 'gray'
    }
  }

  const tableColumns = [
    {
      key: 'propertyName',
      header: 'Property',
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-text-primary">{value}</div>
          <div className="text-sm text-text-secondary">{row.tenantName}</div>
        </div>
      )
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (value: number, row: any) => (
        <div>
          <div className="font-medium text-text-primary">${value.toLocaleString()}</div>
          {row.amountPaid > 0 && (
            <div className="text-sm text-green-600">Paid: ${row.amountPaid.toLocaleString()}</div>
          )}
        </div>
      )
    },
    {
      key: 'type',
      header: 'Type',
      render: (value: string) => (
        <Badge variant="outline" className={`text-${getTypeColor(value)}-600 border-${getTypeColor(value)}-200`}>
          {value}
        </Badge>
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
      key: 'dueDate',
      header: 'Due Date',
      render: (value: string) => (
        <div className="text-sm">
          {new Date(value).toLocaleDateString()}
        </div>
      )
    },
    {
      key: 'paymentMethod',
      header: 'Method',
      render: (value: string | null) => (
        <div className="text-sm text-text-secondary">
          {value || 'Not specified'}
        </div>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (value: any, row: any) => (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <DollarSign className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
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
          <h1 className="text-2xl font-bold text-text-primary">Payments</h1>
          <p className="text-text-secondary">Manage rent payments and financial transactions</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button 
            className="flex items-center space-x-2"
            onClick={() => setShowPaymentWizard(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Start Payment</span>
          </Button>
        </div>
      </div>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-text-primary">Payment Methods</h3>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Credit Card</p>
                <p className="text-sm text-text-secondary">**** 1234</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Bank Account</p>
                <p className="text-sm text-text-secondary">**** 5678</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg border-dashed">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Plus className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Add Method</p>
                <p className="text-sm text-text-secondary">Connect new payment method</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardBody className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                <Input
                  placeholder="Search payments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">
              Payments ({filteredPayments.length})
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Bulk Actions</Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Table
            columns={tableColumns}
            data={filteredPayments}
            empty="No payments found"
          />
        </CardBody>
      </Card>

      {/* Payment Wizard Modal */}
      <PaymentWizard
        open={showPaymentWizard}
        onClose={() => setShowPaymentWizard(false)}
      />
    </div>
  )
}