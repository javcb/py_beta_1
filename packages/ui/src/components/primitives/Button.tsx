import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline' | 'secondary' | 'default';
  intent?: 'solid' | 'outline' | 'ghost'; // For backward compatibility
  size?: 'sm' | 'md' | 'icon';
  outline?: boolean; // For backward compatibility
  plain?: boolean; // For backward compatibility
};

export function Button({ variant, intent, size = 'md', outline, plain, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none';
  
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    icon: 'h-10 w-10 p-0',
  } as const;
  
  const variants = {
    primary: 'bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90',
    default: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    ghost: 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
  } as const;
  
  // Handle backward compatibility props
  let effectiveVariant = variant;
  if (intent) {
    effectiveVariant = intent === 'solid' ? 'primary' : intent;
  } else if (outline) {
    effectiveVariant = 'outline';
  } else if (plain) {
    effectiveVariant = 'ghost';
  }
  
  return <button className={[base, sizes[size], variants[effectiveVariant || 'primary'], className].join(' ')} {...props} />;
}