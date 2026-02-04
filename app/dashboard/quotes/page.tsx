'use client';

export default function QuotesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Cotizaciones</h1>
        <p className="text-text-secondary">Gestiona tus presupuestos y cotizaciones</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Total Cotizaciones</p>
          <p className="text-2xl font-bold text-text-primary">28</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Aceptadas</p>
          <p className="text-2xl font-bold text-success">15</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Pendientes</p>
          <p className="text-2xl font-bold text-warning">8</p>
        </div>
      </div>

      <div className="p-6 bg-surface border border-border rounded-lg text-center">
        <p className="text-text-secondary">Módulo en construcción</p>
      </div>
    </div>
  );
}
