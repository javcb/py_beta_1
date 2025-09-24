import React, { useState } from 'react'
import { Modal } from '../../adapters/Modal'
import { Button } from '../../adapters/Button'
import { Input } from '../../adapters/Input'
import { Badge } from '../../adapters/Badge'
import { Card, CardBody } from '../../adapters/Card'
import { 
  CreditCard, 
  Calendar,
  DollarSign,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock
} from 'lucide-react'

interface AutopayManagerProps {
  open: boolean
  onClose: () => void
  config: any
  paymentMethods: any[]
}

export function AutopayManager({ open, onClose, config, paymentMethods }: AutopayManagerProps) {
  const [isEnabled, setIsEnabled] = useState(config.isEnabled)
  const [selectedMethod, setSelectedMethod] = useState(config.paymentMethodId)
  const [amountType, setAmountType] = useState(config.amountType)
  const [fixedAmount, setFixedAmount] = useState('')
  const [scheduledDate, setScheduledDate] = useState('1')

  const handleSave = () => {
    // Save autopay configuration
    console.log('Saving autopay config:', {
      isEnabled,
      selectedMethod,
      amountType,
      fixedAmount: amountType === 'fixed' ? parseFloat(fixedAmount) : undefined,
      scheduledDate
    })
    onClose()
  }

  const selectedMethodData = paymentMethods.find(m => m.id === selectedMethod)

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Autopay Manager"
      className="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Current Status */}
        <Card className={isEnabled ? 'border-green-200 bg-green-50' : 'border-gray-200'}>
          <CardBody className="p-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${isEnabled ? 'bg-green-100' : 'bg-gray-100'}`}>
                {isEnabled ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <Clock className="h-6 w-6 text-gray-600" />
                )}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium ${isEnabled ? 'text-green-800' : 'text-gray-800'}`}>
                  Autopay is {isEnabled ? 'Active' : 'Inactive'}
                </h4>
                <p className={`text-sm ${isEnabled ? 'text-green-700' : 'text-gray-700'}`}>
                  {isEnabled 
                    ? `Next payment: ${config.nextPayment} • ${config.amountType} amount`
                    : 'Enable autopay to automatically pay your rent each month'
                  }
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsEnabled(!isEnabled)}
                className={isEnabled ? 'text-red-600 border-red-200' : 'text-green-600 border-green-200'}
              >
                {isEnabled ? 'Disable' : 'Enable'}
              </Button>
            </div>
          </CardBody>
        </Card>

        {isEnabled && (
          <>
            {/* Payment Method Selection */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Payment Method
              </label>
              <div className="space-y-2">
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

            {/* Amount Configuration */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Payment Amount
              </label>
              <div className="space-y-3">
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="amountType"
                      value="full"
                      checked={amountType === 'full'}
                      onChange={(e) => setAmountType(e.target.value)}
                      className="text-brand-500"
                    />
                    <span className="text-sm text-text-primary">Full amount due</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="amountType"
                      value="fixed"
                      checked={amountType === 'fixed'}
                      onChange={(e) => setAmountType(e.target.value)}
                      className="text-brand-500"
                    />
                    <span className="text-sm text-text-primary">Fixed amount</span>
                  </label>
                </div>
                {amountType === 'fixed' && (
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={fixedAmount}
                      onChange={(e) => setFixedAmount(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Scheduled Date */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Payment Date
              </label>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-text-secondary" />
                <select
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="1">1st of each month</option>
                  <option value="5">5th of each month</option>
                  <option value="10">10th of each month</option>
                  <option value="15">15th of each month</option>
                  <option value="20">20th of each month</option>
                  <option value="25">25th of each month</option>
                  <option value="28">28th of each month</option>
                </select>
              </div>
            </div>

            {/* Summary */}
            <Card className="bg-gray-50">
              <CardBody className="p-4">
                <h4 className="font-medium text-text-primary mb-3">Autopay Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Payment Method:</span>
                    <span className="text-text-primary">
                      {selectedMethodData?.type} •••• {selectedMethodData?.lastFour}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Amount:</span>
                    <span className="text-text-primary">
                      {amountType === 'full' ? 'Full amount due' : `$${fixedAmount || '0.00'}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Schedule:</span>
                    <span className="text-text-primary">
                      {scheduledDate}{scheduledDate === '1' ? 'st' : scheduledDate === '2' ? 'nd' : scheduledDate === '3' ? 'rd' : 'th'} of each month
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </>
        )}

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {isEnabled ? 'Save Changes' : 'Enable Autopay'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
