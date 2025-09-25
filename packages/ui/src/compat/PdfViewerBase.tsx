import * as React from 'react';

export function PdfViewerBase({ className = '' }: { className?: string }) {
  return (
    <div className={['rounded-xl border p-6 text-sm opacity-70', className].join(' ')}>
      PDF viewer placeholder (compat)
    </div>
  );
}
