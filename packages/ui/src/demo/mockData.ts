/**
 * Self-contained Mock Data for UI Library Demo
 * No external dependencies - all types and data defined locally
 */

// ============================================================================
// CORE TYPES AND INTERFACES
// ============================================================================

export interface UserDto {
  id: number;
  name: string;
  email: string;
  username: string;
  roles: string[];
  activeRole: string;
  isActive: boolean;
  createdAt: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  twoFactorEnabled: boolean;
  stripeChargesEnabled: boolean;
  stripePayoutsEnabled: boolean;
  isLandlordOnboardingComplete: boolean;
  totalProperties?: number;
  totalUnits?: number;
  totalTenants?: number;
  totalMonthlyIncome?: number;
}

export interface Property {
  id: number;
  name: string;
  address: string;
  type: string;
  status: string;
  monthlyRevenue: number;
  occupancyRate: number;
  totalUnits: number;
  occupiedUnits: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
}

export interface Payment {
  id: number;
  propertyId: number;
  propertyName: string;
  tenantId: number;
  tenantName: string;
  amount: number;
  amountPaid: number;
  status: number;
  description: string;
  dueDate: string;
  paymentDate?: string;
  paymentMethod: string;
  transactionId: string;
}

export interface Transaction {
  id: string;
  propertyId: number;
  propertyName: string;
  tenantId: number;
  tenantName: string;
  landlordId: number;
  type: string;
  category: string;
  amount: number;
  description: string;
  status: string;
  paymentMethod: string;
  date: string;
  createdAt: string;
}

export interface Notification {
  id: number;
  orgId: number;
  userId: number;
  title: string;
  message: string;
  link: string;
  isRead: boolean;
  createdAt: string;
  readAt?: string;
  type: string;
  relatedEntityId?: number;
  relatedEntityType?: string;
}

export interface MaintenanceRequest {
  id: number;
  orgId: number;
  propertyId: number;
  propertyName: string;
  tenantId: number;
  tenantName: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  createdAt: string;
  images: string[];
  isEmergency: boolean;
  allowEntryIfAbsent: boolean;
  verificationStatus: string;
  estimatedCost: number;
  assignedContractor?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  size: number;
  uploadedAt: string;
  uploadedBy: string;
  propertyId: number;
  propertyName: string;
  tenantId?: number;
  tenantName?: string;
  status: string;
  url: string;
  description: string;
}

// ============================================================================
// MOCK DATA VALIDATION SERVICE
// ============================================================================

export class MockDataValidator {
  private static readonly ORG_ID = 1;

  static validateAuth(request: Request): { user: UserDto | null; isValid: boolean } {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { user: null, isValid: false };
    }

    const token = authHeader.substring(7);
    if (token === 'mock.jwt.token' || token === 'py.jwt') {
      return { user: mockUsers.landlord, isValid: true };
    }

    return { user: null, isValid: false };
  }

  static validateOrgId(_user: UserDto, requestedOrgId?: number): boolean {
    if (!requestedOrgId) return true;
    return requestedOrgId === this.ORG_ID;
  }

  static validateRoleAccess(user: UserDto, allowedRoles: string[]): boolean {
    return allowedRoles.includes(user.activeRole);
  }

  static getOrgScopedData<T extends { orgId?: number }>(data: T[], _user: UserDto): T[] {
    return data.filter(item => !item.orgId || item.orgId === this.ORG_ID);
  }

  static getUserScopedData<T extends { userId?: number }>(data: T[], _user: UserDto): T[] {
    return data.filter(item => !item.userId || item.userId === _user.id);
  }
}

// ============================================================================
// USER AND AUTHENTICATION DATA
// ============================================================================

export const mockUsers = {
  landlord: {
    id: 1,
    name: 'Demo Landlord',
    email: 'landlord@example.com',
    username: 'landlord',
    roles: ['Landlord'],
    activeRole: 'Landlord',
    isActive: true,
    createdAt: new Date().toISOString(),
    emailVerified: true,
    phoneVerified: false,
    twoFactorEnabled: false,
    stripeChargesEnabled: false,
    stripePayoutsEnabled: false,
    isLandlordOnboardingComplete: true,
    totalProperties: 2,
    totalUnits: 3,
    totalTenants: 3,
    totalMonthlyIncome: 3000,
  } as UserDto,

  tenant: {
    id: 2,
    name: 'Demo Tenant',
    email: 'tenant@example.com',
    username: 'tenant',
    roles: ['Tenant'],
    activeRole: 'Tenant',
    isActive: true,
    createdAt: new Date().toISOString(),
    emailVerified: true,
    phoneVerified: false,
    twoFactorEnabled: false,
    stripeChargesEnabled: false,
    stripePayoutsEnabled: false,
    isLandlordOnboardingComplete: false,
  } as UserDto
};

