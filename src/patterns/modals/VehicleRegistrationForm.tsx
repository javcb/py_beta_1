import React, { useState } from 'react'
import { Modal } from '../../adapters/Modal'
import { Button } from '../../adapters/Button'
import { Input } from '../../adapters/Input'
import { Badge } from '../../adapters/Badge'
import { Card, CardBody } from '../../adapters/Card'
import { 
  Car, 
  FileText,
  Upload,
  CheckCircle,
  AlertTriangle,
  Calendar
} from 'lucide-react'

interface VehicleRegistrationFormProps {
  open: boolean
  onClose: () => void
  vehicle?: any
}

export function VehicleRegistrationForm({ open, onClose, vehicle }: VehicleRegistrationFormProps) {
  const [formData, setFormData] = useState({
    make: vehicle?.make || '',
    model: vehicle?.model || '',
    year: vehicle?.year || '',
    color: vehicle?.color || '',
    licensePlate: vehicle?.licensePlate || '',
    vin: vehicle?.vin || '',
    insuranceExpiry: vehicle?.insuranceExpiry || '',
    notes: vehicle?.notes || ''
  })
  const [insuranceDocument, setInsuranceDocument] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleInsuranceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInsuranceDocument(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Submitting vehicle registration:', {
      ...formData,
      insuranceDocument: insuranceDocument?.name
    })
    
    setIsSubmitting(false)
    onClose()
  }

  const canSubmit = formData.make && formData.model && formData.year && formData.licensePlate

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={vehicle ? 'Edit Vehicle Registration' : 'Register New Vehicle'}
      className="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Vehicle Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Vehicle Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Make *
              </label>
              <Input
                placeholder="e.g., Toyota, Honda, Ford"
                value={formData.make}
                onChange={(e) => handleInputChange('make', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Model *
              </label>
              <Input
                placeholder="e.g., Camry, Civic, F-150"
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Year *
              </label>
              <Input
                type="number"
                placeholder="e.g., 2020"
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                min="1900"
                max="2024"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Color
              </label>
              <Input
                placeholder="e.g., Silver, Blue, Black"
                value={formData.color}
                onChange={(e) => handleInputChange('color', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Registration Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                License Plate *
              </label>
              <Input
                placeholder="e.g., ABC-123"
                value={formData.licensePlate}
                onChange={(e) => handleInputChange('licensePlate', e.target.value.toUpperCase())}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                VIN (Optional)
              </label>
              <Input
                placeholder="17-character VIN"
                value={formData.vin}
                onChange={(e) => handleInputChange('vin', e.target.value.toUpperCase())}
                maxLength={17}
              />
            </div>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Insurance Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Insurance Expiry Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
              <Input
                type="date"
                value={formData.insuranceExpiry}
                onChange={(e) => handleInputChange('insuranceExpiry', e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Insurance Document
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleInsuranceUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="space-y-2">
                <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                <p className="text-sm text-text-secondary">
                  {insuranceDocument ? insuranceDocument.name : 'Click to upload insurance document'}
                </p>
                <p className="text-xs text-text-secondary">
                  PDF, JPG, or PNG files accepted
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            rows={3}
            placeholder="Any additional information about your vehicle..."
            value={formData.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
          />
        </div>

        {/* Registration Guidelines */}
        <Card className="bg-blue-50 border-blue-200">
          <CardBody className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Registration Guidelines:</p>
                <ul className="space-y-1 text-xs">
                  <li>• All vehicles must be registered with the property management</li>
                  <li>• Parking spots are assigned on a first-come, first-served basis</li>
                  <li>• Valid insurance is required for all registered vehicles</li>
                  <li>• Registration is subject to approval by property management</li>
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
                <span>{vehicle ? 'Update Registration' : 'Register Vehicle'}</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
