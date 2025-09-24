# Container Components Analysis

## Page Components (src/pages/)

### Authentication Pages
- **LoginPage** (`Login.tsx`) - User authentication with form validation
- **Register** (`Register.tsx`) - User registration with role selection

### Dashboard Pages
- **FigmaDashboard** (`dashboard/FigmaDashboard.tsx`) - Main landlord dashboard with KPI tiles
- **UltimateDashboard** (`dashboard/UltimateDashboard.tsx`) - Advanced dashboard with analytics
- **TenantDashboard** (`tenant/TenantDashboard.tsx`) - Tenant-specific dashboard
- **ContractorDashboard** (`contractor/ContractorDashboard.tsx`) - Contractor-specific dashboard

### Property Management Pages
- **Properties** (`properties/Properties.tsx`) - Property listing with search/filter
- **PropertyDetail** (`properties/PropertyDetail.tsx`) - Individual property details
- **PropertyManage** (`properties/PropertyManage.tsx`) - Property management interface

### Payment Pages
- **Payments** (`payments/Payments.tsx`) - Landlord payment management
- **TenantPayments** (`tenant/TenantPayments.tsx`) - Tenant payment interface with autopay
- **TenantTransactions** (`tenant/TenantTransactions.tsx`) - Tenant transaction history

### Document Management Pages
- **DocumentCenter** (`document-center/DocumentCenter.tsx`) - Main document management hub
- **TenantDocuments** (`tenant/TenantDocuments.tsx`) - Tenant document interface
- **LeaseParsingPage** (`lease/LeaseParsingPage.tsx`) - Lease document parsing

### Maintenance Pages
- **Maintenance** (`maintenance/Maintenance.tsx`) - Landlord maintenance management
- **TenantMaintenance** (`tenant/TenantMaintenance.tsx`) - Tenant maintenance requests

### Contractor Pages
- **AvailableJobs** (`contractor/AvailableJobs.tsx`) - Job search and application
- **ContractorJobs** (`contractor/ContractorJobs.tsx`) - Active job management
- **ContractorEarnings** (`contractor/ContractorEarnings.tsx`) - Earnings and payments

### Analytics & Reports
- **Analytics** (`analytics/Analytics.tsx`) - Financial analytics and reporting
- **Transactions** (`transactions/NewTransactions.tsx`) - Transaction management

### User Management
- **ProfilePage** (`profile/ProfilePage.tsx`) - User profile management
- **SettingsPage** (`settings/SettingsPage.tsx`) - Application settings
- **SupportPage** (`support/SupportPage.tsx`) - Help and support

### Specialized Pages
- **TenantOnboarding** (`landlord/TenantOnboarding.tsx`) - Tenant onboarding workflow
- **LandlordVehicles** (`landlord/LandlordVehicles.tsx`) - Vehicle management
- **TenantVehicles** (`tenant/TenantVehicles.tsx`) - Tenant vehicle requests
- **SimpleFinancialSetup** (`SimpleFinancialSetup.tsx`) - Financial integration setup
- **DesignLibrary** (`design-library/DesignLibrary.tsx`) - Component showcase

## Service Components (src/services/)

### API Services
- **RoleAwareApiService** - Role-based API service wrapper
- **TenantPaymentService** - Tenant payment operations
- **DocumentUploadService** - Document upload and management
- **LeaseParsingService** - Lease document parsing
- **Generated API Services** - Auto-generated API clients

### Mock Services
- **MockDataFactory** - Centralized mock data generation
- **MockApiService** - Mock API responses for development

## Context Providers (src/context/)

### Authentication
- **AuthContext** (`AuthContext.tsx`) - User authentication state management
- **AuthProvider** - Authentication context provider

### Application State
- **PinContext** (`PinContext.tsx`) - Pinned content management
- **ShortcutContext** (`ShortcutContext.tsx`) - Keyboard shortcuts management

## Hook Components (src/hooks/)

### Custom Hooks
- **useActionDispatcher** - Action dispatching hook
- **useContextualShortcuts** - Context-aware shortcuts
- **useDocumentActions** - Document action management
- **useDragAndDrop** - Drag and drop functionality
- **useLeaseParser** - Lease parsing operations
- **useMockApi** - Mock API integration
- **useNotifications** - Notification management
- **useResponsive** - Responsive design utilities

## Layout Container Components (src/components/layout/)

### Main Layout Containers
- **DashboardLayout** - Main application layout wrapper
- **AppModuleContainer** - Module-specific container
- **PageHeader** - Page header with actions
- **ContentGrid** - Content layout grid
- **SummaryCardsGrid** - Summary cards container
- **QuickActionsGrid** - Quick actions container

## Payment Components (src/components/payments/)

### Payment Management
- **UnifiedPaymentsLayout** - Unified payment interface
- **PaymentsActions** - Payment action buttons
- **PaymentsContentArea** - Payment content display
- **PaymentsModals** - Payment-related modals
- **UnifiedPaymentsActions** - Unified payment actions
- **UnifiedPaymentsContentArea** - Unified payment content
- **UnifiedPaymentsLayout** - Unified payment layout
- **UnifiedPaymentsModals** - Unified payment modals

## Generated Components (src/components/generated/)

### DTO Display Components
- **AutopayConfigurationDtoCard** - Autopay configuration display
- **BankAccountDtoCard** - Bank account display
- **ContractorDtoCard** - Contractor profile display
- **PaymentDtoCard** - Payment display
- **PropertyDtoCard** - Property display
- **TenantDtoCard** - Tenant profile display
- **UserDtoCard** - User profile display
- And many more DTO-specific display components

## Key Characteristics

### Data Management
- **State management** using React hooks (useState, useEffect, useCallback)
- **API integration** with role-based service layers
- **Mock data** for development and testing
- **Error handling** with try-catch blocks and error states
- **Loading states** for async operations

### Business Logic
- **Role-based access control** throughout the application
- **Payment processing** with multiple payment methods
- **Document management** with upload, preview, and categorization
- **Maintenance workflow** management
- **Financial analytics** and reporting

### Integration Patterns
- **Service layer** abstraction for API calls
- **Context providers** for global state management
- **Custom hooks** for reusable business logic
- **Generated components** from API schemas
- **Mock services** for development

### Architecture Patterns
- **Container/Presentational** component separation
- **Role-based routing** and access control
- **Modular component** architecture
- **Service-oriented** data layer
- **Context-based** state management
