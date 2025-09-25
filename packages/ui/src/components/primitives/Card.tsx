import * as React from 'react';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'outline' | 'ghost'
};

export function Card({ variant = 'default', className = '', ...rest }: CardProps) {
  const variants = {
    default: 'bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700',
    outline: 'border border-gray-200 dark:border-gray-700',
    ghost: 'bg-transparent',
  } as const;
  
  return (
    <div 
      className={[
        'rounded-lg',
        variants[variant],
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}

export function CardHeader({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={[
        'flex flex-col space-y-1.5 p-6',
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}

export function CardBody({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={[
        'p-6',
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}

export function CardTitle({ className = '', ...rest }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={[
        'text-2xl font-semibold leading-none tracking-tight',
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}

export function CardDescription({ className = '', ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={[
        'text-sm text-gray-500 dark:text-gray-400',
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}

export function CardContent({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={[
        'p-6 pt-0',
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}

export function CardFooter({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={[
        'flex items-center p-6 pt-0',
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}