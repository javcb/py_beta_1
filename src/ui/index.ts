// Re-export from the UI library workspace package
export { Button, Card } from "@javcb/ui";

// Local shims for components not yet in the UI library
export { default as Modal } from "./shim/Modal";
export { default as DataTable } from "./shim/DataTable";

// Temporary fallbacks for components not yet implemented
export { Input } from "../adapters/Input";
export { Badge } from "../adapters/Badge";
export { Avatar } from "../adapters/Avatar";
export { Table } from "../adapters/Table";
