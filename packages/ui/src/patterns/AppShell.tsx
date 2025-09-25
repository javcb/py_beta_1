import * as React from 'react';

export function AppShell({ header, sidebar, children }: { header?: React.ReactNode; sidebar?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[oklch(var(--bg))] text-[oklch(var(--fg))]">
      {header}
      <div className="flex">
        {sidebar && <aside className="w-64 hidden md:block">{sidebar}</aside>}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}