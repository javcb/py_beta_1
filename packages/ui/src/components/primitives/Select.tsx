import * as React from 'react';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  variant?: 'default' | 'ghost' | 'error'
  size?: 'sm' | 'md' | 'lg'
};

export function Select(props: SelectProps) {
  const { variant = 'default', size = 'md', className = '', children, ...rest } = props;
  
  const variantClasses = {
    default: 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500',
    ghost: 'border-transparent focus:border-blue-500 focus:ring-blue-500',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
  };
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-3 text-sm',
    lg: 'h-12 px-4 text-base',
  };
  
  return (
    <select 
      className={[
        'flex w-full rounded-md border bg-white dark:bg-gray-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950',
        variantClasses[variant],
        sizeClasses[size],
        className
      ].join(' ')} 
      {...rest}
    >
      {children}
    </select>
  );
}
