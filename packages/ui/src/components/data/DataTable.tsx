import * as React from "react";
// placeholder; swap to TanStack Table in adapters later
export const DataTable = ({ children }: { children?: React.ReactNode }) => (
  <div className="overflow-x-auto rounded-card border">{children}</div>
);