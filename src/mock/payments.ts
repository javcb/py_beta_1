type Payment = {
  id: string;
  amount: number; // cents
  status: "Pending" | "Paid" | "Failed";
  createdAt: number;
};

const rows: Payment[] = [
  { id: "P-2001", amount: 129900, status: "Paid", createdAt: Date.now() - 86400_000 * 1 },
  { id: "P-2002", amount: 259900, status: "Pending", createdAt: Date.now() - 86400_000 * 4 },
  { id: "P-2003", amount: 49900, status: "Failed", createdAt: Date.now() - 86400_000 * 7 }
];

export async function listPayments(): Promise<Payment[]> {
  await new Promise(r => setTimeout(r, 300));
  return rows.slice();
}
