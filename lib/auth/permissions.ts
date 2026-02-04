import { UserRole } from './roles';

export enum Permission {
  // Dashboard
  VIEW_DASHBOARD = 'view:dashboard',
  
  // Productos
  VIEW_PRODUCTS = 'view:products',
  CREATE_PRODUCTS = 'create:products',
  EDIT_PRODUCTS = 'edit:products',
  DELETE_PRODUCTS = 'delete:products',
  
  // Inventario
  VIEW_INVENTORY = 'view:inventory',
  EDIT_INVENTORY = 'edit:inventory',
  
  // POS
  VIEW_POS = 'view:pos',
  USE_POS = 'use:pos',
  
  // Ventas
  VIEW_SALES = 'view:sales',
  CREATE_SALES = 'create:sales',
  EDIT_SALES = 'edit:sales',
  DELETE_SALES = 'delete:sales',
  
  // Cotizaciones
  VIEW_QUOTES = 'view:quotes',
  CREATE_QUOTES = 'create:quotes',
  EDIT_QUOTES = 'edit:quotes',
  DELETE_QUOTES = 'delete:quotes',
  
  // Usuarios
  VIEW_USERS = 'view:users',
  CREATE_USERS = 'create:users',
  EDIT_USERS = 'edit:users',
  DELETE_USERS = 'delete:users',
  
  // Configuración
  VIEW_SETTINGS = 'view:settings',
  EDIT_SETTINGS = 'edit:settings',
  
  // Reportes
  VIEW_REPORTS = 'view:reports',
  EXPORT_REPORTS = 'export:reports',
}

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.ADMIN]: Object.values(Permission),
  
  [UserRole.MANAGER]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PRODUCTS,
    Permission.CREATE_PRODUCTS,
    Permission.EDIT_PRODUCTS,
    Permission.VIEW_INVENTORY,
    Permission.EDIT_INVENTORY,
    Permission.VIEW_POS,
    Permission.USE_POS,
    Permission.VIEW_SALES,
    Permission.CREATE_SALES,
    Permission.EDIT_SALES,
    Permission.VIEW_QUOTES,
    Permission.CREATE_QUOTES,
    Permission.EDIT_QUOTES,
    Permission.VIEW_USERS,
    Permission.VIEW_REPORTS,
    Permission.EXPORT_REPORTS,
  ],
  
  [UserRole.SUPERVISOR]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PRODUCTS,
    Permission.VIEW_INVENTORY,
    Permission.EDIT_INVENTORY,
    Permission.VIEW_POS,
    Permission.USE_POS,
    Permission.VIEW_SALES,
    Permission.CREATE_SALES,
    Permission.VIEW_QUOTES,
    Permission.VIEW_REPORTS,
  ],
  
  [UserRole.EMPLOYEE]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PRODUCTS,
    Permission.VIEW_INVENTORY,
    Permission.VIEW_POS,
    Permission.USE_POS,
    Permission.VIEW_SALES,
    Permission.CREATE_SALES,
    Permission.VIEW_QUOTES,
  ],
  
  [UserRole.VIEWER]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PRODUCTS,
    Permission.VIEW_INVENTORY,
    Permission.VIEW_SALES,
    Permission.VIEW_QUOTES,
    Permission.VIEW_REPORTS,
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}

export function hasAnyPermission(role: UserRole, permissions: Permission[]): boolean {
  return permissions.some(p => hasPermission(role, p));
}

export function hasAllPermissions(role: UserRole, permissions: Permission[]): boolean {
  return permissions.every(p => hasPermission(role, p));
}
