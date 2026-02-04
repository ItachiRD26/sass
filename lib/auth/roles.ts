export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  SUPERVISOR = 'supervisor',
  EMPLOYEE = 'employee',
  VIEWER = 'viewer',
}

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  [UserRole.ADMIN]: 5,
  [UserRole.MANAGER]: 4,
  [UserRole.SUPERVISOR]: 3,
  [UserRole.EMPLOYEE]: 2,
  [UserRole.VIEWER]: 1,
};

export function isRoleHigherOrEqual(role: UserRole, requiredRole: UserRole): boolean {
  return ROLE_HIERARCHY[role] >= ROLE_HIERARCHY[requiredRole];
}

export const ROLE_LABELS: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'Administrador',
  [UserRole.MANAGER]: 'Gerente',
  [UserRole.SUPERVISOR]: 'Supervisor',
  [UserRole.EMPLOYEE]: 'Empleado',
  [UserRole.VIEWER]: 'Visualizador',
};
