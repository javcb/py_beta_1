import * as React from "react";
export const PageHeader = ({ title, subtitle }:{ title: string; subtitle?: string }) => (
  <div className="mb-6">
    <h1 className="text-2xl font-semibold">{title}</h1>
    {subtitle && <p className="text-sm text-black/60">{subtitle}</p>}
  </div>
);