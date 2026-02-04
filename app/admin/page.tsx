'use client';

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Panel de Administración</h1>
        <p className="text-text-secondary">Gestiona las empresas y usuarios del sistema</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Empresas Activas</p>
          <p className="text-2xl font-bold text-text-primary">24</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Usuarios Totales</p>
          <p className="text-2xl font-bold text-text-primary">156</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Ingresos Mensuales</p>
          <p className="text-2xl font-bold text-success">RD$ 45,200</p>
        </div>
      </div>

      <div className="p-6 bg-surface border border-border rounded-lg">
        <h2 className="font-semibold text-text-primary mb-4">Gestión de Empresas</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2">Empresa</th>
              <th className="text-left py-2">Usuarios</th>
              <th className="text-left py-2">Plan</th>
              <th className="text-left py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border hover:bg-surface-secondary">
              <td className="py-3">ABC Comercial</td>
              <td>5</td>
              <td>Profesional</td>
              <td><span className="inline-block px-2 py-1 bg-success/20 text-success rounded text-xs">Activa</span></td>
            </tr>
            <tr className="border-b border-border hover:bg-surface-secondary">
              <td className="py-3">XYZ Distribuidora</td>
              <td>12</td>
              <td>Enterprise</td>
              <td><span className="inline-block px-2 py-1 bg-success/20 text-success rounded text-xs">Activa</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
