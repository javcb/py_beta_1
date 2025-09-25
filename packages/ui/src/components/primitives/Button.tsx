import * as React from "react";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-card px-4 py-2 text-sm font-medium transition";
    const variants = {
      primary: "bg-[oklch(var(--brand-500))] text-white hover:opacity-90",
      secondary: "border border-black/10 bg-white hover:bg-black/5",
      ghost: "hover:bg-black/5"
    } as const;
    return (
      <button ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props} />
    );
  }
);
Button.displayName = "Button";