// ============================================================================
// PROPERTIES AND UNITS
// ============================================================================

export const mockProperties: Property[] = [
  {
    id: 101,
    name: 'Sunset Apartments',
    address: '123 Main St, City, ST 00000',
    type: 'residential',
    status: 'occupied',
    monthlyRevenue: 2000,
    occupancyRate: 0.95,
    totalUnits: 2,
    occupiedUnits: 2,
    bedrooms: 2,
    bathrooms: 1,
    squareFootage: 1200,
  },
  {
    id: 102,
    name: 'Downtown Lofts',
    address: '456 Oak Ave, City, ST 00000',
    type: 'residential',
    status: 'vacant',
    monthlyRevenue: 1000,
    occupancyRate: 0.5,
    totalUnits: 1,
    occupiedUnits: 0,
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: 800,
  },
];

// ============================================================================
// PAYMENTS AND FINANCIAL DATA
// ============================================================================

export const mockPayments: Payment[] = [
  {
    id: 5001,
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: 9001,
    tenantName: 'John Doe',
    amount: 1500,
    amountPaid: 1500,
    status: 2,
    description: 'Monthly rent',
    dueDate: new Date().toISOString(),
    paymentDate: new Date().toISOString(),
    paymentMethod: 'card',
    transactionId: 'txn_123',
  },
  {
    id: 5002,
    propertyId: 102,
    propertyName: 'Downtown Lofts',
    tenantId: 9002,
    tenantName: 'Jane Smith',
    amount: 1800,
    amountPaid: 0,
    status: 1,
    description: 'Monthly rent',
    dueDate: new Date().toISOString(),
    paymentMethod: 'bank',
    transactionId: 'txn_124',
  },
  {
    id: 5003,
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: 9001,
    tenantName: 'John Doe',
    amount: 1500,
    amountPaid: 1500,
    status: 2,
    description: 'Security deposit',
    dueDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    paymentDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'card',
    transactionId: 'txn_125',
  },
  {
    id: 5004,
    propertyId: 103,
    propertyName: 'Garden Villa',
    tenantId: 9003,
    tenantName: 'Mike Wilson',
    amount: 2200,
    amountPaid: 2200,
    status: 2,
    description: 'Monthly rent',
    dueDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    paymentDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'bank',
    transactionId: 'txn_126',
  },
  {
    id: 5005,
    propertyId: 102,
    propertyName: 'Downtown Lofts',
    tenantId: 9002,
    tenantName: 'Jane Smith',
    amount: 1800,
    amountPaid: 0,
    status: 0,
    description: 'Monthly rent',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'bank',
    transactionId: 'txn_127',
  },
  {
    id: 5006,
    propertyId: 104,
    propertyName: 'Mountain View',
    tenantId: 9004,
    tenantName: 'Sarah Johnson',
    amount: 1950,
    amountPaid: 1950,
    status: 2,
    description: 'Monthly rent',
    dueDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    paymentDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'card',
    transactionId: 'txn_128',
  },
  {
    id: 5007,
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: 9001,
    tenantName: 'John Doe',
    amount: 150,
    amountPaid: 150,
    status: 2,
    description: 'Late fee',
    dueDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    paymentDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'card',
    transactionId: 'txn_129',
  },
  {
    id: 5008,
    propertyId: 103,
    propertyName: 'Garden Villa',
    tenantId: 9003,
    tenantName: 'Mike Wilson',
    amount: 2200,
    amountPaid: 0,
    status: 0,
    description: 'Monthly rent',
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'bank',
    transactionId: 'txn_130',
  },
];

// ============================================================================
// TRANSACTIONS DATA
// ============================================================================

