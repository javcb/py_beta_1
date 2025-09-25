import * as React from 'react';

export function ChartBase({ className = '' }: { className?: string }) {
  return (
    <div className={['rounded-xl border p-6 text-sm opacity-70', className].join(' ')}>
      Chart placeholder (compat)
    </div>
  );
}
