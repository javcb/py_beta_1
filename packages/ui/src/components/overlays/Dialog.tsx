import * as React from 'react';

export type DialogProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string | React.ReactNode
  className?: string
};

export function Dialog({ open, onClose, children, title, className = '' }: DialogProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Dialog */}
      <div
        className={[
          'relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4',
          className
        ].join(' ')}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            {typeof title === 'string' ? (
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
            ) : (
              title
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export function DialogHeader({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={[
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className
      ].join(' ')} 
      {...rest} 
    />
  )
}

export function DialogTitle({ className = '', ...rest }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={[
        'text-lg font-semibold leading-none tracking-tight',
        className
      ].join(' ')} 
      {...rest} 
    />
  )
}

export function DialogDescription({ className = '', ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={[
        'text-sm text-gray-500 dark:text-gray-400',
        className
      ].join(' ')} 
      {...rest} 
    />
  )
}

export function DialogContent({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={[
        'px-6 py-4',
        className
      ].join(' ')} 
      {...rest} 
    />
  )
}

export function DialogFooter({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={[
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 px-6 py-4',
        className
      ].join(' ')} 
      {...rest} 
    />
  )
}

// Alias for Modal
export const Modal = Dialog;
