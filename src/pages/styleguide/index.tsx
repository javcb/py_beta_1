import React, { useState } from 'react'
import { 
  Button, 
  Input, 
  Badge, 
  Avatar, 
  Modal,
  DataTable
} from '@ui'
import { 
  User, 
  Settings, 
  Bell, 
  Search,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'

export default function StyleguidePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Pending' },
  ]

  const columns = [
    { key: 'id', header: 'ID', width: '10%' },
    { key: 'name', header: 'Name', width: '30%' },
    { key: 'email', header: 'Email', width: '40%' },
    { 
      key: 'status', 
      header: 'Status', 
      width: '20%',
      render: (value: string) => (
        <Badge color={value === 'Active' ? 'green' : value === 'Inactive' ? 'red' : 'yellow'}>
          {value}
        </Badge>
      )
    },
  ]

  return (
    <div className="p-8 space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Catalyst UI Kit Styleguide</h1>
        <p className="text-text-secondary">Testing the integration of Catalyst UI components</p>
      </div>

      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Buttons</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button color="dark/zinc">Solid Dark</Button>
              <Button color="light">Solid Light</Button>
              <Button color="white">Solid White</Button>
              <Button color="zinc">Solid Zinc</Button>
              <Button color="blue">Solid Blue</Button>
              <Button color="green">Solid Green</Button>
              <Button color="red">Solid Red</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Outline & Plain</h3>
            <div className="flex flex-wrap gap-4">
              <Button outline>Outline</Button>
              <Button plain>Plain</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button color="blue">
                <Plus className="h-4 w-4" />
                Add Item
              </Button>
              <Button color="green">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              <Button color="red">
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Inputs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Basic Inputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Text Input</label>
                <Input 
                  type="text" 
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Email Input</label>
                <Input type="email" placeholder="Enter email..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Password Input</label>
                <Input type="password" placeholder="Enter password..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Number Input</label>
                <Input type="number" placeholder="Enter number..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge color="zinc">Default</Badge>
          <Badge color="blue">Info</Badge>
          <Badge color="green">Success</Badge>
          <Badge color="yellow">Warning</Badge>
          <Badge color="red">Error</Badge>
          <Badge color="purple">Custom</Badge>
        </div>
      </section>

      {/* Avatars Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Avatars</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
          <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" />
          <Avatar>JD</Avatar>
          <Avatar>AB</Avatar>
        </div>
      </section>

      {/* Data Table Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Data Table</h2>
        <DataTable
          columns={columns}
          data={sampleData}
          onRowClick={(item) => console.log('Row clicked:', item)}
        />
      </section>

      {/* Modal Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
          footer={
            <div className="flex gap-3">
              <Button plain onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button color="blue" onClick={() => setModalOpen(false)}>
                Confirm
              </Button>
            </div>
          }
        >
          <p className="text-text-secondary">
            This is an example modal using the Catalyst UI Dialog component.
            It demonstrates the integration with our shim system.
          </p>
        </Modal>
      </section>

      {/* Theme Toggle Test */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Theme Test</h2>
        <p className="text-text-secondary mb-4">
          Toggle the theme using the button in the bottom right to see how the components adapt.
        </p>
        <div className="p-6 bg-bg-surface border border-gray-200 rounded-lg">
          <p className="text-text-primary">This text uses our semantic tokens</p>
          <p className="text-text-secondary">This text uses secondary tokens</p>
          <div className="mt-4 p-4 bg-bg-muted rounded">
            <p className="text-text-primary">This is a muted background</p>
          </div>
        </div>
      </section>
    </div>
  )
}
