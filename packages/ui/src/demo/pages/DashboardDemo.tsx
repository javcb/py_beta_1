import { Card } from "../../components/primitives/Card";
import { kpis } from "../../mocks/mockData";

export default function DashboardDemo() {
  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-3">
        {kpis.map((k) => (
          <Card key={k.label} className="p-4">
            <div className="text-sm text-muted">{k.label}</div>
            <div className="text-2xl font-bold">{k.value}</div>
            <div className="text-sm text-green-600">{k.delta}</div>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <div className="text-sm mb-2">Revenue</div>
          <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-muted">
            Chart placeholder
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm mb-2">Status Split</div>
          <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-muted">
            Chart placeholder
          </div>
        </Card>
      </div>
    </div>
  );
}
