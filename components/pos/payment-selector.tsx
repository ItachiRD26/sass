'use client';

import React from 'react';
import { CreditCard, Banknote, DollarSign, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type PaymentMethod = 'cash' | 'card' | 'transfer' | 'paypal' | 'check';

interface PaymentMethodSelectorProps {
  selected: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
  total: number;
}

const paymentMethods = [
  { id: 'cash', label: 'Efectivo', icon: Banknote },
  { id: 'card', label: 'Tarjeta', icon: CreditCard },
  { id: 'transfer', label: 'Transferencia', icon: DollarSign },
  { id: 'paypal', label: 'PayPal', icon: QrCode },
  { id: 'check', label: 'Cheque', icon: CreditCard },
] as const;

export function PaymentMethodSelector({ selected, onSelect, total }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-text-primary">Método de Pago</h3>
      <div className="grid grid-cols-2 gap-2">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          return (
            <button
              key={method.id}
              onClick={() => onSelect(method.id as PaymentMethod)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                selected === method.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border-light hover:border-primary'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs text-center font-medium">{method.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface PaymentFormProps {
  method: PaymentMethod;
  total: number;
  onConfirm: (data: any) => void;
  onCancel: () => void;
}

export function PaymentForm({ method, total, onConfirm, onCancel }: PaymentFormProps) {
  const [reference, setReference] = React.useState('');

  const handleSubmit = () => {
    onConfirm({ method, reference, amount: total });
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Confirmar Pago</h3>
      
      {method === 'cash' && (
        <input
          type="number"
          placeholder="Monto recibido"
          defaultValue={total}
          className="w-full px-3 py-2 border border-border rounded-lg"
        />
      )}

      {method === 'transfer' && (
        <input
          type="text"
          placeholder="Número de referencia"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg"
        />
      )}

      {method === 'check' && (
        <input
          type="text"
          placeholder="Número de cheque"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg"
        />
      )}

      <div className="flex gap-2">
        <Button variant="secondary" onClick={onCancel} className="flex-1">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} className="flex-1">
          Confirmar Pago
        </Button>
      </div>
    </div>
  );
}
