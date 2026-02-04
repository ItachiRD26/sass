'use client';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Usuarios</h1>
        <p className="text-text-secondary">Gestiona los usuarios de tu empresa</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Usuarios Activos</p>
          <p className="text-2xl font-bold text-text-primary">12</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Administradores</p>
          <p className="text-2xl font-bold text-primary">2</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Empleados</p>
          <p className="text-2xl font-bold text-text-primary">10</p>
        </div>
      </div>

      <div className="p-6 bg-surface border border-border rounded-lg text-center">
        <p className="text-text-secondary">Módulo en construcción</p>
      </div>
    </div>
  );
}
