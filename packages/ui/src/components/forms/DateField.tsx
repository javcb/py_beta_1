import * as React from "react";
// placeholder; later, wrap react-day-picker from adapters/day-picker
export const DateField = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input type="date" className="rounded-card border px-3 py-2" {...props} />
);