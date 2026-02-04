'use client';

import { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const products = [
    {
      id: '1',
      name: 'Laptop Dell XPS',
      sku: 'DELL-XPS-001',
      price: 1200,
      cost: 800,
      quantity: 15,
      category: 'Electrónica',
      status: 'active',
    },
    {
      id: '2',
      name: 'Mouse Logitech',
      sku: 'LOG-MOUSE-001',
      price: 45,
      cost: 20,
      quantity: 120,
      category: 'Accesorios',
      status: 'active',
    },
    {
      id: '3',
      name: 'Teclado Mecánico',
      sku: 'KEY-MECH-001',
      price: 150,
      cost: 70,
      quantity: 3,
      category: 'Accesorios',
      status: 'warning',
    },
  ];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Productos</h1>
          <p className="text-text-secondary">Gestiona tu catálogo de productos</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Nuevo Producto
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <Input
              placeholder="Buscar por nombre o SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="h-4 w-4" />}
            />
          </div>
        </div>
      </Card>

      {/* Products Table */}
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>SKU</TableHeader>
              <TableHeader>Categoría</TableHeader>
              <TableHeader className="text-right">Precio</TableHeader>
              <TableHeader className="text-right">Stock</TableHeader>
              <TableHeader>Estado</TableHeader>
              <TableHeader className="text-right">Acciones</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="text-text-secondary">{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right font-medium">
                  {formatCurrency(product.price)}
                </TableCell>
                <TableCell className="text-right">
                  {product.quantity > 0 ? (
                    <span className="font-medium">{product.quantity}</span>
                  ) : (
                    <span className="text-danger font-medium">Agotado</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      product.quantity > 10
                        ? 'success'
                        : product.quantity > 0
                          ? 'warning'
                          : 'danger'
                    }
                  >
                    {product.quantity > 10 ? 'Stock OK' : product.quantity > 0 ? 'Bajo' : 'Agotado'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-surface rounded-lg transition-colors">
                      <Edit className="h-4 w-4 text-text-secondary" />
                    </button>
                    <button className="p-2 hover:bg-surface rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4 text-danger" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <Card className="text-center py-12">
          <p className="text-text-secondary">No se encontraron productos</p>
        </Card>
      )}
    </div>
  );
}
