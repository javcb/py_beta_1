import * as React from 'react';

export type PaymentElementProps = {
  className?: string
  children?: React.ReactNode
};

export function PaymentElement({ className = '', children }: PaymentElementProps) {
  return (
    <div 
      className={[
        'rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950/20 dark:text-yellow-200',
        className
      ].join(' ')}
    >
      {children || (
        <div className="flex items-center space-x-2">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Payment Element Placeholder</span>
        </div>
      )}
      <p className="mt-1 text-xs">
        This is a placeholder for Stripe PaymentElement integration. 
        Replace with actual Stripe components in production.
      </p>
    </div>
  )
}