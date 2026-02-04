'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface ProductFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

export function ProductForm({ initialData, onSubmit, isLoading }: ProductFormProps) {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    sku: '',
    category: '',
    description: '',
    price: 0,
    cost: 0,
    stock: 0,
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('price') || name.includes('cost') || name.includes('stock')
        ? parseFloat(value) || 0
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const profit = formData.price - formData.cost;
  const margin = formData.cost > 0 ? ((profit / formData.cost) * 100).toFixed(2) : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Nombre del Producto"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ej: Laptop Dell"
          required
        />
        <Input
          label="SKU"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          placeholder="Ej: DELL-001"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Categoría"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Ej: Electrónica"
        />
        <Input
          label="Stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Precio de Costo"
          name="cost"
          type="number"
          value={formData.cost}
          onChange={handleChange}
          min="0"
          step="0.01"
        />
        <Input
          label="Precio de Venta"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>

      {formData.price > 0 && formData.cost > 0 && (
        <Card className="p-3 bg-success/5 border-success/20">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Ganancia: RD${profit.toFixed(2)}</span>
            <span className="text-success font-medium">Margen: {margin}%</span>
          </div>
        </Card>
      )}

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción del producto..."
          className="w-full px-3 py-2 border border-border rounded-lg text-sm"
          rows={3}
        />
      </div>

      <Input
        label="URL de Imagen"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="https://..."
      />

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Guardando...' : 'Guardar Producto'}
      </Button>
    </form>
  );
}
