import * as React from 'react';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'text' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
};

export function Skeleton({ 
  variant = 'rectangular', 
  width, 
  height, 
  className = '', 
  ...rest 
}: SkeletonProps) {
  const variants = {
    text: 'h-4 w-full',
    rectangular: 'h-4 w-full',
    circular: 'rounded-full',
  } as const;
  
  const style = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };
  
  return (
    <div 
      className={[
        'animate-pulse rounded bg-gray-200 dark:bg-gray-700',
        variants[variant],
        className
      ].join(' ')}
      style={style}
      {...rest}
    />
  )
}
