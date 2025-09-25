import * as React from "react";
import hljs from "highlight.js";
import { Button } from "../components/primitives/Button";
import { Card } from "../components/primitives/Card";
import { DateField } from "../components/forms/DateField";
import { DataTable, type ColumnDef } from "../components/data/DataTable";

type Entry = {
  group: string;
  name: string;
  component: React.ReactNode;
  code: string;
  keywords?: string[];
};
const rows = [{ id:1, name:"A" }, { id:2, name:"B" }];
const cols: ColumnDef<(typeof rows)[number]>[] = [
  { header: "ID", accessorKey: "id" },
  { header: "Name", accessorKey: "name" }
];

const CATALOG: Entry[] = [
  {
    group: "Primitives",
    name: "Button",
    component: <Button>Button</Button>,
    code: `import { Button } from "@javcb/ui";\n<Button intent="primary">Button</Button>`
  },
  {
    group: "Primitives",
    name: "Card",
    component: <Card className="p-4">Card</Card>,
    code: `import { Card } from "@javcb/ui";\n<Card className="p-4">Card</Card>`
  },
  {
    group: "Forms",
    name: "DateField",
    component: <DateField value={new Date()} onChange={()=>{}} />,
    code: `import { DateField } from "@javcb/ui";\n<DateField value={value} onChange={setValue} />`
  },
  {
    group: "Data",
    name: "DataTable",
    component: <DataTable data={rows} columns={cols} />,
    code:
`import { DataTable, type ColumnDef } from "@javcb/ui";
type Row = { id: number; name: string };
const columns: ColumnDef<Row>[] = [{ header:"ID", accessorKey:"id" }, { header:"Name", accessorKey:"name" }];
<DataTable data={[{id:1,name:"A"}]} columns={columns} />`
  }
];

export default function Catalog() {
  const [q, setQ] = React.useState("");
  const items = React.useMemo(
    () =>
      CATALOG.filter((e) =>
        (e.name + " " + e.group + " " + (e.keywords ?? []).join(" "))
          .toLowerCase()
          .includes(q.toLowerCase())
      ),
    [q]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input
          className="h-10 w-full rounded-xl border px-3"
          placeholder="Search components..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div className="space-y-6">
        {Object.entries(groupBy(items, (e) => e.group)).map(([group, list]) => (
          <section key={group} className="space-y-2">
            <h3 className="text-lg font-semibold">{group}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((e, i) => (
                <div key={i} className="rounded-2xl border p-3">
                  <div className="mb-2 text-sm font-medium">{e.name}</div>
                  <div className="rounded-xl border bg-white p-3 dark:bg-zinc-900">{e.component}</div>
                  <pre className="mt-2 overflow-auto rounded-lg bg-black/90 p-2 text-[11px] text-white"><code dangerouslySetInnerHTML={{ __html: hljs.highlight(e.code, { language: "tsx" }).value }} /></pre>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function groupBy<T>(arr: T[], key: (t: T) => string) {
  return arr.reduce<Record<string, T[]>>((acc, cur) => {
    const k = key(cur);
    (acc[k] ||= []).push(cur);
    return acc;
  }, {});
}
