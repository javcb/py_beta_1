import * as React from "react";
import { Card, CardBody, CardHeader } from "../../adapters/Card";
import { Table } from "../../adapters/Table";
import { listPayments } from "../../mock/payments";

export default function PaymentsPage() {
  const [rows, setRows] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let alive = true;
    listPayments().then((r) => { if (alive) setRows(r); }).finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Payments</h1>
        <p className="text-text-secondary">Manage your payments and transactions</p>
      </div>
      <div className="max-w-5xl">
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
    </div>
  );
}
