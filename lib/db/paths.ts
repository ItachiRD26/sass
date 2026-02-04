export const ROUTES = {
  // Public routes
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  
  // Dashboard routes
  DASHBOARD: '/dashboard',
  DASHBOARD_OVERVIEW: '/dashboard',
  
  // Products
  PRODUCTS: '/dashboard/products',
  PRODUCTS_NEW: '/dashboard/products/new',
  PRODUCTS_EDIT: (id: string) => `/dashboard/products/${id}/edit`,
  
  // Inventory
  INVENTORY: '/dashboard/inventory',
  
  // POS
  POS: '/dashboard/pos',
  
  // Sales
  SALES: '/dashboard/sales',
  
  // Quotes
  QUOTES: '/dashboard/quotes',
  QUOTES_NEW: '/dashboard/quotes/new',
  QUOTES_VIEW: (id: string) => `/dashboard/quotes/${id}`,
  
  // Users
  USERS: '/dashboard/users',
  USERS_NEW: '/dashboard/users/new',
  USERS_EDIT: (id: string) => `/dashboard/users/${id}/edit`,
  
  // Settings
  SETTINGS: '/dashboard/settings',
  
  // Admin
  ADMIN: '/admin',
  ADMIN_USERS: '/admin',
  ADMIN_COMPANIES: '/admin',
} as const;

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.PRODUCTS,
  ROUTES.INVENTORY,
  ROUTES.POS,
  ROUTES.USERS,
  ROUTES.SETTINGS,
  ROUTES.ADMIN,
] as const;

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.FORGOT_PASSWORD,
] as const;

export function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some(route => 
    typeof route === 'string' && pathname.startsWith(route)
  );
}

export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.includes(pathname as any);
}
