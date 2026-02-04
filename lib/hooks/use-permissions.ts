import { useContext } from 'react';
import { ROLES, PERMISSIONS, RoleType } from '@/lib/auth/roles';

interface PermissionCheckProps {
  userRole: RoleType;
  requiredPermission: string;
}

interface RoleCheckProps {
  userRole: RoleType;
  requiredRoles: RoleType[];
}

export function usePermissions(userRole: RoleType) {
  const hasPermission = (permission: string): boolean => {
    const rolePermissions = PERMISSIONS[userRole] || [];
    return rolePermissions.includes(permission);
  };

  const hasRole = (roles: RoleType | RoleType[]): boolean => {
    const roleArray = Array.isArray(roles) ? roles : [roles];
    return roleArray.includes(userRole);
  };

  const can = (permission: string): boolean => hasPermission(permission);

  const canAccess = (requiredRoles: RoleType[]): boolean => {
    return requiredRoles.includes(userRole);
  };

  return {
    hasPermission,
    hasRole,
    can,
    canAccess,
    userRole,
    roleLabel: ROLES[userRole]?.label || 'Unknown'
  };
}

export function useRoleHierarchy(userRole: RoleType) {
  const ROLE_HIERARCHY: Record<RoleType, number> = {
    'admin': 5,
    'manager': 4,
    'supervisor': 3,
    'employee': 2,
    'viewer': 1
  };

  const isHigherThan = (otherRole: RoleType): boolean => {
    return (ROLE_HIERARCHY[userRole] || 0) > (ROLE_HIERARCHY[otherRole] || 0);
  };

  const isLowerThan = (otherRole: RoleType): boolean => {
    return (ROLE_HIERARCHY[userRole] || 0) < (ROLE_HIERARCHY[otherRole] || 0);
  };

  const canManage = (targetRole: RoleType): boolean => {
    return isHigherThan(targetRole);
  };

  return {
    isHigherThan,
    isLowerThan,
    canManage,
    hierarchy: ROLE_HIERARCHY[userRole] || 0
  };
}
