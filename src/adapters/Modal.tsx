import * as React from "react";
import { Button } from "./Button";

type Props = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

export function Modal({ title, open, onClose, children, footer }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-bg-surface shadow-card">
        <div className="px-4 py-3 border-b border-black/10 flex items-center justify-between">
          <h3 className="text-sm font-medium text-text-secondary">{title}</h3>
          <Button intent="ghost" onClick={onClose} aria-label="Close">✕</Button>
        </div>
        <div className="p-4">{children}</div>
        {footer && <div className="px-4 py-3 border-t border-black/10">{footer}</div>}
      </div>
    </div>
  );
}
