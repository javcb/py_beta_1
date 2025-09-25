import * as React from 'react';

export type CalendarBaseProps = { 
  value?: Date
  onChange?: (d?: Date) => void
  range?: boolean
  className?: string
};

export function CalendarBase({ className = '' }: CalendarBaseProps) {
  return (
    <div className={['rounded-xl border p-3 text-sm opacity-70', className].join(' ')}>
      Calendar placeholder (compat)
    </div>
  );
}
