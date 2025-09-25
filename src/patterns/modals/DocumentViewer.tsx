import React from 'react'
import { Modal } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { 
  Download, 
  Share, 
  Eye, 
  FileText, 
  Image,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw
} from 'lucide-react'

interface DocumentViewerProps {
  open: boolean
  document: any
  onClose: () => void
}

export function DocumentViewer({ open, document, onClose }: DocumentViewerProps) {
  if (!document) return null

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return FileText
      case 'image': return Image
      default: return FileText
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

  const Icon = getFileIcon(document.type)

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        <div className="flex items-center space-x-3">
          <Icon className="h-5 w-5 text-gray-600" />
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-text-primary truncate">
              {document.name}
            </h2>
            <div className="flex items-center space-x-2 mt-1">
              <Badge 
                variant="outline" 
                className={`text-${getCategoryColor(document.category)}-600 border-${getCategoryColor(document.category)}-200`}
              >
                {document.category}
              </Badge>
              <span className="text-sm text-text-secondary">
                {formatFileSize(document.size)}
              </span>
            </div>
          </div>
        </div>
      }
      className="max-w-6xl"
    >
      <div className="space-y-4">
        {/* Document Toolbar */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-gray-300 mx-2" />
            <Button variant="outline" size="sm">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-text-secondary">100%</span>
            <Button variant="outline" size="sm">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-gray-300 mx-2" />
            <Button variant="outline" size="sm">
              <RotateCw className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Document Content */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {document.type === 'pdf' ? (
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-text-secondary">PDF Viewer Placeholder</p>
                <p className="text-sm text-text-secondary mt-2">
                  In a real implementation, this would show the PDF content
                </p>
              </div>
            </div>
          ) : document.type === 'image' ? (
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <Image className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-text-secondary">Image Viewer Placeholder</p>
                <p className="text-sm text-text-secondary mt-2">
                  In a real implementation, this would show the image content
                </p>
              </div>
            </div>
          ) : (
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-text-secondary">Document Viewer Placeholder</p>
                <p className="text-sm text-text-secondary mt-2">
                  In a real implementation, this would show the document content
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Document Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-text-primary mb-2">Document Information</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Uploaded by:</span>
                <span className="text-text-primary">{document.uploadedBy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Upload date:</span>
                <span className="text-text-primary">{document.uploadedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">File size:</span>
                <span className="text-text-primary">{formatFileSize(document.size)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Downloads:</span>
                <span className="text-text-primary">{document.downloadCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Views:</span>
                <span className="text-text-primary">{document.viewCount}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-2">Actions</h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download Original
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share className="h-4 w-4 mr-2" />
                Share with Others
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                View Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
