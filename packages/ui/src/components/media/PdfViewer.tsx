import * as React from "react";
import { Document, Page } from "../../adapters/react-pdf/pdf";

export type PdfViewerProps = {
  file: string | File | ArrayBuffer;
  page?: number;
  width?: number;
  className?: string;
  onLoaded?: (meta: { numPages: number }) => void;
};

export function PdfViewer({
  file,
  page = 1,
  width,
  className = "",
  onLoaded
}: PdfViewerProps) {
  const [numPages, setNumPages] = React.useState<number | null>(null);

  return (
    <div className={["rounded-2xl border bg-white p-3 shadow-sm dark:bg-zinc-900", className].join(" ")}>
      <Document
        file={file}
        onLoadSuccess={(info) => {
          setNumPages(info.numPages);
          onLoaded?.({ numPages: info.numPages });
        }}
        loading={<div className="text-sm text-muted">Loading PDF…</div>}
        error={<div className="text-sm text-red-600">Failed to load PDF.</div>}
        noData={<div className="text-sm text-muted">No PDF file specified.</div>}
      >
        <Page pageNumber={page} width={width} renderAnnotationLayer renderTextLayer />
      </Document>
      {numPages ? (
        <div className="mt-2 text-xs text-muted">{`Page ${page} of ${numPages}`}</div>
      ) : null}
    </div>
  );
}
