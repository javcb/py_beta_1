import { documents } from "../../mocks/mockData";

export default function DocumentsDemo() {
  return (
    <div className="space-y-3">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center gap-3 p-3 border rounded-lg">
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-mono">
            {doc.type.toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="font-medium">{doc.name}</div>
            <div className="text-sm text-muted">Type: {doc.type} · Size: {(doc.size/1024).toFixed(0)} KB</div>
          </div>
        </div>
      ))}
    </div>
  );
}
