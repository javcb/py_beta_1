import React, { useState } from 'react'
import { Button } from './adapters/Button'
import { Modal } from './adapters/Modal'
import { Card, CardBody, CardHeader } from './adapters/Card'
import { 
  Keyboard, 
  Search, 
  ArrowUp, 
  ArrowDown, 
  Enter, 
  Escape,
  Command,
  Ctrl
} from 'lucide-react'

export function ShortcutHelp() {
  const [open, setOpen] = useState(false)

  const shortcuts = [
    {
      category: 'Navigation',
      items: [
        { keys: ['Ctrl', 'K'], description: 'Open global search' },
        { keys: ['Escape'], description: 'Close search/modal' },
        { keys: ['↑', '↓'], description: 'Navigate search results' },
        { keys: ['Enter'], description: 'Select search result' },
      ]
    },
    {
      category: 'General',
      items: [
        { keys: ['Ctrl', '?'], description: 'Show this help' },
        { keys: ['Ctrl', 'R'], description: 'Refresh page' },
        { keys: ['Ctrl', 'Shift', 'R'], description: 'Hard refresh' },
      ]
    },
    {
      category: 'Role Switching',
      items: [
        { keys: ['Ctrl', 'L'], description: 'Switch to Landlord view' },
        { keys: ['Ctrl', 'T'], description: 'Switch to Tenant view' },
      ]
    }
  ]

  const isMac = typeof window !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        className="flex items-center space-x-1 text-text-secondary hover:text-text-primary"
      >
        <Keyboard className="h-4 w-4" />
        <span className="hidden sm:inline">Shortcuts</span>
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Keyboard Shortcuts"
        className="max-w-2xl"
      >
        <div className="space-y-6">
          {shortcuts.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="text-lg font-semibold text-text-primary">{category.category}</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  {category.items.map((shortcut, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between">
                      <span className="text-text-secondary">{shortcut.description}</span>
                      <div className="flex items-center space-x-1">
                        {shortcut.keys.map((key, keyIndex) => (
                          <React.Fragment key={keyIndex}>
                            {keyIndex > 0 && <span className="text-text-secondary">+</span>}
                            <kbd className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-mono rounded border">
                              {key === 'Ctrl' && isMac ? '⌘' : key}
                            </kbd>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
          
          <div className="text-center text-sm text-text-secondary">
            <p>Press <kbd className="px-1 py-0.5 bg-gray-100 text-gray-800 text-xs font-mono rounded">Ctrl</kbd> + <kbd className="px-1 py-0.5 bg-gray-100 text-gray-800 text-xs font-mono rounded">?</kbd> to open this help anytime</p>
          </div>
        </div>
      </Modal>
    </>
  )
}
