import { DataTable, type ColumnDef } from "../../components/data/DataTable";
import { payments } from "../../mocks/mockData";

type Row = typeof payments[number];
const columns: ColumnDef<Row>[] = [
  { header: "ID", accessorKey: "id" },
  { header: "Property", accessorKey: "propertyName" },
  { header: "Tenant", accessorKey: "tenantName" },
  { header: "Amount", accessorKey: "amount", cell: ({ getValue }) => <>${Number(getValue()).toLocaleString()}</> },
  { header: "Status", accessorKey: "status", cell: ({ getValue }) => (
    <span className={`px-2 py-1 rounded text-xs ${
      getValue() === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
    }`}>
      {String(getValue())}
    </span>
  ) }
];

export default function PaymentsDemo() {
  return <DataTable data={payments} columns={columns} />;
}
