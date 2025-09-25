import * as React from "react";
import { useDropzone, type DropzoneOptions } from "../../adapters/react-dropzone";

export type UploadDropzoneProps = {
  onFiles: (files: File[]) => void;
  label?: string;
  helpText?: string;
  className?: string;
} & Omit<DropzoneOptions, "onDrop">;

export function UploadDropzone({
  onFiles,
  label,
  helpText,
  className = "",
  ...opts
}: UploadDropzoneProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop: (accepted) => onFiles(accepted),
    multiple: opts.multiple ?? true,
    ...opts
  });

  return (
    <div className={["space-y-2", className].join(" ")}>
      {label ? <label className="block text-sm font-medium">{label}</label> : null}
      <div
        {...getRootProps()}
        className={[
          "flex min-h-28 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition",
          isDragReject ? "border-red-400 bg-red-50 dark:bg-red-950/30" :
          isDragActive ? "border-brand-600 bg-brand-600/5" :
          "border-black/20 hover:bg-black/5 dark:hover:bg-white/5"
        ].join(" ")}
      >
        <input {...getInputProps()} />
        <div className="text-sm">
          {isDragReject ? "File type not accepted" :
           isDragActive ? "Drop files to upload" :
           "Drag & drop files here, or click to select"}
        </div>
      </div>
      {helpText ? <p className="text-xs text-gray-500">{helpText}</p> : null}
    </div>
  );
}
