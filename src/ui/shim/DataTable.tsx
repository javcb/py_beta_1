import React from 'react'

interface Column<T> {
  key: string
  header: string
  render?: (value: any, item: T) => React.ReactNode
  width?: string
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  empty?: string
  onRowClick?: (item: T) => void
  className?: string
}

export default function DataTable<T>({ 
  columns, 
  data, 
  empty = "No data available",
  onRowClick,
  className 
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-500 ${className || ''}`}>
        {empty}
      </div>
    )
  }

  return (
    <div className={`overflow-x-auto ${className || ''}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr 
              key={index}
              onClick={() => onRowClick?.(item)}
              className={`hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {columns.map((column) => (
                <td 
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
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
