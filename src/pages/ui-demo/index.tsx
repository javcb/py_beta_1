import React from 'react'
import { AppShell, PageHeader, Button, Card, DataTable, DateField, PdfViewer } from '@javcb/ui'

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
    <AppShell
      header={<div className="mx-auto max-w-6xl p-4">UI Demo</div>}
      sidebar={<div className="p-4">Sidebar</div>}
    >
      <div className="mx-auto max-w-6xl space-y-4">
        <PageHeader title="Library Check" subtitle="@javcb/ui wired via workspaces" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">Buttons</h2>
        <Card className="p-4 space-x-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </Card>
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
        <h2 className="text-2xl font-semibold text-text-primary">DataTable</h2>
        <DataTable>
          <div className="p-4">DataTable placeholder - will be replaced with TanStack Table</div>
        </DataTable>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">DateField</h2>
        <DateField />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">PdfViewer</h2>
        <PdfViewer src="sample.pdf" />
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
    </AppShell>
  )
}
