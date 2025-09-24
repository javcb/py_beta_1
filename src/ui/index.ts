// For now, let's use our existing adapters and gradually integrate Catalyst components
// This allows us to have a working system while we fix the TypeScript issues

// Re-export our existing adapters as the primary UI components
export { Button } from "../adapters/Button";
export { Input } from "../adapters/Input";
export { Badge } from "../adapters/Badge";
export { Avatar } from "../adapters/Avatar";
export { Card, CardHeader, CardBody } from "../adapters/Card";
export { Table } from "../adapters/Table";

// Modal and DataTable shims
export { default as Modal } from "./shim/Modal";
export { default as DataTable } from "./shim/DataTable";
