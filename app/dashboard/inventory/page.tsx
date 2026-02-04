'use client';

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Inventario</h1>
        <p className="text-text-secondary">Control de stock y movimientos de inventario</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Stock Total</p>
          <p className="text-2xl font-bold text-text-primary">1,250 unidades</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Stock Bajo</p>
          <p className="text-2xl font-bold text-warning">23 productos</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Agotados</p>
          <p className="text-2xl font-bold text-danger">5 productos</p>
        </div>
      </div>

      <div className="p-6 bg-surface border border-border rounded-lg text-center">
        <p className="text-text-secondary">Módulo en construcción</p>
      </div>
    </div>
  );
}
