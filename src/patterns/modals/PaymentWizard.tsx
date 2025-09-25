import React, { useState } from 'react'
import { Modal } from '@javcb/ui'
import { Button } from '@javcb/ui'
import { Input } from '@javcb/ui'
import { Card, CardBody } from '@javcb/ui'
import { Badge } from '@javcb/ui'
import { 
  CreditCard, 
  DollarSign, 
  Calendar,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'

interface PaymentWizardProps {
  open: boolean
  onClose: () => void
}

type WizardStep = 'method' | 'amount' | 'confirm'

export function PaymentWizard({ open, onClose }: PaymentWizardProps) {
  const [currentStep, setCurrentStep] = useState<WizardStep>('method')
  const [selectedMethod, setSelectedMethod] = useState<string>('')
  const [paymentAmount, setPaymentAmount] = useState<string>('')
  const [selectedProperty, setSelectedProperty] = useState<string>('')

  // Mock data
  const paymentMethods = [
    { id: '1', type: 'Credit Card', lastFour: '1234', brand: 'Visa' },
    { id: '2', type: 'Bank Account', lastFour: '5678', bank: 'Chase' },
    { id: '3', type: 'Credit Card', lastFour: '9012', brand: 'Mastercard' }
  ]

  const properties = [
    { id: '1', name: '123 Main Street', tenant: 'John Doe', amount: 1200 },
    { id: '2', name: '456 Oak Avenue', tenant: 'Jane Smith', amount: 1800 },
    { id: '3', name: '789 Pine Road', tenant: 'Mike Johnson', amount: 1500 }
  ]

  const getStepNumber = (step: WizardStep) => {
    switch (step) {
      case 'method': return 1
      case 'amount': return 2
      case 'confirm': return 3
      default: return 1
    }
  }

  const getStepTitle = (step: WizardStep) => {
    switch (step) {
      case 'method': return 'Select Payment Method'
      case 'amount': return 'Enter Payment Details'
      case 'confirm': return 'Confirm Payment'
      default: return ''
    }
  }

  const handleNext = () => {
    switch (currentStep) {
      case 'method':
        if (selectedMethod) setCurrentStep('amount')
        break
      case 'amount':
        if (paymentAmount && selectedProperty) setCurrentStep('confirm')
        break
      case 'confirm':
        // Process payment
        onClose()
        break
    }
  }

  const handleBack = () => {
    switch (currentStep) {
      case 'amount':
        setCurrentStep('method')
        break
      case 'confirm':
        setCurrentStep('amount')
        break
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 'method':
        return selectedMethod !== ''
      case 'amount':
        return paymentAmount !== '' && selectedProperty !== ''
      case 'confirm':
        return true
      default:
        return false
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 'method':
        return (
          <div className="space-y-4">
            <p className="text-text-secondary">Choose how you'd like to make this payment</p>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  className={`cursor-pointer transition-colors ${
                    selectedMethod === method.id
                      ? 'border-brand-500 bg-brand-50'
                      : 'hover:bg-bg-muted'
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <CardBody className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-text-primary">{method.type}</p>
                        <p className="text-sm text-text-secondary">
                          {method.brand || method.bank} •••• {method.lastFour}
                        </p>
                      </div>
                      {selectedMethod === method.id && (
                        <CheckCircle className="h-5 w-5 text-brand-500" />
                      )}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        )

      case 'amount':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Select Property
              </label>
              <select
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="">Choose a property</option>
                {properties.map((property) => (
                  <option key={property.id} value={property.id}>
                    {property.name} - {property.tenant} (${property.amount})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Payment Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                <Input
                  type="number"
                  placeholder="0.00"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Payment Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                <Input
                  type="date"
                  className="pl-10"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Notes (Optional)
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                rows={3}
                placeholder="Add any notes about this payment..."
              />
            </div>
          </div>
        )

      case 'confirm':
        const selectedMethodData = paymentMethods.find(m => m.id === selectedMethod)
        const selectedPropertyData = properties.find(p => p.id === selectedProperty)
        
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-text-primary mb-3">Payment Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Property:</span>
                  <span className="text-text-primary">{selectedPropertyData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tenant:</span>
                  <span className="text-text-primary">{selectedPropertyData?.tenant}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Amount:</span>
                  <span className="font-medium text-text-primary">${paymentAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Payment Method:</span>
                  <span className="text-text-primary">
                    {selectedMethodData?.type} •••• {selectedMethodData?.lastFour}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Date:</span>
                  <span className="text-text-primary">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This is a demo payment. No actual transaction will be processed.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-text-primary">
            {getStepTitle(currentStep)}
          </h2>
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= getStepNumber(currentStep)
                    ? 'bg-brand-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        {renderStepContent()}
        
        <div className="flex justify-between pt-4 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={currentStep === 'method' ? onClose : handleBack}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{currentStep === 'method' ? 'Cancel' : 'Back'}</span>
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center space-x-2"
          >
            <span>
              {currentStep === 'confirm' ? 'Process Payment' : 'Next'}
            </span>
            {currentStep !== 'confirm' && <ArrowRight className="h-4 w-4" />}
            {currentStep === 'confirm' && <CheckCircle className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
