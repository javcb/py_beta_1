import * as React from "react";
import { Card, CardBody, CardHeader } from "../adapters/Card";
import { Table } from "../adapters/Table";
import { Input } from "../adapters/Input";
import { Button } from "../adapters/Button";
import { listDocuments, type Document } from "../mock/documents";

export function DocumentList({ onOpen }: { onOpen: (doc: Document) => void }) {
  const [q, setQ] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [docs, setDocs] = React.useState<Document[]>([]);

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    listDocuments()
      .then((d) => { if (alive) { setDocs(d); setError(null); } })
      .catch((e) => { if (alive) setError(String(e)); })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, []);

  const filtered = docs.filter(d =>
    [d.title, d.owner, d.status].join(" ").toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>Documents</CardHeader>
      <CardBody>
        <div className="flex items-center gap-2 mb-3">
          <Input placeholder="Search documents..." value={q} onChange={(e) => setQ(e.target.value)} />
          <Button onClick={() => setQ("")} intent="ghost">Clear</Button>
        </div>

        {loading ? (
          <div className="p-6 text-text-secondary">Loading…</div>
        ) : error ? (
          <div className="p-6 text-red-600">Error: {error}</div>
        ) : (
          <Table
            columns={[
              { key: "title", header: "Title" },
              { key: "owner", header: "Owner", width: "20%" },
              { key: "status", header: "Status", width: "16%" },
              { key: "updatedAt", header: "Updated", width: "18%", render: (v) => new Date(v).toLocaleString() }
            ]}
            data={filtered}
            empty="No documents found."
            onRowClick={onOpen}
          />
        )}
      </CardBody>
    </Card>
  );
}
