# Índice de Componentes - BusinessPro

## Componentes UI Base (`/components/ui`)

### Button
Botón reutilizable con múltiples variantes y tamaños.

```tsx
import { Button } from '@/components/ui/button';

<Button onClick={handleClick}>Click me</Button>
<Button variant="secondary" size="sm">Small</Button>
<Button disabled>Disabled</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean

### Input
Input con soporte para labels, errores y helper text.

```tsx
import { Input } from '@/components/ui/input';

<Input 
  label="Email"
  placeholder="user@example.com"
  error="Email inválido"
/>
```

**Props:**
- `label`: string
- `error`: string
- `helperText`: string

### Card
Contenedor versátil para agrupar contenido.

```tsx
import { Card } from '@/components/ui/card';

<Card className="p-6">
  <h3>Contenido</h3>
</Card>
```

### Badge
Etiqueta con variantes de color.

```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="success">Completado</Badge>
<Badge variant="warning">Pendiente</Badge>
```

**Variantes:** 'primary' | 'success' | 'warning' | 'danger' | 'info'

### Table
Componentes para crear tablas.

```tsx
import { Table, TableHead, TableRow, TableCell, TableBody } from '@/components/ui/table';

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Nombre</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Juan</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Modal
Diálogo modal para interacciones importantes.

```tsx
import { Modal } from '@/components/ui/modal';

<Modal title="Confirmar" open={isOpen} onClose={handleClose}>
  <p>¿Estás seguro?</p>
</Modal>
```

### Loader
Indicador de carga.

```tsx
import { Loader } from '@/components/ui/loader';

<Loader />
<Loader size="sm" />
```

---

## Componentes de Layout (`/components/layout`)

### Sidebar
Barra de navegación lateral.

```tsx
import { Sidebar } from '@/components/layout/sidebar';

<Sidebar />
```

### Topbar
Barra superior con información del usuario.

```tsx
import { Topbar } from '@/components/layout/topbar';

<Topbar />
```

### DashboardShell
Contenedor para el layout del dashboard.

```tsx
import { DashboardShell } from '@/components/layout/dashboard-shell';

<DashboardShell>
  <Sidebar />
  <main>{children}</main>
</DashboardShell>
```

---

## Componentes de Autenticación (`/components/auth`)

### LoginForm
Formulario de inicio de sesión.

```tsx
import { LoginForm } from '@/components/auth/login-form';

<LoginForm />
```

### RegisterForm
Formulario de registro.

```tsx
import { RegisterForm } from '@/components/auth/register-form';

<RegisterForm />
```

### ProtectedRoute
Protege rutas según roles y permisos.

```tsx
import { ProtectedRoute } from '@/components/auth/protected-route';

<ProtectedRoute requiredRoles={['admin']}>
  <AdminPanel />
</ProtectedRoute>
```

---

## Componentes del Dashboard (`/components/dashboard`)

### StatCard
Tarjeta de estadística con valor y cambio.

```tsx
import { StatCard } from '@/components/dashboard/stat-cards';
import { DollarSign } from 'lucide-react';

<StatCard 
  title="Ventas Hoy"
  value="RD$50,000"
  change={12}
  icon={<DollarSign />}
/>
```

### ChartPreview
Vista previa de gráfico con barras.

```tsx
import { ChartPreview } from '@/components/dashboard/stat-cards';

<ChartPreview 
  title="Ventas por Categoría"
  data={[
    { label: 'Electrónica', value: 150 },
    { label: 'Ropa', value: 120 }
  ]}
/>
```

### RecentActivity
Lista de actividad reciente.

```tsx
import { RecentActivity } from '@/components/dashboard/stat-cards';

<RecentActivity 
  items={[
    {
      id: '1',
      type: 'sale',
      title: 'Nueva venta',
      description: 'Laptop Dell - RD$45,000',
      timestamp: new Date()
    }
  ]}
/>
```

---

## Componentes POS (`/components/pos`)

### Cart
Carrito de compras con totales.

```tsx
import { Cart } from '@/components/pos/cart';

<Cart onCheckout={handleCheckout} />
```

### ProductSelector
Selector de productos con búsqueda y filtros.

```tsx
import { ProductSelector } from '@/components/pos/product-selector';

<ProductSelector 
  products={products}
  onProductSelect={handleSelect}
/>
```

