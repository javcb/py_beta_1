import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type ColumnDef } from "./DataTable";

type Row = { id: number; property: string; tenant: string; amount: number; status: string };
const rows: Row[] = [
  { id: 1, property: "Sunset Apartments", tenant: "John Doe", amount: 1500, status: "COMPLETED" },
  { id: 2, property: "Downtown Lofts", tenant: "Jane Smith", amount: 1800, status: "PENDING" }
];
const columns: ColumnDef<Row>[] = [
  { header: "ID", accessorKey: "id" },
  { header: "Property", accessorKey: "property" },
  { header: "Tenant", accessorKey: "tenant" },
  { header: "Amount", accessorKey: "amount", cell: ({ getValue }) => <>${Number(getValue()).toLocaleString()}</> },
  { header: "Status", accessorKey: "status" }
];

const meta: Meta<typeof DataTable<Row>> = {
  title: "Data/DataTable",
  component: DataTable,
  args: { data: rows, columns }
};
export default meta;

export const Basic: StoryObj<typeof DataTable<Row>> = {};
