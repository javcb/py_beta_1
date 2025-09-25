import * as React from 'react';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & { 
  tone?: 'default' | 'success' | 'warning' | 'error'
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'error' | 'destructive'
  color?: string // For backward compatibility
};

export function Badge({ tone, variant, color, className = '', ...rest }: BadgeProps) {
  // Support both tone and variant props for backward compatibility
  const effectiveTone = tone || variant || 'default';
  
  const tones = {
    default: 'bg-black/10 text-black dark:bg-white/10 dark:text-white',
    outline: 'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300',
    success: 'bg-green-600/10 text-green-700 dark:bg-green-400/10 dark:text-green-300',
    warning: 'bg-yellow-600/10 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-200',
    error: 'bg-red-600/10 text-red-700 dark:bg-red-400/10 dark:text-red-300',
    destructive: 'bg-red-600/10 text-red-700 dark:bg-red-400/10 dark:text-red-300',
  } as const;
  
  // Handle color prop for backward compatibility
  const colorClasses = color ? `bg-${color}-100 text-${color}-700 dark:bg-${color}-400/10 dark:text-${color}-300` : '';
  
  return (
    <span 
      className={[
        'inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-medium',
        color ? colorClasses : tones[effectiveTone as keyof typeof tones],
        className
      ].join(' ')} 
      {...rest} 
    />
  );
}
