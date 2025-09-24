import React from 'react'
import { Card, CardBody, CardHeader } from '../../adapters/Card'
import { Button } from '../../adapters/Button'
import { Badge } from '../../adapters/Badge'
import { 
  LayoutDashboard, 
  Building2, 
  CreditCard, 
  FileText, 
  Wrench, 
  BarChart3,
  Plus,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react'

export default function DashboardPage() {
  // Mock data for KPI tiles
  const kpiData = [
    {
      title: 'Total Revenue',
      value: '$45,230',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Properties',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      title: 'Active Tenants',
      value: '28',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Maintenance Requests',
      value: '5',
      change: '-2',
      trend: 'down',
      icon: Wrench,
      color: 'text-orange-600'
    }
  ]

  const quickActions = [
    { label: 'Add Property', icon: Building2, href: '/properties' },
    { label: 'New Payment', icon: CreditCard, href: '/payments' },
    { label: 'Upload Document', icon: FileText, href: '/document-center' },
    { label: 'Maintenance Request', icon: Wrench, href: '/maintenance' }
  ]

  const recentActivity = [
    { id: 1, type: 'payment', description: 'Payment received from John Doe', time: '2 hours ago', amount: '$1,200' },
    { id: 2, type: 'maintenance', description: 'Maintenance request submitted', time: '4 hours ago', status: 'pending' },
    { id: 3, type: 'document', description: 'Lease agreement uploaded', time: '1 day ago', status: 'completed' },
    { id: 4, type: 'property', description: 'New property added', time: '2 days ago', status: 'active' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary">Welcome back! Here's what's happening with your properties.</p>
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
                      <TrendingUp className={`h-4 w-4 ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                      <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
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
                  <Icon className="h-4 w-4" />
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
              {recentActivity.map((activity) => (
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
                  <div className="flex-shrink-0">
                    {activity.amount && (
                      <span className="text-sm font-medium text-green-600">{activity.amount}</span>
                    )}
                    {activity.status && (
                      <Badge variant={activity.status === 'completed' ? 'success' : 'warning'}>
                        {activity.status}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-text-primary">Revenue Trend</h3>
          </CardHeader>
          <CardBody>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-text-secondary">Chart placeholder</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-text-primary">Property Occupancy</h3>
          </CardHeader>
          <CardBody>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-text-secondary">Chart placeholder</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
