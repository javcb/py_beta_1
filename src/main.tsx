import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./app.css"
import DocumentsPage from "./pages/documents/index"
import DocumentDetailPage from "./pages/documents/[id]"
import PaymentsPage from "./pages/payments/index"

const router = createBrowserRouter([
  { path: "/", element: <DocumentsPage /> },
  { path: "/documents", element: <DocumentsPage /> },
  // In a real app, you'd read :id via useParams and pass to DocumentDetailPage
  { path: "/documents/:id", element: <DocumentDetailPage /> },
  { path: "/payments", element: <PaymentsPage /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
