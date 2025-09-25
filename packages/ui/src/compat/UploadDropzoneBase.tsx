import * as React from 'react';

export function UploadDropzoneBase({ className = '' }: { className?: string }) {
  return (
    <div className={['rounded-xl border border-dashed p-6 text-sm opacity-80', className].join(' ')}>
      Upload dropzone placeholder (compat)
    </div>
  );
}
