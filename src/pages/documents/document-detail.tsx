import * as React from "react"
import { useParams } from "react-router-dom"
import { getDocumentById } from "../../mock/documents"

export default function DocumentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const doc = id ? getDocumentById(id) : null

  if (!id) return (
    <div className="p-6">
      <div className="text-text-secondary">No id provided.</div>
    </div>
  )

  if (!doc) return (
    <div className="p-6">
      <div className="text-text-secondary">Document not found.</div>
    </div>
  )

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto space-y-3">
        <h1 className="text-xl font-semibold">{doc.title}</h1>
        <div className="text-sm text-text-secondary">Owner: {doc.owner}</div>
        <div>Status: {doc.status}</div>
        <p className="text-sm">{doc.summary}</p>
      </div>
    </div>
  )
}
