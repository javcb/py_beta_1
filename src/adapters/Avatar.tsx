import React from 'react'
import { cn } from '../utils/cn'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-8 w-8 text-sm',
  lg: 'h-12 w-12 text-base'
}

export function Avatar({ 
  src, 
  alt = 'Avatar', 
  fallback = 'U', 
  className,
  size = 'md'
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  return (
    <div className={cn(
      'relative inline-flex items-center justify-center rounded-full bg-bg-muted text-text-secondary font-medium',
      sizeClasses[size],
      className
    )}>
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span className="font-medium">{fallback}</span>
      )}
    </div>
  )
}
