# Presentational Checklist: Demo Landlord & Tenant UI Recreation

## Assumptions
- All data is mock and pages must import ONLY from `src/adapters` and `src/patterns`
- No external API calls - all data sourced from mock files
- Presentational-only implementation - no business logic or state management
- All components use tokenized utilities (no hardcoded hex values)
- Mobile-first responsive design approach

---

## 🏠 LANDLORD ROLE

### AppShell Elements
- [ ] **Sidebar Navigation**
  - [ ] Dashboard section
  - [ ] Properties section  
  - [ ] Payments section
  - [ ] Document Center section
  - [ ] Maintenance section
  - [ ] Analytics section
  - [ ] Transactions section
  - [ ] Settings/Profile section
- [ ] **Top Navbar**
  - [ ] Global search input
  - [ ] Role selector dropdown
  - [ ] User avatar with dropdown
  - [ ] Notifications bell
- [ ] **Global Search**
  - [ ] Command palette input
  - [ ] Search results dropdown
  - [ ] Entity type grouping (documents, properties, payments)
- [ ] **Mobile Navigation**
  - [ ] MobileBottomNavigation component
  - [ ] MobileHamburgerMenu component
  - [ ] Responsive sidebar toggle

### Dashboard Module
- [ ] **Dashboard Page** (`/dashboard`)
  - [ ] PageHeader with actions
  - [ ] SummaryCardsGrid (4-6 KPI cards)
  - [ ] KpiTile components (revenue, properties, tenants, maintenance)
  - [ ] QuickActionsGrid (Add Property, New Payment, Upload Document)
  - [ ] Chart placeholders (revenue trend, occupancy rate)
  - [ ] Recent activity feed
  - **Adapters**: Card, Button, Badge, Avatar
  - **Advanced TODOs**: Real-time data updates, interactive charts

### Properties Module
- [ ] **Properties List** (`/properties`)
  - [ ] PageHeader with "Add Property" action
  - [ ] SearchFiltersBar (search, status, type filters)
  - [ ] StandardTable with property data
  - [ ] PropertyCard grid view toggle
  - [ ] Pagination controls
  - **Adapters**: Table, Card, Input, Button, Badge, Tooltip
  - **Advanced TODOs**: Advanced filtering, bulk actions, export

- [ ] **Property Detail** (`/properties/:id`)
  - [ ] PropertyDtoCard-like summary
  - [ ] Property metrics section
  - [ ] Tenants sub-section with tenant cards
  - [ ] Quick actions (Edit, Manage, Maintenance)
  - [ ] Property photos gallery
  - **Adapters**: Card, Button, Badge, Avatar, Modal
  - **Advanced TODOs**: Photo gallery, tenant management

- [ ] **Property Manage** (`/properties/:id/manage`)
  - [ ] Tabs for Settings/Maintenance/Financials
  - [ ] Property settings form
  - [ ] Maintenance history table
  - [ ] Financial metrics cards
  - **Adapters**: Tabs, Card, Input, Button, Table
  - **Advanced TODOs**: Form validation, data persistence

### Payments Module
- [ ] **Payments Page** (`/payments`)
  - [ ] PageHeader with "Start Payment" action
  - [ ] SearchFiltersBar (status, date range, property filters)
  - [ ] StandardTable with payment data
  - [ ] PaymentMethodCard list
  - [ ] Export button (presentational)
  - [ ] PaymentWizard modal (presentational steps)
  - **Adapters**: Table, Card, Button, Modal, Badge, Input
  - **Advanced TODOs**: Payment processing flow, receipt generation

### Document Center Module
- [ ] **Document Center** (`/document-center`)
  - [ ] PageHeader with "Upload Document" action
  - [ ] SearchFiltersBar (type, category, date filters)
  - [ ] DocumentCard grid/list view
  - [ ] PinnedContentContainer section
  - [ ] FileDropzone area (presentational)
  - [ ] DocumentViewer modal (PDF/Image/Text placeholders)
  - [ ] DocumentToolbar with actions
  - **Adapters**: Card, Modal, Button, Input, Badge, Tooltip
  - **Advanced TODOs**: File preview, document categorization, bulk operations

