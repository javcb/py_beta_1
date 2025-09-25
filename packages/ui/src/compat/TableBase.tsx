import * as React from 'react';

export type TableBaseProps<T = any> = { 
  columns?: { key: string; header: string }[]
  data?: T[]
  className?: string
};

export function TableBase<T = any>({ columns = [], data = [], className = '' }: TableBaseProps<T>) {
  return (
    <div className={['rounded-xl border overflow-x-auto', className].join(' ')}>
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c.key} className="px-3 py-2 text-left font-semibold">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map(c => (
                <td key={c.key} className="px-3 py-2">
                  {(row as any)[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
