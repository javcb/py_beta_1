import * as React from 'react';

export type PdfViewerProps = {
  src?: string
  className?: string
  children?: React.ReactNode
};

export function PdfViewer({ src, className = '', children }: PdfViewerProps) {
  return (
    <div 
      className={[
        'rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center',
        className
      ].join(' ')}
    >
      {children || (
        <div className="space-y-2">
          <div className="text-gray-400 dark:text-gray-500">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            PDF Viewer Placeholder
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {src ? `Source: ${src}` : 'No PDF source provided'}
          </div>
        </div>
      )}
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        This is a placeholder for PDF viewer integration. 
        Replace with actual PDF viewer component in production.
      </p>
    </div>
  )
}