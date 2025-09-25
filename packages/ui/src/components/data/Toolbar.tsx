import * as React from 'react';

export type ToolbarProps = {
  children: React.ReactNode
  className?: string
};

export function Toolbar({ children, className = '' }: ToolbarProps) {
  return (
    <div 
      className={[
        'flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700',
        className
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export function ToolbarGroup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={[
        'flex items-center space-x-2',
        className
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export function ToolbarTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 
      className={[
        'text-lg font-semibold text-gray-900 dark:text-gray-100',
        className
      ].join(' ')}
    >
      {children}
    </h2>
  )
}
