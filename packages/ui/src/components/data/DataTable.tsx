import * as React from 'react';

export type Column<T = any> = {
  key: string
  header: string
  render?: (value: any, item: T) => React.ReactNode
  width?: string
  sortable?: boolean
};

export type DataTableProps<T = any> = {
  columns: Column<T>[]
  data: T[]
  empty?: React.ReactNode
  onRowClick?: (item: T) => void
  className?: string
  headerClassName?: string
  rowClassName?: string
};

export function DataTable<T = any>({ 
  columns, 
  data, 
  empty, 
  onRowClick, 
  className = '',
  headerClassName = '',
  rowClassName = ''
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 dark:text-gray-400">
        {empty || 'No data available'}
      </div>
    )
  }

  return (
    <div className={['overflow-x-auto', className].join(' ')}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={[
                  'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider',
                  headerClassName
                ].join(' ')}
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => onRowClick?.(item)}
              className={[
                'hover:bg-gray-50 dark:hover:bg-gray-800',
                onRowClick ? 'cursor-pointer' : '',
                rowClassName
              ].join(' ')}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
                >
                  {column.render
                    ? column.render((item as any)[column.key], item)
                    : (item as any)[column.key]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}