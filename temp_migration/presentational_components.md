# Presentational Components Analysis

## UI Components (src/components/ui/)

### Core UI Elements
- **Button** (`button.tsx`) - Primary action component with variants (default, destructive, outline, secondary, ghost, link)
- **Card** (`card.tsx`) - Container component with variants (default, elevated, outlined, filled, ghost)
- **Input** (`input.tsx`) - Form input component with validation states
- **Badge** (`badge.tsx`) - Status indicator component
- **Avatar** (`avatar.tsx`) - User profile image component
- **Modal** (`Modal.tsx`) - Overlay dialog component
- **Table** (`table.tsx`) - Data table with sorting and filtering
- **Tabs** (`tabs.tsx`) - Tab navigation component
- **Alert** (`alert.tsx`) - Notification/alert component
- **Tooltip** (`tooltip.tsx`) - Hover information component
- **Popover** (`popover.tsx`) - Floating content component
- **Breadcrumbs** - Navigation breadcrumb component
- **Separator** (`separator.tsx`) - Visual divider component
- **Progress** (`progress.tsx`) - Progress indicator component
- **Switch** (`switch.tsx`) - Toggle switch component
- **Checkbox** (`checkbox.tsx`) - Checkbox input component
- **RadioGroup** (`radio-group.tsx`) - Radio button group component
- **Select** (`select.tsx`) - Dropdown select component
- **Textarea** (`textarea.tsx`) - Multi-line text input component
- **Calendar** (`calendar.tsx`) - Date picker component
- **Accordion** (`accordion.tsx`) - Collapsible content component
- **Collapsible** (`collapsible.tsx`) - Expandable content component
- **Dialog** (`dialog.tsx`) - Modal dialog component
- **Sheet** (`sheet.tsx`) - Side panel component
- **ScrollArea** (`scroll-area.tsx`) - Custom scrollable area
- **Form** (`form.tsx`) - Form wrapper with validation

### Document-Specific Components
- **DocumentCard** (`DocumentCard.tsx`) - Document preview card
- **DocumentDisplay** (`DocumentDisplay.tsx`) - Document viewer wrapper
- **DocumentPreview** (`DocumentPreview.tsx`) - Document preview component
- **DocumentViewer** (`DocumentViewer.tsx`) - Main document viewer
- **DocumentToolbar** (`DocumentToolbar.tsx`) - Document action toolbar
- **DocumentActionButtons** (`DocumentActionButtons.tsx`) - Document action buttons
- **FileDropzone** (`FileDropzone.tsx`) - File upload dropzone
- **FileTile** (`FileTile.tsx`) - File preview tile
- **FileTypeIcon** (`FileTypeIcon.tsx`) - File type indicator icon
- **PDFViewer** (`PDFViewer.tsx`) - PDF document viewer
- **ImageViewer** (`ImageViewer.tsx`) - Image document viewer
- **TextViewer** (`TextViewer.tsx`) - Text document viewer

### Payment-Specific Components
- **PaymentMethodCard** (`PaymentMethodCard.tsx`) - Payment method display card
- **PaymentMethodsCardList** (`PaymentMethodsCardList.tsx`) - Payment methods list

### Layout Components
- **PageContainer** (`PageContainer.tsx`) - Page wrapper component
- **PinnedContentContainer** (`PinnedContentContainer.tsx`) - Pinned content wrapper
- **PinnedItemsContainer** (`PinnedItemsContainer.tsx`) - Pinned items display
- **ViewerContainer** (`ViewerContainer.tsx`) - Document viewer container
- **EmptyState** (`EmptyState.tsx`) - Empty state display
- **PageLoadingState** (`StandardLoadingState.tsx`) - Loading state component
- **PageErrorDisplay** (`StandardErrorBoundary.tsx`) - Error display component

### Search and Filter Components
- **SearchFiltersBar** (`SearchFiltersBar.tsx`) - Search and filter toolbar
- **FilterBar** (`FilterBar.tsx`) - Filter controls
- **FilterSelect** (`FilterSelect.tsx`) - Filter dropdown
- **StandardSearchFilter** (`StandardSearchFilter.tsx`) - Standard search input
- **TableColumnFilter** (`TableColumnFilter.tsx`) - Table column filter
- **BatchCategorySelector** (`BatchCategorySelector.tsx`) - Batch category selection

### Data Display Components
- **StandardTable** (`StandardTable.tsx`) - Standard data table
- **TableWithFilters** (`TableWithFilters.tsx`) - Table with built-in filters
- **ListCard** (`ListCard.tsx`) - List item card component
- **SummaryCard** (`SummaryCard.tsx`) - Summary statistics card
- **KpiTile** (`KpiTile.tsx`) - KPI display tile
- **Chart** (`chart.tsx`) - Chart visualization component

### Utility Components
- **Tags** (`Tags.tsx`) - Tag display component
- **UserAvatar** (`UserAvatar.tsx`) - User avatar with fallback
- **AvatarGroup** (`AvatarGroup.tsx`) - Multiple avatars display
- **PinButton** (`PinButton.tsx`) - Pin/unpin action button
- **QuickActionsDropdown** (`QuickActionsDropdown.tsx`) - Quick actions menu
- **QuickActionsMenu** (`QuickActionsMenu.tsx`) - Quick actions list
- **ViewModeSelector** (`ViewModeSelector.tsx`) - View mode toggle
- **ShortcutHelp** (`ShortcutHelp.tsx`) - Keyboard shortcuts help
- **ShortcutHint** (`ShortcutHint.tsx`) - Shortcut hint display

## Layout Components (src/components/layout/)

### Main Layout
- **DashboardLayout** (`DashboardLayout.tsx`) - Main dashboard layout wrapper
- **AppModuleContainer** (`AppModuleContainer.tsx`) - Module container wrapper
- **PageHeader** (`PageHeader.tsx`) - Page header component
- **ContentGrid** (`ContentGrid.tsx`) - Content grid layout
- **SummaryCardsGrid** (`SummaryCardsGrid.tsx`) - Summary cards grid layout
- **QuickActionsGrid** (`QuickActionsGrid.tsx`) - Quick actions grid
- **SidebarButton** (`SidebarButton.tsx`) - Sidebar navigation button

### Mobile Components
- **MobileBottomNavigation** (`MobileBottomNavigation.tsx`) - Mobile bottom nav
- **MobileHamburgerMenu** (`MobileHamburgerMenu.tsx`) - Mobile hamburger menu

## Card Components (src/components/cards/)

- **SummaryCard** (`SummaryCard.tsx`) - Summary statistics display card

## Shared Components (src/components/shared/)

- Various shared utility components for common UI patterns

## Key Characteristics

### Design System
- Uses **Tailwind CSS** with custom design tokens
- Implements **Apple-inspired typography** (SF Pro Display, Inter)
- Custom **design token system** for consistent theming
- **Class Variance Authority (CVA)** for component variants
- **Radix UI** primitives for accessibility

### Styling Patterns
- **Design tokens** for colors, spacing, typography, and layout
- **Variant-based styling** using CVA
- **Responsive design** with mobile-first approach
- **Dark/light theme** support
- **Accessibility-first** implementation

### Component Architecture
- **Compound components** for complex UI patterns
- **Forward refs** for proper ref handling
- **Polymorphic components** with `asChild` prop
- **Controlled/uncontrolled** component patterns
- **Error boundaries** and loading states
