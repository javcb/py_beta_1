import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./app.css"
import { AppShell } from "./AppShell"
import DocumentsPage from "./pages/documents/index"
import DocumentDetailPage from "./pages/documents/document-detail"
import PaymentsPage from "./pages/payments/index"
import DashboardPage from "./pages/dashboard/index"
import PropertiesPage from "./pages/properties/index"
import PropertyDetailPage from "./pages/properties/property-detail"
import DocumentCenterPage from "./pages/document-center/index"
import TenantDashboardPage from "./pages/tenant/dashboard/index"
import TenantPaymentsPage from "./pages/tenant/payments/index"
import TenantTransactionsPage from "./pages/tenant/transactions/index"
import TenantDocumentsPage from "./pages/tenant/documents/index"
import TenantMaintenancePage from "./pages/tenant/maintenance/index"
import TenantVehiclesPage from "./pages/tenant/vehicles/index"
import StyleguidePage from "./pages/styleguide/index"
import UIDemoPage from "./pages/ui-demo/index"
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
      { path: "/tenant/dashboard", element: <TenantDashboardPage /> },
      { path: "/tenant/payments", element: <TenantPaymentsPage /> },
      { path: "/tenant/transactions", element: <TenantTransactionsPage /> },
      { path: "/tenant/documents", element: <TenantDocumentsPage /> },
      { path: "/tenant/maintenance", element: <TenantMaintenancePage /> },
      { path: "/tenant/vehicles", element: <TenantVehiclesPage /> },
      { path: "/styleguide", element: <StyleguidePage /> },
      { path: "/ui-demo", element: <UIDemoPage /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeToggle />
  </React.StrictMode>
)
