import React, { useCallback } from 'react'
import { Card, CardBody } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { 
  Upload, 
  FileText, 
  Image, 
  X,
  CheckCircle
} from 'lucide-react'

interface FileDropzoneProps {
  onUpload: (files: File[]) => void
  maxFiles?: number
  acceptedTypes?: string[]
}

export function FileDropzone({ 
  onUpload, 
  maxFiles = 10, 
  acceptedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'] 
}: FileDropzoneProps) {
  const [dragActive, setDragActive] = React.useState(false)
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      const validFiles = files.filter(file => {
        const extension = '.' + file.name.split('.').pop()?.toLowerCase()
        return acceptedTypes.includes(extension)
      })
      setSelectedFiles(prev => [...prev, ...validFiles].slice(0, maxFiles))
    }
  }, [acceptedTypes, maxFiles])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files)
      const validFiles = files.filter(file => {
        const extension = '.' + file.name.split('.').pop()?.toLowerCase()
        return acceptedTypes.includes(extension)
      })
      setSelectedFiles(prev => [...prev, ...validFiles].slice(0, maxFiles))
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleUpload = () => {
    onUpload(selectedFiles)
    setSelectedFiles([])
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'pdf': return FileText
      case 'jpg':
      case 'jpeg':
      case 'png': return Image
      default: return FileText
    }
  }

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-brand-500 bg-brand-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="space-y-4">
          <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <Upload className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <p className="text-lg font-medium text-text-primary">
              Drop files here or click to browse
            </p>
            <p className="text-sm text-text-secondary">
              Supports: {acceptedTypes.join(', ')}
            </p>
            <p className="text-xs text-text-secondary mt-1">
              Maximum {maxFiles} files
            </p>
          </div>
        </div>
      </div>

      {/* Selected Files */}
      {selectedFiles.length > 0 && (
        <Card>
          <CardBody className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-text-primary">
                  Selected Files ({selectedFiles.length})
                </h4>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedFiles([])}
                >
                  Clear All
                </Button>
              </div>
              <div className="space-y-2">
                {selectedFiles.map((file, index) => {
                  const Icon = getFileIcon(file.name)
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <Icon className="h-5 w-5 text-gray-600" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Upload Actions */}
      {selectedFiles.length > 0 && (
        <div className="flex justify-end space-x-3">
          <Button
            variant="outline"
            onClick={() => setSelectedFiles([])}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            className="flex items-center space-x-2"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Upload {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}</span>
          </Button>
        </div>
      )}
    </div>
  )
}
