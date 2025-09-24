import * as React from "react";

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

export function Table<T extends Record<string, any>>({ columns, data, empty, onRowClick }: Props<T>) {
  if (!data.length) return <div className="p-6 text-center text-text-secondary">{empty ?? "No data."}</div>;
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-text-secondary">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="px-4 py-2 border-b border-black/5" style={{ width: c.width }}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-bg-muted/60 cursor-pointer"
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((c) => (
                <td key={String(c.key)} className="px-4 py-3 border-b border-black/5">
                  {c.render ? c.render(row[c.key], row) : String(row[c.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
