import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Input } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { DataTable } from '@javcb/ui'
import { 
  Building2, 
  Plus, 
  Search, 
  Filter,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react'

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Mock data for properties
  const properties = [
    {
      id: '1',
      name: '123 Main Street',
      address: '123 Main St, City, State 12345',
      type: 'Apartment',
      units: 8,
      occupancy: 6,
      status: 'active',
      monthlyRent: 1200,
      lastPayment: '2024-01-15'
    },
    {
      id: '2',
      name: '456 Oak Avenue',
      address: '456 Oak Ave, City, State 12345',
      type: 'House',
      units: 1,
      occupancy: 1,
      status: 'active',
      monthlyRent: 1800,
      lastPayment: '2024-01-10'
    },
    {
      id: '3',
      name: '789 Pine Road',
      address: '789 Pine Rd, City, State 12345',
      type: 'Duplex',
      units: 2,
      occupancy: 1,
      status: 'maintenance',
      monthlyRent: 1500,
      lastPayment: '2023-12-20'
    }
  ]

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || property.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success'
      case 'maintenance': return 'warning'
      case 'vacant': return 'destructive'
      default: return 'default'
    }
  }

  const tableColumns = [
    {
      key: 'name',
      header: 'Property',
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-text-primary">{value}</div>
          <div className="text-sm text-text-secondary">{row.address}</div>
        </div>
      )
    },
    {
      key: 'type',
      header: 'Type',
      render: (value: string) => (
        <Badge variant="outline">{value}</Badge>
      )
    },
    {
      key: 'occupancy',
      header: 'Occupancy',
      render: (value: number, row: any) => (
        <div className="text-sm">
          <span className="font-medium">{value}</span>
          <span className="text-text-secondary">/{row.units}</span>
        </div>
      )
    },
    {
      key: 'status',
      header: 'Status',
      render: (value: string) => (
        <Badge variant={getStatusColor(value)}>
          {value}
        </Badge>
      )
    },
    {
      key: 'monthlyRent',
      header: 'Monthly Rent',
      render: (value: number) => (
        <span className="font-medium">${value.toLocaleString()}</span>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (value: any, row: any) => (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
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
          <h1 className="text-2xl font-bold text-text-primary">Properties</h1>
          <p className="text-text-secondary">Manage your rental properties and units</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Property</span>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardBody className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                <Input
                  placeholder="Search properties..."
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
                <option value="active">Active</option>
                <option value="maintenance">Maintenance</option>
                <option value="vacant">Vacant</option>
              </select>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Properties Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">
              Properties ({filteredProperties.length})
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Export</Button>
              <Button variant="outline" size="sm">Bulk Actions</Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <DataTable
            columns={tableColumns}
            data={filteredProperties}
            emptyState="No properties found"
          />
        </CardBody>
      </Card>

      {/* Property Cards Grid (Alternative View) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-text-primary">{property.name}</h4>
                  <p className="text-sm text-text-secondary">{property.address}</p>
                </div>
                <Badge variant={getStatusColor(property.status)}>
                  {property.status}
                </Badge>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Type:</span>
                  <span className="text-text-primary">{property.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Occupancy:</span>
                  <span className="text-text-primary">{property.occupancy}/{property.units}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Monthly Rent:</span>
                  <span className="font-medium text-text-primary">${property.monthlyRent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Last Payment:</span>
                  <span className="text-text-primary">{property.lastPayment}</span>
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
