import * as React from "react";
import { Toaster, toast as sonnerToast } from "sonner";

export type ToastProps = { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" };

export const ToastHost: React.FC<ToastProps> = ({ position = "top-right" }) => (
  <Toaster position={position} richColors />
);

export const toast = {
  success: (msg: string) => sonnerToast.success(msg),
  error: (msg: string) => sonnerToast.error(msg),
  info: (msg: string) => sonnerToast(msg),
  warning: (msg: string) => sonnerToast.warning(msg)
};