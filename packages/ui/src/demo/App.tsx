import React from "react";
import { AppShell, PageHeader, Button, ToastHost, toast } from "../index";
import ComponentsShowcase from "./ComponentsShowcase";
import DashboardDemo from "./pages/DashboardDemo";
import PaymentsDemo from "./pages/PaymentsDemo";
import DocumentsDemo from "./pages/DocumentsDemo";
import Catalog from "./Catalog";

export default function App() {
  const [tab, setTab] = React.useState<"components"|"demos"|"catalog">("components");
  return (
    <AppShell
      sidebar={<div className="space-y-2">
        <div className="text-sm font-medium">Navigation</div>
        <button className={`block w-full rounded-lg px-3 py-2 text-left ${tab==="components"?"bg-black/5 dark:bg-white/10":""}`} onClick={()=>setTab("components")}>Components</button>
        <button className={`block w-full rounded-lg px-3 py-2 text-left ${tab==="demos"?"bg-black/5 dark:bg-white/10":""}`} onClick={()=>setTab("demos")}>Demos</button>
        <button className={`block w-full rounded-lg px-3 py-2 text-left ${tab==="catalog"?"bg-black/5 dark:bg-white/10":""}`} onClick={()=>setTab("catalog")}>Catalog</button>
      </div>}
      header={<PageHeader title="UI Library Sandbox" subtitle="Preview components, demos, and usage" actions={<Button onClick={()=>toast.success("Hello!")}>Notify</Button>} />}
    >
      <ToastHost />
      {tab === "components" && <ComponentsShowcase />}
      {tab === "demos" && (
        <div className="space-y-6">
          <DashboardDemo />
          <PaymentsDemo />
          <DocumentsDemo />
        </div>
      )}
      {tab === "catalog" && <Catalog />}
    </AppShell>
  );
}