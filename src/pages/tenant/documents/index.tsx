import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Input } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { Modal } from '@javcb/ui'
// import { DocumentViewer } from '../../patterns/modals/DocumentViewer'
// import { FileDropzone } from '../../patterns/FileDropzone'
import { 
  FileText, 
  Search, 
  Filter,
  Upload,
  Grid,
  List,
  Eye,
  Download,
  Share,
  MoreHorizontal,
  Folder,
  Image,
  File,
  Tag,
  Calendar,
  AlertTriangle
} from 'lucide-react'

export default function TenantDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedDocument, setSelectedDocument] = useState<any>(null)
  const [showUpload, setShowUpload] = useState(false)

  // Mock data for tenant documents
  const documents = [
    {
      id: '1',
      name: 'Lease Agreement - 123 Main St',
      type: 'pdf',
      size: 2048576,
      uploadedBy: 'Landlord',
      uploadedDate: '2024-01-15',
      category: 'lease',
      status: 'active',
      isRequired: true,
      expirationDate: '2024-06-01',
      downloadCount: 2,
      viewCount: 5
    },
    {
      id: '2',
      name: 'Rent Receipt - January 2024',
      type: 'pdf',
      size: 512000,
      uploadedBy: 'System',
      uploadedDate: '2024-01-01',
      category: 'receipt',
      status: 'active',
      isRequired: false,
      downloadCount: 1,
      viewCount: 3
    },
    {
      id: '3',
      name: 'Property Photos',
      type: 'image',
      size: 5242880,
      uploadedBy: 'Tenant',
      uploadedDate: '2023-12-20',
      category: 'media',
      status: 'active',
      isRequired: false,
      downloadCount: 0,
      viewCount: 2
    },
    {
      id: '4',
      name: 'Maintenance Request Form',
      type: 'pdf',
      size: 1024000,
      uploadedBy: 'Tenant',
      uploadedDate: '2024-01-10',
      category: 'maintenance',
      status: 'active',
      isRequired: false,
      downloadCount: 1,
      viewCount: 4
    },
    {
      id: '5',
      name: 'Insurance Certificate',
      type: 'pdf',
      size: 1536000,
      uploadedBy: 'Tenant',
      uploadedDate: '2023-12-01',
      category: 'insurance',
      status: 'expired',
      isRequired: true,
      expirationDate: '2023-12-31',
      downloadCount: 0,
      viewCount: 1
    }
  ]

  const categories = [
    { id: 'all', label: 'All Documents', count: documents.length },
    { id: 'lease', label: 'Lease Documents', count: documents.filter(d => d.category === 'lease').length },
    { id: 'receipt', label: 'Receipts', count: documents.filter(d => d.category === 'receipt').length },
    { id: 'maintenance', label: 'Maintenance', count: documents.filter(d => d.category === 'maintenance').length },
    { id: 'insurance', label: 'Insurance', count: documents.filter(d => d.category === 'insurance').length },
    { id: 'media', label: 'Media', count: documents.filter(d => d.category === 'media').length }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return FileText
      case 'image': return Image
      default: return File
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'lease': return 'blue'
      case 'receipt': return 'green'
      case 'maintenance': return 'orange'
      case 'insurance': return 'purple'
      case 'media': return 'pink'
      default: return 'gray'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success'
      case 'expired': return 'destructive'
      case 'pending': return 'warning'
      default: return 'default'
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleDocumentClick = (document: any) => {
    setSelectedDocument(document)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Documents</h1>
          <p className="text-text-secondary">Manage your rental documents and files</p>
        </div>
        <Button 
          className="flex items-center space-x-2"
          onClick={() => setShowUpload(true)}
        >
          <Upload className="h-4 w-4" />
          <span>Upload Document</span>
        </Button>
      </div>

      {/* Document Categories */}
      <Card>
        <CardBody className="p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filterCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <span>{category.label}</span>
                <Badge variant="outline" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
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
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
              <div className="flex border border-gray-300 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Required Documents Alert */}
      {documents.some(doc => doc.isRequired && doc.status === 'expired') && (
        <Card className="border-red-200 bg-red-50">
          <CardBody className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-red-800">Required Documents Expired</h4>
                <p className="text-sm text-red-700">
                  You have {documents.filter(doc => doc.isRequired && doc.status === 'expired').length} required document(s) that have expired. Please upload updated versions.
                </p>
              </div>
              <Button variant="outline" size="sm">
                View Required
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

      {/* All Documents */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">
              Documents ({filteredDocuments.length})
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Bulk Actions</Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredDocuments.map((doc) => {
                const Icon = getFileIcon(doc.type)
                return (
                  <Card
                    key={doc.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleDocumentClick(doc)}
                  >
                    <CardBody className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <Icon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-text-primary truncate">{doc.name}</h4>
                            <p className="text-sm text-text-secondary">{formatFileSize(doc.size)}</p>
                            {doc.isRequired && (
                              <Badge variant="outline" className="text-xs mt-1">Required</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant="outline" 
                            className={`text-${getCategoryColor(doc.category)}-600 border-${getCategoryColor(doc.category)}-200`}
                          >
                            {doc.category}
                          </Badge>
                          <Badge variant={getStatusColor(doc.status)}>
                            {doc.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <Download className="h-4 w-4" />
                            <MoreHorizontal className="h-4 w-4" />
                          </div>
                          <div className="text-xs text-text-secondary">
                            {doc.uploadedDate}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredDocuments.map((doc) => {
                const Icon = getFileIcon(doc.type)
                return (
                  <div
                    key={doc.id}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-bg-muted cursor-pointer"
                    onClick={() => handleDocumentClick(doc)}
                  >
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-text-primary truncate">{doc.name}</h4>
                        {doc.isRequired && (
                          <Badge variant="outline" className="text-xs">Required</Badge>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary">
                        {formatFileSize(doc.size)} • Uploaded by {doc.uploadedBy} • {doc.uploadedDate}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="outline" 
                        className={`text-${getCategoryColor(doc.category)}-600 border-${getCategoryColor(doc.category)}-200`}
                      >
                        {doc.category}
                      </Badge>
                      <Badge variant={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardBody>
      </Card>

      {/* File Upload Modal */}
      <Modal
        open={showUpload}
        onClose={() => setShowUpload(false)}
        title="Upload Documents"
      >
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">File upload placeholder</p>
        </div>
        {/* <FileDropzone onUpload={(files) => {
          console.log('Uploading files:', files)
          setShowUpload(false)
        }} /> */}
      </Modal>

      {/* Document Viewer Modal */}
      {/* <DocumentViewer
        open={!!selectedDocument}
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
      /> */}
    </div>
  )
}
