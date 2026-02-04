'use client';

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/hooks/use-cart';
import { formatCurrency } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category?: string;
  image?: string;
}

interface ProductSelectorProps {
  products: Product[];
  onProductSelect?: (product: Product) => void;
}

export function ProductSelector({ products, onProductSelect }: ProductSelectorProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addItem } = useCart();

  const categories = ['all', ...new Set(products.map(p => p.category).filter(Boolean))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory && product.stock > 0;
  });

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-tertiary" />
          <Input
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-surface hover:bg-surface-secondary text-text-primary'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-border-light rounded-lg p-2 hover:border-primary transition-colors cursor-pointer group"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-20 object-cover rounded mb-2"
              />
            )}
            <h4 className="font-medium text-sm text-text-primary line-clamp-2 mb-1">
              {product.name}
            </h4>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-primary">{formatCurrency(product.price)}</span>
              <span className="text-xs text-text-secondary">{product.stock} stock</span>
            </div>
            <Button
              size="sm"
              onClick={() => handleAddToCart(product)}
              className="w-full"
            >
              <Plus className="h-3 w-3 mr-1" /> Agregar
            </Button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-text-secondary">No hay productos disponibles</p>
        </div>
      )}
    </div>
  );
}
