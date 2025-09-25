import * as React from 'react';

export type PageHeaderProps = {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
};

export function PageHeader({ title, description, children, className = '' }: PageHeaderProps) {
  return (
    <div 
      className={[
        'flex items-center justify-between py-6',
        className
      ].join(' ')}
    >
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        {description && (
          <p className="text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      {children && (
        <div className="flex items-center space-x-3">
          {children}
        </div>
      )}
    </div>
  )
}