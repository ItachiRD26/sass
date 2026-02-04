# Guía de Arquitectura - BusinessPro SAAS

## Estructura General

```
app/                          # Next.js App Router
├── auth/                      # Páginas de autenticación
├── dashboard/                 # Dashboard principal y módulos
├── admin/                     # Panel de administración
├── api/                       # Rutas API
└── layout.tsx & globals.css  # Layout y estilos

components/                   # Componentes React reutilizables
├── auth/                      # Componentes de autenticación
├── ui/                        # Componentes base (Button, Input, etc)
├── layout/                    # Componentes de layout (Sidebar, Topbar)
├── dashboard/                 # Componentes del dashboard
├── pos/                       # Componentes del POS
├── forms/                     # Formularios especializados
└── common/                    # Componentes comunes

lib/                          # Utilidades y lógica compartida
├── auth/                      # Sistema de autenticación y roles
├── db/                        # Funciones de base de datos
├── hooks/                     # Hooks personalizados
└── firebase/                  # Configuración de Firebase

public/                       # Archivos estáticos
```

## Flujo de Autenticación

1. **Login/Register** → `auth/login` o `auth/register`
2. **Firebase Auth** → Validación con Firebase
3. **AuthContext** → Almacena estado global del usuario
4. **useAuth Hook** → Acceso a datos del usuario en componentes
5. **ProtectedRoute** → Protege rutas según roles/permisos

## Sistema de Roles y Permisos

### Roles Disponibles
- **admin**: Acceso total al sistema
- **manager**: Gestión de operaciones
- **supervisor**: Supervisión de operaciones
- **employee**: Operaciones básicas
- **viewer**: Solo lectura

### Permisos por Rol
Se definen en `lib/auth/permissions.ts` - cada rol tiene permisos específicos para:
- Crear/Editar/Eliminar productos
- Crear/Ver/Editar ventas
- Gestionar usuarios
- Ver reportes
- Acceder a configuración

## Gestión de Estado

### Global State (AuthContext)
```tsx
const { user, loading, login, logout } = useAuth();
```

### Local State (Hooks)
- `useCart` - Carrito de compras para POS
- `usePermissions` - Validación de permisos
- `useRoleHierarchy` - Comparación de roles

## Base de Datos (Firestore)

### Estructura de Colecciones

```
firestore/
├── users/
│   └── {userId}
│       ├── email: string
│       ├── name: string
│       ├── role: string
│       ├── company: string
│       └── createdAt: timestamp
│
├── companies/
│   └── {companyId}
│       ├── products/
│       ├── sales/
│       ├── quotes/
│       ├── inventory_movements/
│       └── users/
```

## API Routes

### Patrón de Rutas

```
/api/products          GET (listar), POST (crear), PUT (actualizar), DELETE (eliminar)
/api/sales             GET (listar), POST (crear), PUT (actualizar)
/api/quotes            GET (listar), POST (crear), PUT (actualizar)
/api/paypal/token      POST (obtener token de PayPal)
```

## Componentes Clave

### UI Base
- `Button` - Botones con variantes (primary, secondary, danger, ghost)
- `Input` - Inputs con labels, errores y helper text
- `Card` - Contenedores de contenido
- `Badge` - Etiquetas con variantes
- `Table` - Tablas organizadas

### Layout
- `Sidebar` - Navegación lateral
- `Topbar` - Barra superior
- `DashboardShell` - Envoltorio de dashboard

### Dashboard
- `StatCard` - Tarjetas de estadísticas
- `ChartPreview` - Vista previa de gráficos
- `RecentActivity` - Actividad reciente

### POS
- `Cart` - Carrito de compras
- `ProductSelector` - Selector de productos
- `PaymentMethodSelector` - Métodos de pago

### Formularios
- `ProductForm` - Formulario de productos
- `QuoteForm` - Formulario de cotizaciones

## Seguridad

### Autenticación
- Firebase Authentication (Email/Password)
- JWT para sesiones
- HTTP-only cookies para tokens

### Autorización
- Role-Based Access Control (RBAC)
- Permission-based checks
- Route protection con ProtectedRoute

### Validación
- Client-side con React
- Server-side en rutas API
- Tipado con TypeScript

## Styling

### Sistema de Diseño
- Colores: Tokens CSS en `globals.css`
- Tipografía: Geist Sans + Geist Mono
- Utilidades: Tailwind CSS v4
- Componentes: shadcn/ui patterns

### Variables de Color
```css
--primary: #2563eb
--success: #10b981
--warning: #f59e0b
--danger: #ef4444
```

## Enviroment Variables

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID

PAYPAL_CLIENT_ID
PAYPAL_CLIENT_SECRET
PAYPAL_MODE (sandbox|live)

NEXT_PUBLIC_BASE_URL
```

## Performance

### Optimizaciones
1. **Componentes**: Memoización con `React.memo`
2. **Data Fetching**: SWR para caché y revalidación
3. **Imágenes**: Next.js Image con optimización
4. **Code Splitting**: Rutas dinámicas

### Debugging
- `console.log("[v0] ...")` para tracing
- Devtools de Firebase
- React DevTools

## Testing

### Estructura Recomendada
```
__tests__/
├── unit/
│   ├── auth/
│   └── utils/
└── integration/
    ├── api/
    └── components/
```

## Deployment

### Vercel
1. Conectar repositorio GitHub
2. Configurar env vars
3. Deploy automático en push

### Firebase
1. Crear proyecto en Firebase Console
2. Habilitar Firestore y Auth
3. Configurar Storage para archivos

## Troubleshooting

### Errores Comunes
- `Firebase not initialized` → Revisar config en `lib/firebase/client.ts`
- `Permission denied` → Verificar roles y permisos
- `Product not found` → Validar ID de compañía

### Logs Útiles
```typescript
console.log("[v0] User role:", user?.role);
console.log("[v0] Has permission:", hasPermission('create_product'));
console.log("[v0] Cart total:", cart.total);
```
