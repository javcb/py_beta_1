import React from 'react'
import { Button, Card } from '@javcb/ui'

export default function UIDemoPage() {
  const mockColumns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'status', header: 'Status' },
  ]

  const mockData = [
    { id: 1, name: 'Item A', status: 'Active' },
    { id: 2, name: 'Item B', status: 'Pending' },
    { id: 3, name: 'Item C', status: 'Inactive' },
  ]

  const handleToast = () => {
    // This would use the toast function from the UI library
    console.log('Toast clicked - UI library integration working!')
  }

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-text-primary">UI Library Demo</h1>
        <p className="text-text-secondary">
          Testing @javcb/ui workspace integration
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button isLoading>Loading Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">Cards</h2>
        <div className="max-w-md">
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Sample Card</h3>
              <p className="text-text-secondary">
                This card is rendered from the @javcb/ui package.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">Simple Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {mockColumns.map((column) => (
                  <th key={column.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">Interactive Button</h2>
        <Button onClick={handleToast}>
          Test Button Click
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">Integration Status</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-800 font-medium">
              @javcb/ui workspace integration successful!
            </span>
          </div>
          <p className="text-green-700 text-sm mt-2">
            Components are being imported from the workspace package and rendered correctly.
          </p>
        </div>
      </section>
    </div>
  )
}
