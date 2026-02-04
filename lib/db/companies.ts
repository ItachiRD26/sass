import { UserRole } from '../auth/roles';

// Company/Tenant Model
export interface Company {
  id: string;
  name: string;
  email: string;
  phone?: string;
  rnc?: string; // Registro Nacional de Contribuyente (Dominican Republic)
  address?: string;
  city?: string;
  country?: string;
  logo?: string;
  subscriptionPlan: 'free' | 'starter' | 'professional' | 'enterprise';
  subscriptionStatus: 'active' | 'inactive' | 'cancelled';
  subscriptionEndDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  isActive: boolean;
}

// User Model
export interface User {
  id: string;
  companyId: string;
  email: string;
  fullName: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Product Model
export interface Product {
  id: string;
  companyId: string;
  name: string;
  description?: string;
  sku: string;
  barcode?: string;
  price: number;
  cost: number;
  quantity: number;
  minQuantity: number;
  category?: string;
  image?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

// Sale Model
export interface Sale {
  id: string;
  companyId: string;
  customerId?: string;
  customerName?: string;
  customerEmail?: string;
  items: SaleItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: 'cash' | 'credit_card' | 'debit_card' | 'check' | 'transfer';
  paymentStatus: 'pending' | 'completed' | 'failed';
  status: 'draft' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  discount?: number;
  total: number;
}

// Quote Model
export interface Quote {
  id: string;
  companyId: string;
  quoteNumber: string;
  customerId?: string;
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  items: QuoteItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  expiryDate: Date;
  status: 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface QuoteItem {
  productId?: string;
  description: string;
  quantity: number;
  price: number;
  discount?: number;
  total: number;
}

// Inventory Movement
export interface InventoryMovement {
  id: string;
  companyId: string;
  productId: string;
  type: 'in' | 'out' | 'adjustment' | 'damage' | 'return';
  quantity: number;
  reason?: string;
  reference?: string; // Sale ID, Quote ID, etc.
  createdAt: Date;
  createdBy: string;
}

// PayPal Subscription
export interface PayPalSubscription {
  id: string;
  companyId: string;
  planId: string;
  subscriptionId: string;
  status: 'APPROVAL_PENDING' | 'ACTIVE' | 'SUSPENDED' | 'CANCELLED' | 'EXPIRED';
  startDate: Date;
  nextBillingDate?: Date;
  lastBillingDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Activity Log
export interface ActivityLog {
  id: string;
  companyId: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  changes?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}