### Maintenance Module
- [ ] **Maintenance Page** (`/maintenance`)
  - [ ] PageHeader with "New Request" action
  - [ ] SearchFiltersBar (status, priority, property filters)
  - [ ] StandardTable with maintenance requests
  - [ ] WorkOrderCard components
  - [ ] ContractorManagement section
  - [ ] NewRequest modal (presentational form)
  - **Adapters**: Table, Card, Button, Modal, Badge, Input
  - **Advanced TODOs**: Request workflow, contractor assignment

### Analytics Module
- [ ] **Analytics Page** (`/analytics`)
  - [ ] PageHeader with date range selector
  - [ ] KpiTile grid (revenue, expenses, occupancy)
  - [ ] Chart placeholders (line, bar, pie charts)
  - [ ] Financial metrics cards
  - [ ] Export reports button
  - **Adapters**: Card, Button, Input, Badge
  - **Advanced TODOs**: Interactive charts, custom date ranges, report generation

### Transactions Module
- [ ] **Transactions Page** (`/transactions`)
  - [ ] PageHeader with export action
  - [ ] SearchFiltersBar (type, date, amount filters)
  - [ ] StandardTable with transaction data
  - [ ] Transaction type badges
  - [ ] Export functionality (presentational)
  - **Adapters**: Table, Button, Badge, Input
  - **Advanced TODOs**: Advanced filtering, transaction reconciliation

### Optional Landlord Features
- [ ] **Financial Setup** (`/financial-setup`)
  - [ ] StripeConnectForm (presentational)
  - [ ] PlaidLinkForm (presentational)
  - [ ] Bank account management
  - **Adapters**: Card, Button, Input, Modal
  - **Advanced TODOs**: OAuth integration, account verification

- [ ] **Vehicle Management** (`/landlord/vehicles`)
  - [ ] Vehicle registration table
  - [ ] Parking assignment interface
  - [ ] Vehicle request approvals
  - **Adapters**: Table, Card, Button, Badge
  - **Advanced TODOs**: Vehicle tracking, parking management

---

## 🏠 TENANT ROLE

### AppShell Elements
- [ ] **Sidebar Navigation**
  - [ ] Dashboard section
  - [ ] Payments section
  - [ ] Documents section
  - [ ] Maintenance section
  - [ ] Transactions section
  - [ ] Vehicles section
  - [ ] Settings/Profile section
- [ ] **Top Navbar**
  - [ ] Global search input
  - [ ] Role selector dropdown
  - [ ] User avatar with dropdown
  - [ ] Notifications bell
- [ ] **Mobile Navigation**
  - [ ] MobileBottomNavigation component
  - [ ] MobileHamburgerMenu component
  - [ ] Responsive sidebar toggle

### Dashboard Module
- [ ] **Tenant Dashboard** (`/tenant/dashboard`)
  - [ ] PageHeader with quick actions
  - [ ] KpiTile components (rent due, maintenance requests, documents)
  - [ ] QuickActionsGrid (Pay Rent, Submit Request, View Documents)
  - [ ] Recent activity feed
  - [ ] Upcoming reminders
  - **Adapters**: Card, Button, Badge, Avatar
  - **Advanced TODOs**: Real-time notifications, payment reminders

### Payments Module
- [ ] **Tenant Payments** (`/tenant/payments`)
  - [ ] PageHeader with "Pay Now" action
  - [ ] Payment history table
  - [ ] PaymentMethodCard list
  - [ ] AutopayManager modal (presentational UI)
  - [ ] PaymentWizard modal (presentational steps)
  - [ ] Payment due alerts
  - **Adapters**: Table, Card, Button, Modal, Badge, Input
  - **Advanced TODOs**: Payment processing, autopay configuration

- [ ] **Tenant Transactions** (`/tenant/transactions`)
  - [ ] Transaction history table
  - [ ] Payment receipt cards
  - [ ] Transaction type filters
  - [ ] Export receipts button
  - **Adapters**: Table, Card, Button, Badge, Input
  - **Advanced TODOs**: Receipt generation, transaction search

### Documents Module
- [ ] **Tenant Documents** (`/tenant/documents`)
  - [ ] PageHeader with "Upload Document" action
  - [ ] Document grid/list with categories
  - [ ] DocumentCard components
  - [ ] DocumentViewer modal
  - [ ] FileDropzone area (presentational)
  - [ ] Document categories/tags
  - [ ] LeaseParsingPage integration
  - **Adapters**: Card, Modal, Button, Input, Badge, Tooltip
  - **Advanced TODOs**: Document categorization, lease parsing

