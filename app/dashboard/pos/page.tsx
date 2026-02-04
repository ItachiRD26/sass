'use client';

export default function POSPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Sistema POS</h1>
        <p className="text-text-secondary">Punto de venta digital</p>
      </div>
      
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 p-6 bg-surface border border-border rounded-lg">
          <h2 className="font-semibold text-text-primary mb-4">Carrito de compras</h2>
          <p className="text-text-secondary text-center py-12">Módulo en construcción</p>
        </div>
        <div className="p-6 bg-surface border border-border rounded-lg">
          <h2 className="font-semibold text-text-primary mb-4">Resumen</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Subtotal</span>
              <span className="text-text-primary">RD$ 0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Descuento</span>
              <span className="text-text-primary">RD$ 0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Impuesto</span>
              <span className="text-text-primary">RD$ 0.00</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between font-bold">
              <span className="text-text-primary">Total</span>
              <span className="text-primary">RD$ 0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
