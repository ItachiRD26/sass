'use client';

import { Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Topbar() {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Title/Breadcrumb */}
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-text-primary">Dashboard</h1>
        </div>

        {/* Right side - Icons and user menu */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-text-secondary hover:bg-surface rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-danger rounded-full" />
          </button>

          {/* User menu */}
          <div className="flex items-center gap-3 pl-3 border-l border-border">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-text-primary">Usuario</p>
              <p className="text-xs text-text-secondary">admin@example.com</p>
            </div>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-text-inverse hover:bg-primary-dark transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
