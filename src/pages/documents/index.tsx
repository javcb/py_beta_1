import * as React from "react";
import { DocumentList } from "../../patterns/DocumentList";
import { getDocumentById, type Document } from "../../mock/documents";
import { Modal } from "../../adapters/Modal";

export default function DocumentsPage() {
  const [openDoc, setOpenDoc] = React.useState<Document | null>(null);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Documents</h1>
        <p className="text-text-secondary">Manage your documents and files</p>
      </div>
      <div className="max-w-5xl">
        <DocumentList onOpen={(doc) => setOpenDoc(getDocumentById(doc.id)!)} />
        <Modal title={openDoc?.title} open={!!openDoc} onClose={() => setOpenDoc(null)}>
          <div className="space-y-2">
            <p><strong>Owner:</strong> {openDoc?.owner}</p>
            <p><strong>Status:</strong> {openDoc?.status}</p>
            <p className="text-sm text-text-secondary">{openDoc?.summary}</p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
