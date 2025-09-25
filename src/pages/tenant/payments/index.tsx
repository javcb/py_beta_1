import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Input } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { DataTable } from '@javcb/ui'
import { Modal } from '@javcb/ui'
// import { PaymentWizard } from '../../patterns/modals/PaymentWizard'
// import { AutopayManager } from '../../patterns/modals/AutopayManager'
import { 
  CreditCard, 
  Plus, 
  Search, 
  Filter,
  Download,
  Settings,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  Banknote
} from 'lucide-react'

export default function TenantPaymentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showPaymentWizard, setShowPaymentWizard] = useState(false)
  const [showAutopayManager, setShowAutopayManager] = useState(false)

  // Mock data for tenant payments
  const payments = [
    {
      id: '1',
      amount: 1200,
      amountPaid: 1200,
      status: 'completed',
      type: 'rent',
      dueDate: '2024-01-01',
      paidDate: '2024-01-01',
      paymentMethod: 'Credit Card',
      confirmationNumber: 'PAY-123456',
      notes: 'Monthly rent payment'
    },
    {
      id: '2',
      amount: 1200,
      amountPaid: 0,
      status: 'overdue',
      type: 'rent',
      dueDate: '2024-02-01',
      paymentMethod: null,
      confirmationNumber: null,
      notes: 'Monthly rent payment'
    },
    {
      id: '3',
      amount: 50,
      amountPaid: 50,
      status: 'completed',
      type: 'fee',
      dueDate: '2024-01-15',
      paidDate: '2024-01-15',
      paymentMethod: 'Bank Transfer',
      confirmationNumber: 'PAY-789012',
      notes: 'Late fee'
    }
  ]

  const paymentMethods = [
    {
      id: '1',
      type: 'Credit Card',
      lastFour: '1234',
      brand: 'Visa',
      isDefault: true,
      expiryMonth: 12,
      expiryYear: 2025
    },
    {
      id: '2',
      type: 'Bank Account',
      lastFour: '5678',
      bank: 'Chase',
      isDefault: false,
      accountType: 'Checking'
    }
  ]

  const autopayConfig = {
    isEnabled: true,
    paymentMethodId: '1',
    amountType: 'full',
    scheduledDate: '1st of each month',
    nextPayment: '2024-03-01'
  }

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.confirmationNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.notes.toLowerCase().includes(searchQuery.toLowerCase())
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
      key: 'confirmationNumber',
      header: 'Confirmation',
      render: (value: string | null) => (
        <div className="text-sm font-mono text-text-secondary">
          {value || '-'}
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
          <p className="text-text-secondary">Manage your rent payments and payment methods</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline"
            onClick={() => setShowAutopayManager(true)}
            className="flex items-center space-x-2"
          >
            <Settings className="h-4 w-4" />
            <span>Autopay</span>
          </Button>
          <Button 
            className="flex items-center space-x-2"
            onClick={() => setShowPaymentWizard(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Pay Now (Placeholder)</span>
          </Button>
        </div>
      </div>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">Payment Methods</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Method
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <Card key={method.id} className={`${method.isDefault ? 'border-brand-500 bg-brand-50' : ''}`}>
                <CardBody className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-text-primary">{method.type}</p>
                        {method.isDefault && (
                          <Badge variant="success" className="text-xs">Default</Badge>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary">
                        {method.brand || method.bank} •••• {method.lastFour}
                      </p>
                      {method.expiryMonth && (
                        <p className="text-xs text-text-secondary">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      )}
                    </div>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Autopay Status */}
      {autopayConfig.isEnabled && (
        <Card className="border-green-200 bg-green-50">
          <CardBody className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-green-800">Autopay is Active</h4>
                <p className="text-sm text-green-700">
                  Next payment: {autopayConfig.nextPayment} • {autopayConfig.amountType} amount
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowAutopayManager(true)}
              >
                Manage
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

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
              Payment History ({filteredPayments.length})
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <DataTable
            columns={tableColumns}
            data={filteredPayments}
            emptyState="No payments found"
          />
        </CardBody>
      </Card>

      {/* Payment Wizard Modal */}
      {/* <PaymentWizard
        open={showPaymentWizard}
        onClose={() => setShowPaymentWizard(false)}
      /> */}

      {/* Autopay Manager Modal */}
      {/* <AutopayManager
        open={showAutopayManager}
        onClose={() => setShowAutopayManager(false)}
        config={autopayConfig}
        paymentMethods={paymentMethods}
      /> */}
    </div>
  )
}
