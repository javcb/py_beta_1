import * as React from "react";
import { Card, CardBody, CardHeader } from "../../adapters/Card";
import { Table } from "../../adapters/Table";
import { listPayments } from "../../mock/payments";
import { Navigation } from "../../components/Navigation";

export default function PaymentsPage() {
  const [rows, setRows] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let alive = true;
    listPayments().then((r) => { if (alive) setRows(r); }).finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto p-6">
          <Card>
            <CardHeader>Payments</CardHeader>
            <CardBody>
              {loading ? (
                <div className="p-6 text-text-secondary">Loading…</div>
              ) : (
                <Table
                  columns={[
                    { key: "id", header: "ID", width: "20%" },
                    { key: "amount", header: "Amount", width: "20%", render: (v) => `$${(v/100).toFixed(2)}` },
                    { key: "status", header: "Status", width: "20%" },
                    { key: "createdAt", header: "Created", width: "20%", render: (v) => new Date(v).toLocaleDateString() },
                  ]}
                  data={rows}
                  empty="No payments."
                />
              )}
            </CardBody>
          </Card>
        </div>
      </main>
    </div>
  );
}
