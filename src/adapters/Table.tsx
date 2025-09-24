import * as React from "react";
// Example—replace with your kit import:
import { DataTable as TPDataTable } from "@tailwindplus/ui"

type Column<T> = {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
};

type Props<T> = {
  columns: Column<T>[];
  data: T[];
  empty?: React.ReactNode;
  onRowClick?: (row: T) => void;
};

export function Table<T extends Record<string, any>>({ columns, data, empty, onRowClick, ...rest }: Props<T> & React.ComponentProps<typeof TPDataTable>) {
  if (!data.length) return <div className="p-6 text-center text-text-secondary">{empty ?? "No data."}</div>;
  
  // Convert our column format to kit's expected format
  const kitColumns = columns.map(col => ({
    key: String(col.key),
    title: col.header,
    width: col.width,
    render: col.render
  }));

  return (
    <TPDataTable
      columns={kitColumns}
      data={data}
      onRowClick={onRowClick}
      className="overflow-x-auto"
      {...rest}
    />
  );
}
