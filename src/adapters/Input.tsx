import * as React from "react";
import { cn } from "../utils/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
};

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { className, size = "md", ...props },
  ref
) {
  const sizes = {
    sm: "h-8 px-2 text-sm",
    md: "h-10 px-3",
    lg: "h-12 px-4 text-base"
  } as const;
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md bg-white/50 dark:bg-white/5 border border-black/10 focus:ring-2 focus:ring-brand-500 focus:outline-none",
        sizes[size as keyof typeof sizes],
        className
      )}
      {...props}
    />
  );
});
