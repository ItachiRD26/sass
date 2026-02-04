import React, { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem, useCart } from '@/lib/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatCurrency } from '@/lib/utils';

interface CartProps {
  onCheckout?: () => void;
}

export function Cart({ onCheckout }: CartProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% ITBIS en RD
  const finalTotal = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <p className="text-text-secondary mb-2">Carrito vacío</p>
        <p className="text-sm text-text-tertiary">Agrega productos para comenzar</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-2 p-3 border border-border-light rounded-lg"
          >
            <div className="flex-1">
              <h4 className="font-medium text-text-primary text-sm">{item.name}</h4>
              <p className="text-xs text-text-secondary">{formatCurrency(item.price)} c/u</p>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 hover:bg-surface rounded transition-colors"
              >
                <Minus className="h-3 w-3" />
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                className="w-8 text-center text-sm border border-border rounded"
              />
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 hover:bg-surface rounded transition-colors"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>

            <div className="text-right w-16">
              <p className="font-medium text-sm">{formatCurrency(item.price * item.quantity)}</p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="p-1 hover:bg-danger/10 rounded transition-colors text-danger"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-border-light pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Subtotal:</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">ITBIS (18%):</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-border-light">
          <span>Total:</span>
          <span>{formatCurrency(finalTotal)}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={clearCart}
          className="flex-1"
        >
          Limpiar
        </Button>
        <Button
          onClick={onCheckout}
          className="flex-1"
        >
          Pagar
        </Button>
      </div>
    </div>
  );
}
