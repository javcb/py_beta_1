import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Input } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { Modal } from '@javcb/ui'
// import { NewMaintenanceRequest } from '../../patterns/modals/NewMaintenanceRequest'
import { 
  Wrench, 
  Plus, 
  Search, 
  Filter,
  Camera,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  X,
  Image,
  User,
  MessageSquare
} from 'lucide-react'

export default function TenantMaintenancePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showNewRequest, setShowNewRequest] = useState(false)

  // Mock data for maintenance requests
  const maintenanceRequests = [
    {
      id: '1',
      title: 'Kitchen Sink Leak',
      description: 'Water leaking from under the kitchen sink, causing water damage to cabinet',
      status: 'pending',
      priority: 'high',
      category: 'plumbing',
      submittedDate: '2024-01-15',
      lastUpdated: '2024-01-15',
      photos: [
        { id: '1', url: '/photos/sink-leak-1.jpg', thumbnail: '/photos/sink-leak-1-thumb.jpg' },
        { id: '2', url: '/photos/sink-leak-2.jpg', thumbnail: '/photos/sink-leak-2-thumb.jpg' }
      ],
      assignedTo: null,
      estimatedCompletion: null,
      notes: []
    },
    {
      id: '2',
      title: 'Heating Not Working',
      description: 'Heater in living room not producing heat, thermostat shows 65°F',
      status: 'in_progress',
      priority: 'high',
      category: 'hvac',
      submittedDate: '2024-01-10',
      lastUpdated: '2024-01-12',
      photos: [
        { id: '3', url: '/photos/heater-1.jpg', thumbnail: '/photos/heater-1-thumb.jpg' }
      ],
      assignedTo: 'Mike Johnson',
      estimatedCompletion: '2024-01-20',
      notes: [
        { id: '1', text: 'Technician scheduled for Jan 18th', date: '2024-01-12', author: 'Property Manager' }
      ]
    },
    {
      id: '3',
      title: 'Broken Window Screen',
      description: 'Window screen in bedroom has a large tear, needs replacement',
      status: 'completed',
      priority: 'low',
      category: 'general',
      submittedDate: '2024-01-05',
      lastUpdated: '2024-01-08',
      photos: [
        { id: '4', url: '/photos/window-screen.jpg', thumbnail: '/photos/window-screen-thumb.jpg' }
      ],
      assignedTo: 'John Smith',
      estimatedCompletion: '2024-01-08',
      notes: [
        { id: '2', text: 'Screen replaced successfully', date: '2024-01-08', author: 'John Smith' }
      ]
    },
    {
      id: '4',
      title: 'Door Lock Issue',
      description: 'Front door lock is sticking and difficult to turn',
      status: 'pending',
      priority: 'medium',
      category: 'locks',
      submittedDate: '2024-01-20',
      lastUpdated: '2024-01-20',
      photos: [],
      assignedTo: null,
      estimatedCompletion: null,
      notes: []
    }
  ]

  const filteredRequests = maintenanceRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'in_progress': return 'warning'
      case 'pending': return 'default'
      case 'cancelled': return 'destructive'
      default: return 'default'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive'
      case 'medium': return 'warning'
      case 'low': return 'success'
      default: return 'default'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'in_progress': return Clock
      case 'pending': return AlertTriangle
      default: return Clock
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'plumbing': return 'blue'
      case 'hvac': return 'orange'
      case 'electrical': return 'yellow'
      case 'locks': return 'purple'
      case 'general': return 'gray'
      default: return 'gray'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Maintenance Requests</h1>
          <p className="text-text-secondary">Submit and track maintenance requests for your property</p>
        </div>
        <Button 
          className="flex items-center space-x-2"
          onClick={() => setShowNewRequest(true)}
        >
          <Plus className="h-4 w-4" />
          <span>New Request (Placeholder)</span>
        </Button>
      </div>

      {/* Request Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Total Requests</p>
                <p className="text-2xl font-bold text-text-primary">{maintenanceRequests.length}</p>
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
                  {maintenanceRequests.filter(r => r.status === 'pending').length}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">In Progress</p>
                <p className="text-2xl font-bold text-text-primary">
                  {maintenanceRequests.filter(r => r.status === 'in_progress').length}
                </p>
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
                <p className="text-sm font-medium text-text-secondary">Completed</p>
                <p className="text-2xl font-bold text-text-primary">
                  {maintenanceRequests.filter(r => r.status === 'completed').length}
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
                  placeholder="Search requests..."
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
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
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

      {/* Maintenance Requests */}
      <div className="space-y-4">
        {filteredRequests.map((request) => {
          const StatusIcon = getStatusIcon(request.status)
          return (
            <Card key={request.id} className="hover:shadow-md transition-shadow">
              <CardBody className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Status Icon */}
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-lg ${
                      request.status === 'completed' ? 'bg-green-100' :
                      request.status === 'in_progress' ? 'bg-yellow-100' :
                      'bg-gray-100'
                    }`}>
                      <StatusIcon className={`h-5 w-5 ${
                        request.status === 'completed' ? 'text-green-600' :
                        request.status === 'in_progress' ? 'text-yellow-600' :
                        'text-gray-600'
                      }`} />
                    </div>
                  </div>

                  {/* Request Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">{request.title}</h3>
                        <p className="text-text-secondary mt-1">{request.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getPriorityColor(request.priority)}>
                          {request.priority}
                        </Badge>
                        <Badge variant={getStatusColor(request.status)}>
                          {request.status.replace('_', ' ')}
                        </Badge>
                      </div>
                    </div>

                    {/* Request Meta */}
                    <div className="flex items-center space-x-4 mt-3 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Submitted {request.submittedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Badge 
                          variant="outline" 
                          className={`text-${getCategoryColor(request.category)}-600 border-${getCategoryColor(request.category)}-200`}
                        >
                          {request.category}
                        </Badge>
                      </div>
                      {request.assignedTo && (
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>Assigned to {request.assignedTo}</span>
                        </div>
                      )}
                    </div>

                    {/* Photos */}
                    {request.photos.length > 0 && (
                      <div className="mt-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Camera className="h-4 w-4 text-text-secondary" />
                          <span className="text-sm text-text-secondary">Photos ({request.photos.length})</span>
                        </div>
                        <div className="flex space-x-2">
                          {request.photos.slice(0, 3).map((photo) => (
                            <div key={photo.id} className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Image className="h-6 w-6 text-gray-400" />
                            </div>
                          ))}
                          {request.photos.length > 3 && (
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs text-text-secondary">+{request.photos.length - 3}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Notes */}
                    {request.notes.length > 0 && (
                      <div className="mt-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <MessageSquare className="h-4 w-4 text-text-secondary" />
                          <span className="text-sm text-text-secondary">Updates ({request.notes.length})</span>
                        </div>
                        <div className="space-y-1">
                          {request.notes.slice(0, 2).map((note) => (
                            <div key={note.id} className="text-sm text-text-secondary bg-gray-50 p-2 rounded">
                              <span className="font-medium">{note.author}:</span> {note.text}
                              <span className="text-xs ml-2">({note.date})</span>
                            </div>
                          ))}
                          {request.notes.length > 2 && (
                            <div className="text-sm text-text-secondary">
                              +{request.notes.length - 2} more updates
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Add Note
                      </Button>
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-1" />
                        Add Photo
                      </Button>
                      {request.status === 'pending' && (
                        <Button variant="outline" size="sm">
                          <X className="h-4 w-4 mr-1" />
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>

      {/* New Request Modal */}
      {/* <NewMaintenanceRequest
        open={showNewRequest}
        onClose={() => setShowNewRequest(false)}
      /> */}
    </div>
  )
}
