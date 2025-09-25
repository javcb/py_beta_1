import * as React from 'react';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
};

export function Avatar({ src, alt, fallback, size = 'md', className = '', children, ...rest }: AvatarProps) {
  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
  } as const;

  return (
    <div
      className={[
        'relative flex shrink-0 overflow-hidden rounded-full',
        sizes[size],
        className
      ].join(' ')}
      {...rest}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
          {fallback || children}
        </div>
      )}
    </div>
  );
}
