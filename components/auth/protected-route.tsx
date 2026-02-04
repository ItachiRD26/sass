'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/lib/auth/use-auth';
import { usePermissions } from '@/lib/hooks/use-permissions';
import { Loader } from '@/components/ui/loader';
import { RoleType } from '@/lib/auth/roles';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRoles?: RoleType[];
  requiredPermissions?: string[];
  fallback?: ReactNode;
}

export function ProtectedRoute({
  children,
  requiredRoles,
  requiredPermissions,
  fallback
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const { hasPermission, hasRole } = usePermissions(user?.role || 'viewer');

  if (loading) {
    return fallback || <Loader />;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Acceso Denegado</h1>
          <p className="text-text-secondary">Debes iniciar sesión para continuar</p>
        </div>
      </div>
    );
  }

  // Verificar roles
  if (requiredRoles && requiredRoles.length > 0) {
    if (!hasRole(requiredRoles)) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-2">Permiso Insuficiente</h1>
            <p className="text-text-secondary">No tienes acceso a este recurso</p>
          </div>
        </div>
      );
    }
  }

  // Verificar permisos
  if (requiredPermissions && requiredPermissions.length > 0) {
    const hasAllPermissions = requiredPermissions.every(permission => hasPermission(permission));
    if (!hasAllPermissions) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-2">Permiso Insuficiente</h1>
            <p className="text-text-secondary">No tienes los permisos necesarios</p>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
}
