'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

export function StatCard({ title, value, change, icon, color = 'primary' }: StatCardProps) {
  const colors = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    danger: 'bg-danger/10 text-danger',
  };

  const isPositive = change && change > 0;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-text-secondary mb-2">{title}</p>
          <p className="text-2xl font-bold text-text-primary mb-2">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-danger" />
              )}
              <span className={isPositive ? 'text-success' : 'text-danger'}>
                {Math.abs(change)}%
              </span>
              <span className="text-xs text-text-tertiary">vs. mes anterior</span>
            </div>
          )}
        </div>
        {icon && <div className={`p-3 rounded-lg ${colors[color]}`}>{icon}</div>}
      </div>
    </Card>
  );
}

interface ChartPreviewProps {
  title: string;
  data: Array<{ label: string; value: number }>;
}

export function ChartPreview({ title, data }: ChartPreviewProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <Card className="p-6">
      <h3 className="font-semibold text-text-primary mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-text-secondary">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

interface RecentActivityProps {
  items: Array<{
    id: string;
    type: 'sale' | 'quote' | 'user' | 'product';
    title: string;
    description: string;
    timestamp: Date;
  }>;
}

export function RecentActivity({ items }: RecentActivityProps) {
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      sale: 'bg-success/10 text-success',
      quote: 'bg-primary/10 text-primary',
      user: 'bg-info/10 text-info',
      product: 'bg-warning/10 text-warning',
    };
    return colors[type] || 'bg-surface';
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000);

    if (minutes < 60) return `hace ${minutes}m`;
    if (hours < 24) return `hace ${hours}h`;
    return new Date(date).toLocaleDateString('es-DO');
  };

  return (
    <Card className="p-6">
      <h3 className="font-semibold text-text-primary mb-4">Actividad Reciente</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
              <div className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">{item.title}</p>
              <p className="text-xs text-text-secondary truncate">{item.description}</p>
              <p className="text-xs text-text-tertiary mt-1">{formatTime(item.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
