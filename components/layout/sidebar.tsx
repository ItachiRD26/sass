'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  FileText,
  Users,
  Settings,
  BarChart3,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/db/paths';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: ROUTES.DASHBOARD },
  { icon: ShoppingCart, label: 'POS', href: ROUTES.POS },
  { icon: Package, label: 'Productos', href: ROUTES.PRODUCTS },
  { icon: BarChart3, label: 'Inventario', href: ROUTES.INVENTORY },
  { icon: FileText, label: 'Cotizaciones', href: ROUTES.QUOTES },
  { icon: Users, label: 'Usuarios', href: ROUTES.USERS },
  { icon: Settings, label: 'Configuración', href: ROUTES.SETTINGS },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-primary text-text-inverse"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-30 h-screen w-64 bg-surface border-r border-border transition-transform lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-8 border-b border-border">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-text-inverse font-bold">
            BP
          </div>
          <span className="font-bold text-text-primary">BusinessPro</span>
        </div>

        {/* Menu items */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                      isActive
                        ? 'bg-primary text-text-inverse'
                        : 'text-text-secondary hover:bg-surface-secondary'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-4 py-4">
          <button className="w-full px-4 py-2 bg-surface-secondary text-text-primary rounded-lg hover:bg-border transition-colors text-sm font-medium">
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
