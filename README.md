# BusinessPro - Sistema de Gestión Empresarial SAAS

Una plataforma completa para pequeñas y medianas empresas diseñada especialmente para la República Dominicana.

## 🚀 Características

- **Sistema POS**: Punto de venta digital moderno y rápido
- **Gestión de Productos**: Catálogo completo con categorías y control de stock
- **Inventario**: Control en tiempo real de tus existencias
- **Cotizaciones**: Genera presupuestos profesionales
- **Gestión de Usuarios**: Control de roles y permisos
- **Dashboard Intuitivo**: Resumen visual de tu negocio
- **Autenticación Segura**: Con Firebase
- **Pagos**: Integración con PayPal

## 📋 Requisitos Previos

- Node.js 18+
- npm o pnpm
- Cuenta en Firebase
- Cuenta en PayPal (Sandbox para desarrollo)

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/ItachiRD26/sass.git
cd sass
```

2. **Instalar dependencias**
```bash
npm install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Edita `.env.local` y añade tus credenciales de Firebase y PayPal.

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
├── app/
│   ├── auth/              # Páginas de autenticación
│   ├── dashboard/         # Páginas del dashboard
│   ├── admin/             # Panel de administración
│   ├── api/               # Rutas API
│   ├── globals.css        # Estilos globales
│   └── layout.tsx         # Layout principal
├── components/
│   ├── auth/              # Componentes de autenticación
│   ├── ui/                # Componentes UI reutilizables
│   ├── layout/            # Componentes de layout
│   └── pos/               # Componentes del POS
├── lib/
│   ├── auth/              # Lógica de autenticación y roles
│   ├── db/                # Funciones de base de datos
│   └── firebase/          # Configuración de Firebase
└── public/                # Archivos estáticos
```

## 🎨 Sistema de Diseño

### Colores
- **Primario**: #2563eb (Azul)
- **Éxito**: #10b981 (Verde)
- **Advertencia**: #f59e0b (Naranja)
- **Peligro**: #ef4444 (Rojo)

### Tipografía
- **Font Sans**: Geist
- **Font Mono**: Geist Mono

### Componentes UI
- Button
- Input
- Card
- Badge
- Table
- Modal
- Sidebar
- Topbar

## 🔐 Roles y Permisos

### Roles Disponibles
1. **Administrador**: Acceso total
2. **Gerente**: Acceso completo a operaciones
3. **Supervisor**: Control de operaciones
4. **Empleado**: Operaciones básicas
5. **Visualizador**: Solo lectura

## 📱 Módulos Principales

### Dashboard
- Resumen de ventas
- Actividad reciente
- Acciones rápidas
- Estadísticas clave

### Productos
- CRUD completo
- Búsqueda y filtros
- Control de stock
- Categorización

### Inventario
- Movimientos de stock
- Alertas de bajo stock
- Historial de cambios

### POS
- Carrito de compras
- Múltiples métodos de pago
- Histórico de transacciones
- Recibos y reportes

### Cotizaciones
- Generación profesional
- Seguimiento de estado
- Conversión a ventas
- Expiración automática

### Usuarios
- Gestión de empleados
- Asignación de roles
- Control de permisos
- Auditoría de actividades

## 🔧 Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilita **Authentication** (Email/Password)
3. Crea una base de datos **Firestore**
4. Configura **Storage** para archivos
5. Copia tus credenciales a `.env.local`

## 💳 Integración PayPal

1. Crea una aplicación en [PayPal Developer](https://developer.paypal.com)
2. Obtén tu `Client ID` y `Secret`
3. Configura los planes de suscripción
4. Añade las credenciales a `.env.local`

## 📊 Base de Datos (Firestore)

### Colecciones Principales
- `users` - Usuarios del sistema
- `companies` - Empresas/tenants
- `products` - Catálogo de productos
- `sales` - Transacciones de ventas
- `quotes` - Cotizaciones
- `inventory_movements` - Movimientos de stock
- `activity_logs` - Auditoría

## 🚀 Deployment

### Con Vercel
```bash
npm run build
vercel deploy
```

### Configurar variables en Vercel
1. Ve a **Settings → Environment Variables**
2. Añade todas las variables de `.env.example`
3. Redeploy

## 📚 Documentación Adicional

- [Next.js Docs](https://nextjs.org/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Hecho con ❤️ para pequeñas y medianas empresas dominicanas**