export const mockTransactions: Transaction[] = [
  {
    id: 'txn_001',
    propertyId: 101,
    propertyName: 'Maple Court',
    tenantId: 9001,
    tenantName: 'John Doe',
    landlordId: 1,
    type: 'income',
    category: 'Rent Payment',
    amount: 1500,
    description: 'Monthly rent payment',
    status: 'completed',
    paymentMethod: 'card',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'txn_002',
    propertyId: 101,
    propertyName: 'Maple Court',
    tenantId: 9001,
    tenantName: 'John Doe',
    landlordId: 1,
    type: 'expense',
    category: 'Maintenance',
    amount: 150,
    description: 'Plumbing repair',
    status: 'completed',
    paymentMethod: 'bank',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'txn_003',
    propertyId: 101,
    propertyName: 'Maple Court',
    tenantId: 9001,
    tenantName: 'John Doe',
    landlordId: 1,
    type: 'income',
    category: 'Rent Payment',
    amount: 1500,
    description: 'Monthly rent payment',
    status: 'completed',
    paymentMethod: 'card',
    date: new Date(Date.now() - 32 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 32 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'txn_004',
    propertyId: 101,
    propertyName: 'Maple Court',
    tenantId: 9001,
    tenantName: 'John Doe',
    landlordId: 1,
    type: 'expense',
    category: 'Insurance',
    amount: 450,
    description: 'Property insurance',
    status: 'completed',
    paymentMethod: 'bank',
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'txn_005',
    propertyId: 101,
    propertyName: 'Maple Court',
    tenantId: 9001,
    tenantName: 'John Doe',
    landlordId: 1,
    type: 'expense',
    category: 'Tax',
    amount: 280,
    description: 'Property tax',
    status: 'completed',
    paymentMethod: 'bank',
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'txn_006',
    propertyId: 101,
    propertyName: 'Maple Court',
    tenantId: 9002,
    tenantName: 'Jane Smith',
    landlordId: 1,
    type: 'income',
    category: 'Rent Payment',
    amount: 1800,
    description: 'Monthly rent payment',
    status: 'pending',
    paymentMethod: 'bank',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'txn_007',
    propertyId: 101,
    propertyName: 'Maple Court',
    tenantId: 9002,
    tenantName: 'Jane Smith',
    landlordId: 1,
    type: 'expense',
    category: 'Maintenance',
    amount: 200,
    description: 'HVAC repair',
    status: 'completed',
    paymentMethod: 'card',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// ============================================================================
// NOTIFICATIONS
// ============================================================================

export const mockNotifications: Notification[] = [
  {
    id: 1,
    orgId: 1,
    userId: 1,
    title: "Welcome to ParcelYield",
    message: "Your account has been set up successfully!",
    link: "/dashboard",
    isRead: false,
    createdAt: new Date().toISOString(),
    readAt: undefined,
    type: "system",
    relatedEntityId: undefined,
    relatedEntityType: undefined
  },
  {
    id: 2,
    orgId: 1,
    userId: 1,
    title: "New Property Added",
    message: "123 Main St has been added to your portfolio",
    link: "/properties",
    isRead: true,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    readAt: new Date(Date.now() - 3600000).toISOString(),
    type: "property",
    relatedEntityId: 1,
    relatedEntityType: "property"
  },
  {
    id: 3,
    orgId: 1,
    userId: 1,
    title: "Maintenance Request Submitted",
    message: "New maintenance request for Unit 101",
    link: "/maintenance",
    isRead: false,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    readAt: undefined,
    type: "maintenance",
    relatedEntityId: 1,
    relatedEntityType: "maintenance"
  }
];

// ============================================================================
// MAINTENANCE REQUESTS
// ============================================================================

export const mockMaintenanceRequests: MaintenanceRequest[] = [
  {
    id: 1,
    orgId: 1,
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: 9001,
    tenantName: 'John Doe',
    title: 'Leaking Faucet',
    description: 'Kitchen faucet is leaking continuously',
    status: 'pending',
    priority: 'medium',
    category: 'plumbing',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    images: [],
    isEmergency: false,
    allowEntryIfAbsent: true,
    verificationStatus: 'pending',
    estimatedCost: 150,
    assignedContractor: undefined
  },
  {
    id: 2,
    orgId: 1,
    propertyId: 102,
    propertyName: 'Downtown Lofts',
    tenantId: 9002,
    tenantName: 'Jane Smith',
    title: 'Broken Window',
    description: 'Living room window has a crack',
    status: 'in_progress',
    priority: 'high',
    category: 'windows',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    images: [],
    isEmergency: false,
    allowEntryIfAbsent: true,
    verificationStatus: 'verified',
    estimatedCost: 300,
    assignedContractor: 'Mike Johnson'
  },
  {
    id: 3,
    orgId: 1,
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: 9001,
    tenantName: 'John Doe',
    title: 'HVAC Not Working',
    description: 'Air conditioning stopped working',
    status: 'completed',
    priority: 'high',
    category: 'hvac',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    images: [],
    isEmergency: true,
    allowEntryIfAbsent: true,
    verificationStatus: 'verified',
    estimatedCost: 450,
    assignedContractor: 'Sarah Wilson'
  },
  {
    id: 4,
    orgId: 1,
    propertyId: 103,
    propertyName: 'Garden Villa',
    tenantId: 9003,
    tenantName: 'Mike Wilson',
    title: 'Door Lock Issue',
    description: 'Front door lock is sticking',
    status: 'pending',
    priority: 'low',
    category: 'locks',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    images: [],
    isEmergency: false,
    allowEntryIfAbsent: false,
    verificationStatus: 'pending',
    estimatedCost: 75,
    assignedContractor: undefined
  },
  {
    id: 5,
    orgId: 1,
    propertyId: 104,
    propertyName: 'Mountain View',
    tenantId: 9004,
    tenantName: 'Sarah Johnson',
    title: 'Electrical Outlet',
    description: 'Kitchen outlet not working',
    status: 'in_progress',
    priority: 'medium',
    category: 'electrical',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    images: [],
    isEmergency: false,
    allowEntryIfAbsent: true,
    verificationStatus: 'verified',
    estimatedCost: 200,
    assignedContractor: 'Tom Brown'
  },
  {
    id: 6,
    orgId: 1,
    propertyId: 102,
    propertyName: 'Downtown Lofts',
    tenantId: 9002,
    tenantName: 'Jane Smith',
    title: 'Water Heater',
    description: 'No hot water in the unit',
    status: 'completed',
    priority: 'high',
    category: 'plumbing',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    images: [],
    isEmergency: true,
    allowEntryIfAbsent: true,
    verificationStatus: 'verified',
    estimatedCost: 600,
    assignedContractor: 'Mike Johnson'
  }
];

// ============================================================================
// DOCUMENTS DATA
// ============================================================================

export const mockDocuments: Document[] = [
  {
    id: 'doc_001',
    name: 'Lease Agreement - John Doe',
    type: 'pdf',
    category: 'legal',
    size: 245760,
    uploadedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    uploadedBy: 'Demo Landlord',
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: 9001,
    tenantName: 'John Doe',
    status: 'verified',
    url: '/mock-documents/sample-lease.pdf',
    description: 'Standard lease agreement for Unit 1A'
  },
  {
    id: 'doc_002',
    name: 'Property Insurance Policy',
    type: 'pdf',
    category: 'financial',
    size: 512000,
    uploadedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    uploadedBy: 'Demo Landlord',
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: undefined,
    tenantName: undefined,
    status: 'verified',
    url: '/mock-documents/sample-insurance.pdf',
    description: 'Annual property insurance coverage'
  },
  {
    id: 'doc_003',
    name: 'Maintenance Invoice - HVAC Repair',
    type: 'invoice',
    category: 'maintenance',
    size: 128000,
    uploadedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    uploadedBy: 'Demo Landlord',
    propertyId: 101,
    propertyName: 'Sunset Apartments',
    tenantId: 9001,
    tenantName: 'John Doe',
    status: 'pending',
    url: '/mock-documents/sample-invoice.pdf',
    description: 'HVAC repair invoice from contractor'
  },
  {
    id: 'doc_004',
    name: 'Property Photos',
    type: 'image',
    category: 'visual',
    size: 384000,
    uploadedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    uploadedBy: 'Demo Landlord',
    propertyId: 102,
    propertyName: 'Downtown Lofts',
    tenantId: undefined,
    tenantName: undefined,
    status: 'verified',
    url: '/mock-documents/images/property-photos/property-photos-garden-villa.jpg',
    description: 'Property interior photos'
  }
];

// ============================================================================
// DASHBOARD DATA
// ============================================================================

export const mockDashboardData = {
  kpis: [
    { label: 'Total Properties', value: '5', change: '+2', trend: 'up' },
    { label: 'Total Units', value: '24', change: '+3', trend: 'up' },
    { label: 'Occupied Units', value: '22', change: '+1', trend: 'up' },
    { label: 'Monthly Revenue', value: '$12,450', change: '+8.5%', trend: 'up' }
  ],
  alerts: [],
  insights: [],
  upcomingDeadlines: [],
  socialFeed: [],
  onboardingStatus: { isComplete: true }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const getMockDataByRole = (role: 'landlord' | 'tenant') => {
  const baseData = {
    users: mockUsers,
    properties: mockProperties,
    payments: mockPayments,
    transactions: mockTransactions,
    notifications: mockNotifications,
    maintenanceRequests: mockMaintenanceRequests,
    documents: mockDocuments,
    dashboard: mockDashboardData
  };

  if (role === 'tenant') {
    return {
      ...baseData,
      // Filter data for tenant view
      properties: mockProperties.filter(p => p.status === 'occupied'),
      payments: mockPayments.filter(p => p.tenantId === 2),
      notifications: mockNotifications.filter(n => n.userId === 2),
      maintenanceRequests: mockMaintenanceRequests.filter(m => m.tenantId === 2)
    };
  }

  return baseData;
};

export const generateMockId = (prefix: string = 'mock') => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatDate = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatDateTime = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
