import React from 'react'
import { Card, CardBody, CardHeader } from '../../adapters/Card'
import { Button } from '../../adapters/Button'
import { Badge } from '../../adapters/Badge'
import { 
  Home, 
  CreditCard, 
  FileText, 
  Wrench, 
  Car,
  Plus,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react'

export default function TenantDashboardPage() {
  // Mock data for tenant KPI tiles
  const kpiData = [
    {
      title: 'Rent Due',
      value: '$1,200',
      change: 'Due in 5 days',
      trend: 'warning',
      icon: DollarSign,
      color: 'text-orange-600'
    },
    {
      title: 'Maintenance Requests',
      value: '2',
      change: '1 pending',
      trend: 'warning',
      icon: Wrench,
      color: 'text-blue-600'
    },
    {
      title: 'Documents',
      value: '8',
      change: '2 new',
      trend: 'up',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      title: 'Vehicles',
      value: '1',
      change: 'Registered',
      trend: 'neutral',
      icon: Car,
      color: 'text-purple-600'
    }
  ]

  const quickActions = [
    { label: 'Pay Rent', icon: CreditCard, href: '/tenant/payments', color: 'bg-green-500' },
    { label: 'Submit Request', icon: Wrench, href: '/tenant/maintenance', color: 'bg-blue-500' },
    { label: 'View Documents', icon: FileText, href: '/tenant/documents', color: 'bg-purple-500' },
    { label: 'Register Vehicle', icon: Car, href: '/tenant/vehicles', color: 'bg-orange-500' }
  ]

  const recentActivity = [
    { 
      id: 1, 
      type: 'payment', 
      description: 'Rent payment processed', 
      time: '2 days ago', 
      amount: '$1,200',
      status: 'completed'
    },
    { 
      id: 2, 
      type: 'maintenance', 
      description: 'Maintenance request submitted', 
      time: '1 week ago', 
      status: 'pending'
    },
    { 
      id: 3, 
      type: 'document', 
      description: 'Lease agreement updated', 
      time: '2 weeks ago', 
      status: 'completed'
    },
    { 
      id: 4, 
      type: 'vehicle', 
      description: 'Vehicle registration approved', 
      time: '3 weeks ago', 
      status: 'completed'
    }
  ]

  const upcomingReminders = [
    { id: 1, title: 'Rent Due', date: '2024-02-01', type: 'payment', priority: 'high' },
    { id: 2, title: 'Lease Renewal', date: '2024-06-01', type: 'document', priority: 'medium' },
    { id: 3, title: 'Vehicle Registration', date: '2024-12-01', type: 'vehicle', priority: 'low' }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'pending': return Clock
      case 'warning': return AlertTriangle
      default: return Clock
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'pending': return 'warning'
      case 'warning': return 'destructive'
      default: return 'default'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive'
      case 'medium': return 'warning'
      case 'low': return 'default'
      default: return 'default'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Tenant Dashboard</h1>
          <p className="text-text-secondary">Welcome back! Here's your rental overview.</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Quick Action</span>
        </Button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-secondary">{kpi.title}</p>
                    <p className="text-2xl font-bold text-text-primary">{kpi.value}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {kpi.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                      {kpi.trend === 'warning' && <AlertTriangle className="h-4 w-4 text-orange-500" />}
                      <span className={`text-sm ${
                        kpi.trend === 'up' ? 'text-green-600' : 
                        kpi.trend === 'warning' ? 'text-orange-600' : 'text-text-secondary'
                      }`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 ${kpi.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-text-primary">Quick Actions</h3>
          </CardHeader>
          <CardBody className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start space-x-3"
                  onClick={() => {/* Navigate to action.href */}}
                >
                  <div className={`p-1 rounded ${action.color}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span>{action.label}</span>
                </Button>
              )
            })}
          </CardBody>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold text-text-primary">Recent Activity</h3>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {recentActivity.map((activity) => {
                const Icon = getStatusIcon(activity.status)
                return (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-bg-muted">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-brand-500">
                          {activity.type.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">{activity.description}</p>
                      <p className="text-xs text-text-secondary">{activity.time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {activity.amount && (
                        <span className="text-sm font-medium text-green-600">{activity.amount}</span>
                      )}
                      <Badge variant={getStatusColor(activity.status)}>
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Upcoming Reminders */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-text-primary">Upcoming Reminders</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-3">
            {upcomingReminders.map((reminder) => (
              <div key={reminder.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{reminder.title}</h4>
                    <p className="text-sm text-text-secondary">{reminder.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getPriorityColor(reminder.priority)}>
                    {reminder.priority}
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Property Info Card */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-text-primary">Your Property</h3>
        </CardHeader>
        <CardBody>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Home className="h-8 w-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-text-primary">123 Main Street, Unit 2B</h4>
              <p className="text-sm text-text-secondary">2 Bedroom, 1 Bath • 1,200 sq ft</p>
              <p className="text-sm text-text-secondary">Lease expires: June 1, 2024</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-text-primary">$1,200/month</p>
              <p className="text-sm text-text-secondary">Rent</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
