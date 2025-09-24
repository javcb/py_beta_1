import * as React from "react";
import { DocumentList } from "../../patterns/DocumentList";
import { getDocumentById, type Document } from "../../mock/documents";
import { Modal } from "../../adapters/Modal";
import { Navigation } from "../../components/Navigation";
import ThemeToggle from "../../components/ThemeToggle";

export default function DocumentsPage() {
  const [openDoc, setOpenDoc] = React.useState<Document | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto p-6">
          <DocumentList onOpen={(doc) => setOpenDoc(getDocumentById(doc.id)!)} />
          <Modal title={openDoc?.title} open={!!openDoc} onClose={() => setOpenDoc(null)}>
            <div className="space-y-2">
              <p><strong>Owner:</strong> {openDoc?.owner}</p>
              <p><strong>Status:</strong> {openDoc?.status}</p>
              <p className="text-sm text-text-secondary">{openDoc?.summary}</p>
            </div>
          </Modal>
        </div>
      </main>
      <ThemeToggle />
    </div>
  );
}
