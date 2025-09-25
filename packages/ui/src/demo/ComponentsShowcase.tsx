import React from "react";
import {
  Button, Card, DateField, UploadDropzone, PaymentElement, DataTable, type ColumnDef
} from "../index";

const rows = [
  { id: 1, property: "Sunset Apartments", tenant: "John Doe", amount: 1500, status: "COMPLETED" },
  { id: 2, property: "Downtown Lofts", tenant: "Jane Smith", amount: 1800, status: "PENDING" }
];
const cols: ColumnDef<(typeof rows)[number]>[] = [
  { header: "ID", accessorKey: "id" },
  { header: "Property", accessorKey: "property" },
  { header: "Tenant", accessorKey: "tenant" },
  { header: "Amount", accessorKey: "amount", cell: ({ getValue }) => <>${Number(getValue()).toLocaleString()}</> },
  { header: "Status", accessorKey: "status" }
];

export default function ComponentsShowcase() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

  return (
    <div className="grid gap-6">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Primitives</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button>Button</Button>
          <Button intent="secondary">Secondary</Button>
        </div>
        <Card className="p-4">Card content</Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Forms</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <DateField label="Date" value={selectedDate} onChange={setSelectedDate} />
          <UploadDropzone label="Upload files" onFiles={()=>{}} />
        </div>
        <div className="rounded-2xl border p-3">
          <p className="text-sm opacity-70 mb-2">Stripe PaymentElement (placeholder; requires Elements in app)</p>
          <PaymentElement />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Data</h2>
        <DataTable data={rows} columns={cols} />
      </section>
    </div>
  );
}