### Maintenance Module
- [ ] **Tenant Maintenance** (`/tenant/maintenance`)
  - [ ] PageHeader with "New Request" action
  - [ ] New request form (presentational)
  - [ ] Maintenance requests list with photo thumbnails
  - [ ] Status chips and progress indicators
  - [ ] Photo upload interface
  - [ ] Request details modal
  - **Adapters**: Card, Button, Modal, Input, Badge, Avatar
  - **Advanced TODOs**: Photo upload, status tracking, communication

### Vehicles Module (Optional)
- [ ] **Tenant Vehicles** (`/tenant/vehicles`)
  - [ ] Vehicle registration form
  - [ ] Registered vehicles table
  - [ ] Parking request interface
  - [ ] Vehicle status badges
  - **Adapters**: Card, Button, Input, Table, Badge
  - **Advanced TODOs**: Vehicle validation, parking management

---

## 🔧 SHARED COMPONENTS

### Layout Components
- [ ] **AppShell** - Main application wrapper
- [ ] **DashboardLayout** - Dashboard page layout
- [ ] **PageHeader** - Page header with actions
- [ ] **ContentGrid** - Content layout grid
- [ ] **SummaryCardsGrid** - KPI cards container
- [ ] **QuickActionsGrid** - Action buttons container

### Data Display Components
- [ ] **StandardTable** - Data table with sorting/filtering
- [ ] **KpiTile** - KPI display tile
- [ ] **SummaryCard** - Summary statistics card
- [ ] **Chart** - Chart visualization placeholder
- [ ] **ListCard** - List item card
- [ ] **EmptyState** - Empty state display

### Form Components
- [ ] **SearchFiltersBar** - Search and filter toolbar
- [ ] **FilterBar** - Filter controls
- [ ] **StandardSearchFilter** - Search input
- [ ] **FileDropzone** - File upload area

### Modal Components
- [ ] **DocumentViewer** - Document preview modal
- [ ] **PaymentWizard** - Payment processing modal
- [ ] **AutopayManager** - Autopay configuration modal
- [ ] **NewRequest** - New maintenance request modal

### Utility Components
- [ ] **ShortcutHelp** - Keyboard shortcuts help
- [ ] **ShortcutHint** - Shortcut hints
- [ ] **ViewModeSelector** - View mode toggle
- [ ] **PinnedContentContainer** - Pinned content wrapper

---

## 📱 MOBILE SPECIFIC

### Mobile Navigation
- [ ] **MobileBottomNavigation** - Bottom tab navigation
- [ ] **MobileHamburgerMenu** - Hamburger menu overlay
- [ ] **Responsive Sidebar** - Collapsible sidebar
- [ ] **Mobile Search** - Mobile-optimized search

### Mobile Components
- [ ] **Mobile Card Layouts** - Touch-friendly card layouts
- [ ] **Mobile Tables** - Responsive table components
- [ ] **Mobile Modals** - Full-screen mobile modals
- [ ] **Mobile Forms** - Touch-optimized form inputs

---

## ✅ COMPLETION CHECKLIST

### Phase 1: Foundation
- [ ] All core adapters implemented (Button, Card, Input, Table, Modal, etc.)
- [ ] Design token system integrated
- [ ] AppShell with role-aware navigation
- [ ] Mobile navigation components

### Phase 2: Landlord Pages
- [ ] Dashboard page with KPI tiles
- [ ] Properties listing and detail pages
- [ ] Payments management page
- [ ] Document center page
- [ ] Maintenance page
- [ ] Analytics page
- [ ] Transactions page

### Phase 3: Tenant Pages
- [ ] Tenant dashboard
- [ ] Tenant payments and transactions
- [ ] Tenant documents
- [ ] Tenant maintenance
- [ ] Tenant vehicles (optional)

### Phase 4: Polish
- [ ] Global search functionality
- [ ] Loading/empty/error states
- [ ] Responsive design testing
- [ ] Accessibility compliance
- [ ] Performance optimization

---

## 🎯 SUCCESS METRICS

- [ ] **Visual Fidelity**: 95%+ match with original design
- [ ] **Component Coverage**: 100% of identified components
- [ ] **Responsive Design**: Full mobile and tablet support
- [ ] **Accessibility**: WCAG 2.1 AA compliance
- [ ] **Performance**: <3s initial load time
- [ ] **Theme Support**: Complete dark/light theme
