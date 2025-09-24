import React from 'react'
import { Modal as AdapterModal } from '../../adapters/Modal'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
  footer?: React.ReactNode
}

export default function Modal({ 
  open, 
  onClose, 
  title, 
  children, 
  className,
  footer 
}: ModalProps) {
  return (
    <AdapterModal 
      open={open} 
      onClose={onClose} 
      title={title}
      className={className}
    >
      {children}
      {footer && (
        <div className="mt-6 flex justify-end space-x-3">
          {footer}
        </div>
      )}
    </AdapterModal>
  )
}
