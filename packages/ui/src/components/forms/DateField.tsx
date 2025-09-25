import * as React from 'react';

export type DateFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'default' | 'ghost' | 'error'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  error?: string
  helperText?: string
};

export function DateField(props: DateFieldProps) {
  const { 
    variant = 'default', 
    size = 'md', 
    label, 
    error, 
    helperText, 
    className = '', 
    id,
    ...rest 
  } = props;
  
  const fieldId = id || React.useId()
  const errorId = error ? `${fieldId}-error` : undefined
  const helperId = helperText ? `${fieldId}-helper` : undefined

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
    <div className="space-y-1">
      {label && (
        <label 
          htmlFor={fieldId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
        <input
          type="date"
          id={fieldId}
          className={[
            'flex w-full rounded-md border bg-white dark:bg-gray-900 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950 dark:placeholder:text-gray-400',
            variantClasses[variant],
            sizeClasses[size],
            className
          ].join(' ')}
          aria-describedby={errorId || helperId}
          {...rest}
        />
      {error && (
        <p id={errorId} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  )
}