import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardHeader } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { Avatar } from '@javcb/ui'
import { 
  Building2, 
  MapPin, 
  Users, 
  DollarSign, 
  Calendar,
  Edit,
  Settings,
  Wrench,
  FileText,
  Phone,
  Mail
} from 'lucide-react'

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>()
  
  // Mock property data
  const property = {
    id: id || '1',
    name: '123 Main Street',
    address: '123 Main St, City, State 12345',
    type: 'Apartment Building',
    units: 8,
    occupancy: 6,
    status: 'active',
    monthlyRent: 1200,
    totalRevenue: 14400,
    lastPayment: '2024-01-15',
    description: 'A modern apartment building in the heart of the city with excellent amenities and convenient access to public transportation.',
    amenities: ['Parking', 'Laundry', 'Gym', 'Pool'],
    yearBuilt: 2018,
    squareFootage: 12000
  }

  // Mock tenant data
  const tenants = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '(555) 123-4567',
      unit: '1A',
      rent: 1200,
      moveInDate: '2023-06-01',
      status: 'current'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '(555) 234-5678',
      unit: '2B',
      rent: 1200,
      moveInDate: '2023-08-15',
      status: 'current'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '(555) 345-6789',
      unit: '3A',
      rent: 1200,
      moveInDate: '2023-09-01',
      status: 'current'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success'
      case 'maintenance': return 'warning'
      case 'vacant': return 'destructive'
      case 'current': return 'success'
      default: return 'default'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">{property.name}</h1>
          <p className="text-text-secondary">{property.address}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Property
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Property Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Total Units</p>
                <p className="text-2xl font-bold text-text-primary">{property.units}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Occupancy</p>
                <p className="text-2xl font-bold text-text-primary">{property.occupancy}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Monthly Revenue</p>
                <p className="text-2xl font-bold text-text-primary">${property.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Last Payment</p>
                <p className="text-2xl font-bold text-text-primary">{property.lastPayment}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Property Details and Tenants */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Property Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold text-text-primary">Property Information</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-text-secondary">Property Type</p>
                <p className="text-text-primary">{property.type}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Year Built</p>
                <p className="text-text-primary">{property.yearBuilt}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Square Footage</p>
                <p className="text-text-primary">{property.squareFootage.toLocaleString()} sq ft</p>
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Status</p>
                <Badge variant={getStatusColor(property.status)}>
                  {property.status}
                </Badge>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-text-secondary mb-2">Description</p>
              <p className="text-text-primary">{property.description}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-text-secondary mb-2">Amenities</p>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((amenity, index) => (
                  <Badge key={index} variant="outline">{amenity}</Badge>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-text-primary">Quick Actions</h3>
          </CardHeader>
          <CardBody className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Wrench className="h-4 w-4 mr-2" />
              Maintenance Request
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="h-4 w-4 mr-2" />
              Add Tenant
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <DollarSign className="h-4 w-4 mr-2" />
              Record Payment
            </Button>
          </CardBody>
        </Card>
      </div>

      {/* Tenants Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">Current Tenants</h3>
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Manage Tenants
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {tenants.map((tenant) => (
              <div key={tenant.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <Avatar fallback={tenant.name.charAt(0)} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-text-primary">{tenant.name}</h4>
                    <Badge variant={getStatusColor(tenant.status)}>
                      {tenant.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-text-secondary">Unit {tenant.unit} • ${tenant.rent}/month</p>
                  <p className="text-sm text-text-secondary">Moved in: {tenant.moveInDate}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
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
