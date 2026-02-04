'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface QuoteItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

interface QuoteFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

export function QuoteForm({ initialData, onSubmit, isLoading }: QuoteFormProps) {
  const [items, setItems] = useState<QuoteItem[]>(initialData?.items || []);
  const [formData, setFormData] = useState(initialData || {
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
    validDays: 30
  });

  const addItem = () => {
    setItems([...items, {
      id: Math.random().toString(),
      description: '',
      quantity: 1,
      price: 0
    }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: string, value: any) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'validDays' ? parseInt(value) : value
    }));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      items,
      subtotal,
      tax,
      total,
      expiresAt: new Date(Date.now() + formData.validDays * 24 * 60 * 60 * 1000)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Información del Cliente */}
      <Card className="p-4">
        <h3 className="font-semibold text-text-primary mb-4">Información del Cliente</h3>
        <div className="space-y-3">
          <Input
            label="Nombre del Cliente"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Email"
              name="clientEmail"
              type="email"
              value={formData.clientEmail}
              onChange={handleChange}
              placeholder="cliente@example.com"
            />
            <Input
              label="Teléfono"
              name="clientPhone"
              value={formData.clientPhone}
              onChange={handleChange}
              placeholder="+1-809-XXXXXXX"
            />
          </div>
        </div>
      </Card>

      {/* Items */}
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-text-primary">Items de la Cotización</h3>
          <Button type="button" onClick={addItem} size="sm">
            <Plus className="h-4 w-4 mr-1" /> Agregar Item
          </Button>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 items-start">
              <input
                placeholder="Descripción"
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                className="col-span-5 px-3 py-2 border border-border rounded-lg text-sm"
              />
              <input
                type="number"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                min="1"
                className="col-span-2 px-3 py-2 border border-border rounded-lg text-sm"
              />
              <input
                type="number"
                placeholder="Precio"
                value={item.price}
                onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                min="0"
                step="0.01"
                className="col-span-3 px-3 py-2 border border-border rounded-lg text-sm"
              />
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="p-2 hover:bg-danger/10 rounded text-danger"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-text-tertiary text-sm py-4">
            Sin items. Haz clic en "Agregar Item" para comenzar.
          </p>
        )}
      </Card>

      {/* Totales */}
      {items.length > 0 && (
        <Card className="p-4 bg-surface">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-text-secondary">Subtotal:</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">ITBIS (18%):</span>
              <span className="font-medium">{formatCurrency(tax)}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2 font-bold text-lg">
              <span>Total:</span>
              <span className="text-primary">{formatCurrency(total)}</span>
            </div>
          </div>
        </Card>
      )}

      {/* Configuración */}
      <Card className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Válida por (días)"
            name="validDays"
            type="number"
            value={formData.validDays}
            onChange={handleChange}
            min="1"
          />
        </div>
      </Card>

      {/* Notas */}
      <div>
        <label className="text-sm font-medium text-text-primary mb-2 block">Notas</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Términos y condiciones, notas adicionales..."
          className="w-full px-3 py-2 border border-border rounded-lg text-sm"
          rows={3}
        />
      </div>

      <Button type="submit" disabled={isLoading || items.length === 0} className="w-full">
        {isLoading ? 'Guardando...' : 'Guardar Cotización'}
      </Button>
    </form>
  );
}
