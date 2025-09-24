import * as React from "react"
import { useParams } from "react-router-dom"
import { getDocumentById } from "../../mock/documents"
import { Navigation } from "../../components/Navigation"

export default function DocumentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const doc = id ? getDocumentById(id) : null
  
  if (!id) return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="p-6 text-text-secondary">No id provided.</div>
      </main>
    </div>
  )
  
  if (!doc) return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="p-6 text-text-secondary">Document not found.</div>
      </main>
    </div>
  )
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-6 space-y-3">
          <h1 className="text-xl font-semibold">{doc.title}</h1>
          <div className="text-sm text-text-secondary">Owner: {doc.owner}</div>
          <div>Status: {doc.status}</div>
          <p className="text-sm">{doc.summary}</p>
        </div>
      </main>
    </div>
  )
}
