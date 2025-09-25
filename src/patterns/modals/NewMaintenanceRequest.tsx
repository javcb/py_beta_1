import React, { useState } from 'react'
import { Modal } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Input } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { Card, CardBody } from '@javcb/ui'
import { 
  Wrench, 
  Camera,
  Upload,
  X,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'

interface NewMaintenanceRequestProps {
  open: boolean
  onClose: () => void
}

export function NewMaintenanceRequest({ open, onClose }: NewMaintenanceRequestProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('medium')
  const [photos, setPhotos] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { id: 'plumbing', label: 'Plumbing', icon: '🚰' },
    { id: 'hvac', label: 'HVAC', icon: '🌡️' },
    { id: 'electrical', label: 'Electrical', icon: '⚡' },
    { id: 'locks', label: 'Locks & Security', icon: '🔒' },
    { id: 'appliances', label: 'Appliances', icon: '🔌' },
    { id: 'general', label: 'General', icon: '🔧' }
  ]

  const priorities = [
    { id: 'low', label: 'Low', color: 'text-green-600', icon: '🟢' },
    { id: 'medium', label: 'Medium', color: 'text-yellow-600', icon: '🟡' },
    { id: 'high', label: 'High', color: 'text-red-600', icon: '🔴' }
  ]

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files)
      setPhotos(prev => [...prev, ...newPhotos].slice(0, 5)) // Max 5 photos
    }
  }

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Submitting maintenance request:', {
      title,
      description,
      category,
      priority,
      photos: photos.map(f => f.name)
    })
    
    setIsSubmitting(false)
    onClose()
    
    // Reset form
    setTitle('')
    setDescription('')
    setCategory('')
    setPriority('medium')
    setPhotos([])
  }

  const canSubmit = title.trim() && description.trim() && category

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="New Maintenance Request"
      className="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Request Title */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Request Title *
          </label>
          <Input
            placeholder="Brief description of the issue"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Detailed Description *
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            rows={4}
            placeholder="Please provide as much detail as possible about the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Category *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={category === cat.id ? 'default' : 'outline'}
                onClick={() => setCategory(cat.id)}
                className="justify-start space-x-2"
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Priority Selection */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Priority Level
          </label>
          <div className="flex space-x-4">
            {priorities.map((priorityOption) => (
              <label key={priorityOption.id} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priority"
                  value={priorityOption.id}
                  checked={priority === priorityOption.id}
                  onChange={(e) => setPriority(e.target.value)}
                  className="text-brand-500"
                />
                <span className={`text-sm ${priorityOption.color}`}>
                  {priorityOption.icon} {priorityOption.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Photos (Optional)
          </label>
          <div className="space-y-4">
            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="space-y-2">
                <Camera className="h-8 w-8 text-gray-400 mx-auto" />
                <p className="text-sm text-text-secondary">
                  Click to upload photos or drag and drop
                </p>
                <p className="text-xs text-text-secondary">
                  Up to 5 photos, max 10MB each
                </p>
              </div>
            </div>

            {/* Photo Preview */}
            {photos.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <Card key={index} className="relative">
                    <CardBody className="p-2">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-xs text-text-secondary truncate mt-1">
                        {photo.name}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removePhoto(index)}
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submission Guidelines */}
        <Card className="bg-blue-50 border-blue-200">
          <CardBody className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Submission Guidelines:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Provide clear, detailed descriptions</li>
                  <li>• Include photos when possible</li>
                  <li>• Emergency issues should be called in directly</li>
                  <li>• You'll receive updates via email and in-app notifications</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!canSubmit || isSubmitting}
            className="flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Clock className="h-4 w-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4" />
                <span>Submit Request</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
