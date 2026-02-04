'use client';

import { Card } from '@/components/ui/card';
import { BarChart3, ShoppingCart, Package, TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function DashboardPage() {
  // Mock data
  const stats = [
    {
      title: 'Ventas Hoy',
      value: formatCurrency(15240),
      icon: TrendingUp,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      title: 'Productos',
      value: '248',
      icon: Package,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Transacciones',
      value: '42',
      icon: ShoppingCart,
      color: 'text-info',
      bgColor: 'bg-info/10',
    },
    {
      title: 'Ingresos Mensuales',
      value: formatCurrency(125500),
      icon: BarChart3,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Bienvenido a BusinessPro</h1>
        <p className="text-text-secondary">Aquí está un resumen de tu negocio hoy</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-text-secondary mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card header={<h3 className="font-semibold text-text-primary">Actividad Reciente</h3>}>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between pb-4 border-b border-border last:border-b-0 last:pb-0">
              <div>
                <p className="font-medium text-text-primary">Venta completada</p>
                <p className="text-sm text-text-secondary">Hace 2 horas</p>
              </div>
              <span className="text-sm font-semibold text-success">+RD$ 1,500.00</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card header={<h3 className="font-semibold text-text-primary">Acciones Rápidas</h3>}>
        <div className="grid gap-3 md:grid-cols-3">
          <button className="p-3 border border-border rounded-lg hover:bg-surface-secondary transition-colors text-center">
            <p className="text-sm text-text-secondary mb-1">Nueva Venta</p>
            <p className="font-semibold text-text-primary">Ir al POS</p>
          </button>
          <button className="p-3 border border-border rounded-lg hover:bg-surface-secondary transition-colors text-center">
            <p className="text-sm text-text-secondary mb-1">Nuevo Producto</p>
            <p className="font-semibold text-text-primary">Crear</p>
          </button>
          <button className="p-3 border border-border rounded-lg hover:bg-surface-secondary transition-colors text-center">
            <p className="text-sm text-text-secondary mb-1">Nueva Cotización</p>
            <p className="font-semibold text-text-primary">Generar</p>
          </button>
        </div>
      </Card>
    </div>
  );
}
