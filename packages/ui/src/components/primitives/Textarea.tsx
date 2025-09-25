import * as React from 'react';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: 'default' | 'ghost' | 'error'
  size?: 'sm' | 'md' | 'lg'
};

export function Textarea(props: TextareaProps) {
  const { variant = 'default', size = 'md', className = '', ...rest } = props;
  
  const variantClasses = {
    default: 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500',
    ghost: 'border-transparent focus:border-blue-500 focus:ring-blue-500',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
  };
  
  const sizeClasses = {
    sm: 'min-h-[32px] px-3 py-1 text-sm',
    md: 'min-h-[40px] px-3 py-2 text-sm',
    lg: 'min-h-[48px] px-4 py-2 text-base',
  };
  
  return (
    <textarea 
      className={[
        'flex w-full rounded-md border bg-white dark:bg-gray-900 px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950 dark:placeholder:text-gray-400',
        variantClasses[variant],
        sizeClasses[size],
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}
