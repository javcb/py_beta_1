import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./app.css"
import { AppShell } from "./AppShell"
import DocumentsPage from "./pages/documents/index"
import DocumentDetailPage from "./pages/documents/[id]"
import PaymentsPage from "./pages/payments/index"
import DashboardPage from "./pages/dashboard/index"
import PropertiesPage from "./pages/properties/index"
import PropertyDetailPage from "./pages/properties/[id]"
import DocumentCenterPage from "./pages/document-center/index"
import ThemeToggle from "./components/ThemeToggle"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/documents", element: <DocumentsPage /> },
      { path: "/documents/:id", element: <DocumentDetailPage /> },
      { path: "/payments", element: <PaymentsPage /> },
      { path: "/properties", element: <PropertiesPage /> },
      { path: "/properties/:id", element: <PropertyDetailPage /> },
      { path: "/document-center", element: <DocumentCenterPage /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeToggle />
  </React.StrictMode>
)
