import * as React from "react";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "../../adapters/tanstack-table/core";

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  className?: string;
}

export function DataTable<TData>({ columns, data, className }: DataTableProps<TData>) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className={className}>
      <table className="w-full border-collapse text-sm">
        <thead className="bg-black/5">
          {table.getHeaderGroups().map((hg: any) => (
            <tr key={hg.id}>
              {hg.headers.map((h: any) => (
                <th key={h.id} className="text-left p-2 border-b">
                  {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: any) => (
            <tr key={row.id} className="hover:bg-black/5">
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id} className="p-2 border-b">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}