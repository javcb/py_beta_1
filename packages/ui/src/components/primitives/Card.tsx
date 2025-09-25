import * as React from "react";
export const Card = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-card border border-black/10 bg-white shadow-sm ${className}`} {...props} />
);