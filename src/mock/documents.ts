export type Document = {
  id: string;
  title: string;
  owner: string;
  status: "Draft" | "Review" | "Approved";
  updatedAt: number;
  summary: string;
};

const docs: Document[] = [
  { id: "D-1001", title: "Customer Agreement", owner: "Alex Lee", status: "Review", updatedAt: Date.now() - 3600_000, summary: "Standard MSA for new enterprise customers." },
  { id: "D-1002", title: "Security Policy", owner: "Sam Patel", status: "Draft", updatedAt: Date.now() - 86400_000 * 3, summary: "Draft update to SOC2 control language." },
  { id: "D-1003", title: "Pricing Addendum", owner: "Jordan Kim", status: "Approved", updatedAt: Date.now() - 86400_000 * 6, summary: "Signed addendum for tiered discounts." }
];

export async function listDocuments(): Promise<Document[]> {
  // Simulate latency
  await new Promise(r => setTimeout(r, 400));
  return docs.slice();
}

export function getDocumentById(id: string): Document | undefined {
  return docs.find(d => d.id === id);
}
