import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./app.css"
import { AppShell } from "./AppShell"
import DocumentsPage from "./pages/documents/index"
import DocumentDetailPage from "./pages/documents/[id]"
import PaymentsPage from "./pages/payments/index"
import ThemeToggle from "./components/ThemeToggle"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { path: "/", element: <DocumentsPage /> },
      { path: "/documents", element: <DocumentsPage /> },
      { path: "/documents/:id", element: <DocumentDetailPage /> },
      { path: "/payments", element: <PaymentsPage /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeToggle />
  </React.StrictMode>
)
