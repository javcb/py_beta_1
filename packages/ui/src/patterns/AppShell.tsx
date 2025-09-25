import * as React from "react";
export const AppShell = ({ header, sidebar, children }:{
  header?: React.ReactNode; sidebar?: React.ReactNode; children?: React.ReactNode;
}) => (
  <div className="grid min-h-screen grid-rows-[auto,1fr] bg-[oklch(var(--bg))] text-[oklch(var(--fg))]">
    <header className="border-b bg-white">{header}</header>
    <div className="grid grid-cols-[240px,1fr]">
      <aside className="border-r bg-white">{sidebar}</aside>
      <main className="p-6">{children}</main>
    </div>
  </div>
);