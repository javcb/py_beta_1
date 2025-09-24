import React from 'react'
import { cn } from '../utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'destructive' | 'outline'
  className?: string
}

const variantClasses = {
  default: 'bg-bg-muted text-text-primary border border-gray-200',
  success: 'bg-green-100 text-green-800 border border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
  destructive: 'bg-red-100 text-red-800 border border-red-200',
  outline: 'bg-transparent text-text-primary border border-gray-300'
}

export function Badge({ 
  children, 
  variant = 'default', 
  className 
}: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  )
}
