import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '../../adapters/Card'
import { Button } from '../../adapters/Button'
import { Input } from '../../adapters/Input'
import { Badge } from '../../adapters/Badge'
import { Table } from '../../adapters/Table'
import { Modal } from '../../adapters/Modal'
import { VehicleRegistrationForm } from '../../patterns/modals/VehicleRegistrationForm'
import { 
  Car, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  MapPin,
  Calendar,
  FileText
} from 'lucide-react'

export default function TenantVehiclesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState<any>(null)

  // Mock data for vehicles
  const vehicles = [
    {
      id: '1',
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'Silver',
      licensePlate: 'ABC-123',
      vin: '1HGBH41JXMN109186',
      status: 'approved',
      registrationDate: '2024-01-15',
      expirationDate: '2025-01-15',
      parkingSpot: 'A-12',
      insuranceExpiry: '2024-06-15',
      notes: 'Primary vehicle'
    },
    {
      id: '2',
      make: 'Honda',
      model: 'Civic',
      year: 2018,
      color: 'Blue',
      licensePlate: 'XYZ-789',
      vin: '2HGBH41JXMN109187',
      status: 'pending',
      registrationDate: '2024-01-20',
      expirationDate: null,
      parkingSpot: null,
      insuranceExpiry: '2024-03-15',
      notes: 'Secondary vehicle'
    },
    {
      id: '3',
      make: 'Ford',
      model: 'F-150',
      year: 2021,
      color: 'Black',
      licensePlate: 'DEF-456',
      vin: '3HGBH41JXMN109188',
      status: 'rejected',
      registrationDate: '2024-01-10',
      expirationDate: null,
      parkingSpot: null,
      insuranceExpiry: '2024-08-15',
      notes: 'Rejected due to size restrictions'
    }
  ]

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.licensePlate.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || vehicle.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'success'
      case 'pending': return 'warning'
      case 'rejected': return 'destructive'
      case 'expired': return 'destructive'
      default: return 'default'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle
      case 'pending': return Clock
      case 'rejected': return AlertTriangle
      case 'expired': return AlertTriangle
      default: return Clock
    }
  }

  const tableColumns = [
    {
      key: 'vehicle',
      header: 'Vehicle',
      render: (value: any, row: any) => (
        <div>
          <div className="font-medium text-text-primary">{row.year} {row.make} {row.model}</div>
          <div className="text-sm text-text-secondary">{row.color}</div>
        </div>
      )
    },
    {
      key: 'licensePlate',
      header: 'License Plate',
      render: (value: string) => (
        <div className="font-mono font-medium text-text-primary">{value}</div>
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
      key: 'parkingSpot',
      header: 'Parking Spot',
      render: (value: string | null) => (
        <div className="text-sm text-text-secondary">
          {value || 'Not assigned'}
        </div>
      )
    },
    {
      key: 'expirationDate',
      header: 'Expires',
      render: (value: string | null) => (
        <div className="text-sm text-text-secondary">
          {value ? new Date(value).toLocaleDateString() : 'N/A'}
        </div>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (value: any, row: any) => (
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setEditingVehicle(row)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )
    }
  ]

  const handleEditVehicle = (vehicle: any) => {
    setEditingVehicle(vehicle)
    setShowRegistrationForm(true)
  }

  const handleCloseForm = () => {
    setShowRegistrationForm(false)
    setEditingVehicle(null)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Vehicle Registration</h1>
          <p className="text-text-secondary">Manage your registered vehicles and parking assignments</p>
        </div>
        <Button 
          className="flex items-center space-x-2"
          onClick={() => setShowRegistrationForm(true)}
        >
          <Plus className="h-4 w-4" />
          <span>Register Vehicle</span>
        </Button>
      </div>

      {/* Vehicle Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Total Vehicles</p>
                <p className="text-2xl font-bold text-text-primary">{vehicles.length}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Approved</p>
                <p className="text-2xl font-bold text-text-primary">
                  {vehicles.filter(v => v.status === 'approved').length}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Pending</p>
                <p className="text-2xl font-bold text-text-primary">
                  {vehicles.filter(v => v.status === 'pending').length}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Parking Spots</p>
                <p className="text-2xl font-bold text-text-primary">
                  {vehicles.filter(v => v.parkingSpot).length}
                </p>
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
                  placeholder="Search vehicles..."
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
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
                <option value="expired">Expired</option>
              </select>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Vehicles Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">
              Registered Vehicles ({filteredVehicles.length})
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Bulk Actions</Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Table
            columns={tableColumns}
            data={filteredVehicles}
            empty="No vehicles found"
          />
        </CardBody>
      </Card>

      {/* Vehicle Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-text-primary">{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                  <p className="text-sm text-text-secondary">{vehicle.color}</p>
                </div>
                <Badge variant={getStatusColor(vehicle.status)}>
                  {vehicle.status}
                </Badge>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">License Plate:</span>
                  <span className="font-mono text-text-primary">{vehicle.licensePlate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Parking Spot:</span>
                  <span className="text-text-primary">{vehicle.parkingSpot || 'Not assigned'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Registration:</span>
                  <span className="text-text-primary">
                    {vehicle.registrationDate ? new Date(vehicle.registrationDate).toLocaleDateString() : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Expires:</span>
                  <span className="text-text-primary">
                    {vehicle.expirationDate ? new Date(vehicle.expirationDate).toLocaleDateString() : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Insurance:</span>
                  <span className="text-text-primary">
                    {vehicle.insuranceExpiry ? new Date(vehicle.insuranceExpiry).toLocaleDateString() : 'N/A'}
                  </span>
                </div>
                {vehicle.notes && (
                  <div className="text-sm text-text-secondary bg-gray-50 p-2 rounded">
                    <strong>Note:</strong> {vehicle.notes}
                  </div>
                )}
                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleEditVehicle(vehicle)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <FileText className="h-4 w-4 mr-1" />
                    Details
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Vehicle Registration Modal */}
      <VehicleRegistrationForm
        open={showRegistrationForm}
        onClose={handleCloseForm}
        vehicle={editingVehicle}
      />
    </div>
  )
}
