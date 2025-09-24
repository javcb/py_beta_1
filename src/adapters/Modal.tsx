import * as React from "react";
import { Button } from "./Button";
// Example—replace with your kit import:
import { Modal as TPModal } from "@tailwindplus/ui"

type Props = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
} & React.ComponentProps<typeof TPModal>;

export function Modal({ title, open, onClose, children, footer, ...rest }: Props) {
  if (!open) return null;
  return (
    <TPModal
      open={open}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
      {...rest}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-bg-surface shadow-card">
        <div className="px-4 py-3 border-b border-black/10 flex items-center justify-between">
          <h3 className="text-sm font-medium text-text-secondary">{title}</h3>
          <Button intent="ghost" onClick={onClose} aria-label="Close">✕</Button>
        </div>
        <div className="p-4">{children}</div>
        {footer && <div className="px-4 py-3 border-t border-black/10">{footer}</div>}
      </div>
    </TPModal>
  );
}
