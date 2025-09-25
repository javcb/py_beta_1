import * as React from 'react';

export function PaymentElementBase({ className = '' }: { className?: string }) {
  return (
    <div className={['rounded-xl border p-4 text-sm text-yellow-700 bg-yellow-50 dark:bg-yellow-950/20 dark:text-yellow-200', className].join(' ')}>
      Stripe PaymentElement placeholder (compat)
    </div>
  );
}