### PaymentMethodSelector
Selector de método de pago.

```tsx
import { PaymentMethodSelector } from '@/components/pos/payment-selector';

<PaymentMethodSelector 
  selected={method}
  onSelect={setMethod}
  total={1000}
/>
```

### PaymentForm
Formulario para confirmar pago.

```tsx
import { PaymentForm } from '@/components/pos/payment-selector';

<PaymentForm 
  method="card"
  total={1000}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

---

## Componentes de Formularios (`/components/forms`)

### ProductForm
Formulario completo para crear/editar productos.

```tsx
import { ProductForm } from '@/components/forms/product-form';

<ProductForm 
  initialData={product}
  onSubmit={handleSubmit}
  isLoading={loading}
/>
```

### QuoteForm
Formulario para crear/editar cotizaciones.

```tsx
import { QuoteForm } from '@/components/forms/quote-form';

<QuoteForm 
  initialData={quote}
  onSubmit={handleSubmit}
  isLoading={loading}
/>
```

---

## Componentes Comunes (`/components/common`)

### ConfirmDialog
Diálogo de confirmación.

```tsx
import { ConfirmDialog } from '@/components/common/confirm-dialog';

<ConfirmDialog 
  title="¿Estás seguro?"
  description="Esta acción no se puede deshacer"
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

### EmptyState
Estado vacío para listas sin contenido.

```tsx
import { EmptyState } from '@/components/common/empty-state';

<EmptyState 
  title="Sin productos"
  description="Crea tu primer producto"
  action={{ label: 'Crear', onClick: handleCreate }}
/>
```

---

## Hooks Personalizados (`/lib/hooks`)

### useAuth
Accede al estado de autenticación global.

```tsx
import { useAuth } from '@/lib/hooks';

const { user, loading, login, logout } = useAuth();
```

### useCart
Gestiona el carrito de compras.

```tsx
import { useCart } from '@/lib/hooks';

const { items, total, addItem, removeItem } = useCart();
```

### usePermissions
Verifica permisos del usuario.

```tsx
import { usePermissions } from '@/lib/hooks';

const { hasPermission, can, hasRole } = usePermissions(user.role);

if (can('create_product')) {
  // Mostrar botón de crear
}
```

### useRoleHierarchy
Compara jerarquía de roles.

```tsx
import { useRoleHierarchy } from '@/lib/hooks';

const { isHigherThan, canManage } = useRoleHierarchy(user.role);
```

---

## Utilidades (`/lib/utils.ts`)

### formatCurrency
Formatea números como moneda.

```tsx
formatCurrency(45000) // "RD$45,000.00"
```

### formatDate
Formatea fechas.

```tsx
formatDate(new Date()) // "4 de febrero de 2024"
```

### formatTime
Formatea hora.

```tsx
formatTime(new Date()) // "10:30"
```

### slugify
Convierte texto a slug.

```tsx
slugify("Mi Producto") // "mi-producto"
```

### generateId
Genera ID único.

```tsx
generateId() // "abc123xyz789"
```

---

## Tipos (`/lib/auth/roles.ts`)

```tsx
type RoleType = 'admin' | 'manager' | 'supervisor' | 'employee' | 'viewer';

interface User {
  id: string;
  email: string;
  name: string;
  role: RoleType;
  company: string;
  createdAt: Date;
}
```

---

## Ejemplos Completos

### Página de Productos Completa
```tsx
'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { Button } from '@/components/ui/button';
import { ProductForm } from '@/components/forms/product-form';
import { Modal } from '@/components/ui/modal';

export function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProtectedRoute requiredRoles={['admin', 'manager']}>
      <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)}>Nuevo Producto</Button>
        <Modal title="Nuevo Producto" open={isOpen} onClose={() => setIsOpen(false)}>
          <ProductForm onSubmit={handleSubmit} />
        </Modal>
      </div>
    </ProtectedRoute>
  );
}
```

---

## Best Practices

1. **Siempre tipifica**: Usa TypeScript para todo
2. **Reutiliza componentes**: No duplices código
3. **Componentes pequeños**: Máximo 200 líneas
4. **Props claras**: Interfaz bien definida
5. **Accesibilidad**: aria-labels y roles
6. **Performance**: React.memo cuando sea necesario
