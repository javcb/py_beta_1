import React, { useState } from 'react'
import { Card, CardBody, CardHeader } from '../../adapters/Card'
import { Button } from '../../adapters/Button'
import { Input } from '../../adapters/Input'
import { Badge } from '../../adapters/Badge'
import { Modal } from '../../adapters/Modal'
import { DocumentViewer } from '../../patterns/modals/DocumentViewer'
import { FileDropzone } from '../../patterns/FileDropzone'
import { 
  FileText, 
  Search, 
  Filter,
  Upload,
  Grid,
  List,
  Pin,
  Eye,
  Download,
  Share,
  MoreHorizontal,
  Folder,
  Image,
  File
} from 'lucide-react'

export default function DocumentCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedDocument, setSelectedDocument] = useState<any>(null)
  const [showUpload, setShowUpload] = useState(false)

  // Mock data for documents
  const documents = [
    {
      id: '1',
      name: 'Lease Agreement - 123 Main St',
      type: 'pdf',
      size: 2048576,
      uploadedBy: 'John Doe',
      uploadedDate: '2024-01-15',
      category: 'legal',
      status: 'active',
      isPinned: true,
      downloadCount: 5,
      viewCount: 12
    },
    {
      id: '2',
      name: 'Property Inspection Report',
      type: 'pdf',
      size: 1536000,
      uploadedBy: 'Jane Smith',
      uploadedDate: '2024-01-10',
      category: 'maintenance',
      status: 'active',
      isPinned: false,
      downloadCount: 3,
      viewCount: 8
    },
    {
      id: '3',
      name: 'Rent Receipt - January 2024',
      type: 'pdf',
      size: 512000,
      uploadedBy: 'System',
      uploadedDate: '2024-01-01',
      category: 'financial',
      status: 'active',
      isPinned: false,
      downloadCount: 2,
      viewCount: 4
    },
    {
      id: '4',
      name: 'Property Photos',
      type: 'image',
      size: 5242880,
      uploadedBy: 'Mike Johnson',
      uploadedDate: '2023-12-20',
      category: 'media',
      status: 'active',
      isPinned: true,
      downloadCount: 1,
      viewCount: 6
    }
  ]

  const pinnedDocuments = documents.filter(doc => doc.isPinned)
  const regularDocuments = documents.filter(doc => !doc.isPinned)

  const filteredDocuments = regularDocuments.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === 'all' || doc.type === filterType
    return matchesSearch && matchesType
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
      case 'legal': return 'blue'
      case 'maintenance': return 'orange'
      case 'financial': return 'green'
      case 'media': return 'purple'
      default: return 'gray'
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
          <h1 className="text-2xl font-bold text-text-primary">Document Center</h1>
          <p className="text-text-secondary">Manage and organize your property documents</p>
        </div>
        <Button 
          className="flex items-center space-x-2"
          onClick={() => setShowUpload(true)}
        >
          <Upload className="h-4 w-4" />
          <span>Upload Document</span>
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
                  placeholder="Search documents..."
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
                <option value="pdf">PDF</option>
                <option value="image">Image</option>
                <option value="doc">Document</option>
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

      {/* Pinned Documents */}
      {pinnedDocuments.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Pin className="h-5 w-5 text-brand-500" />
              <h3 className="text-lg font-semibold text-text-primary">Pinned Documents</h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pinnedDocuments.map((doc) => {
                const Icon = getFileIcon(doc.type)
                return (
                  <Card
                    key={doc.id}
                    className="cursor-pointer hover:shadow-md transition-shadow border-brand-200"
                    onClick={() => handleDocumentClick(doc)}
                  >
                    <CardBody className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-brand-100 rounded-lg">
                          <Icon className="h-5 w-5 text-brand-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-text-primary truncate">{doc.name}</h4>
                          <p className="text-sm text-text-secondary">{formatFileSize(doc.size)}</p>
                          <Badge 
                            variant="outline" 
                            className={`text-${getCategoryColor(doc.category)}-600 border-${getCategoryColor(doc.category)}-200 mt-1`}
                          >
                            {doc.category}
                          </Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                )
              })}
            </div>
          </CardBody>
        </Card>
      )}

      {/* All Documents */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">
              All Documents ({filteredDocuments.length})
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
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant="outline" 
                            className={`text-${getCategoryColor(doc.category)}-600 border-${getCategoryColor(doc.category)}-200`}
                          >
                            {doc.category}
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
                        <div className="text-xs text-text-secondary">
                          Uploaded by {doc.uploadedBy} • {doc.uploadedDate}
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
                      <h4 className="font-medium text-text-primary truncate">{doc.name}</h4>
                      <p className="text-sm text-text-secondary">
                        {formatFileSize(doc.size)} • Uploaded by {doc.uploadedBy} • {doc.uploadedDate}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-${getCategoryColor(doc.category)}-600 border-${getCategoryColor(doc.category)}-200`}
                    >
                      {doc.category}
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
        <FileDropzone onUpload={(files) => {
          console.log('Uploading files:', files)
          setShowUpload(false)
        }} />
      </Modal>

      {/* Document Viewer Modal */}
      <DocumentViewer
        open={!!selectedDocument}
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
      />
    </div>
  )
}
