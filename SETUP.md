# Guía de Configuración Inicial - BusinessPro

## Paso 1: Preparación del Proyecto

### Clonar y Instalar
```bash
git clone https://github.com/ItachiRD26/sass.git
cd sass
npm install
```

## Paso 2: Configurar Firebase

### 2.1 Crear Proyecto en Firebase
1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Haz clic en "Crear proyecto"
3. Nombre: "BusinessPro"
4. Desactiva Google Analytics (opcional)
5. Espera a que se complete

### 2.2 Habilitar Authentication
1. En el sidebar, ve a **Authentication** (o **Build → Authentication**)
2. Haz clic en **Comenzar**
3. Selecciona **Email/Password**
4. Habilita y guarda
5. (Opcional) Habilita **Google Sign-in**

### 2.3 Crear Firestore Database
1. Ve a **Firestore Database** (o **Build → Firestore**)
2. Haz clic en **Crear base de datos**
3. Ubicación: Próxima a tus usuarios
4. Modo seguro (inicialmente)
5. Haz clic en **Crear**

### 2.4 Obtener Credenciales
1. Ve a **Configuración del proyecto** (icono de engranaje)
2. Selecciona **Apps**
3. Haz clic en **Web** (si no existe)
4. Copia las credenciales
5. Nota: Verás algo como:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-bucket.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Paso 3: Configurar Variables de Entorno

### 3.1 Crear archivo `.env.local`
```bash
cp .env.example .env.local
```

### 3.2 Llenar credenciales de Firebase
Edita `.env.local` y añade:
```
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id

# Base URL (desarrollo)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Paso 4: Configurar Firestore Security Rules (Opcional)

### 4.1 Modo de Desarrollo (NO usar en producción)
```bash
match /databases/{database}/documents {
  match /{document=**} {
    allow read, write: if true;
  }
}
```

### 4.2 Modo Seguro (Recomendado)
```bash
match /databases/{database}/documents {
  match /users/{userId} {
    allow read, write: if request.auth.uid == userId;
  }
  
  match /companies/{companyId}/products/{document=**} {
    allow read: if request.auth.uid != null;
    allow create, update, delete: if hasRole(companyId, 'admin') || hasRole(companyId, 'manager');
  }
  
  match /companies/{companyId}/sales/{document=**} {
    allow read, create: if request.auth.uid != null;
    allow update, delete: if hasRole(companyId, 'admin');
  }
}

function hasRole(companyId, role) {
  return get(/databases/$(database)/documents/companies/$(companyId)/users/$(request.auth.uid)).data.role == role;
}
```

## Paso 5: Configurar PayPal (Opcional)

### 5.1 Crear Cuenta en PayPal
1. Ve a [PayPal Developer](https://developer.paypal.com)
2. Crea una cuenta o inicia sesión
3. Ve a **Dashboard**

### 5.2 Crear una App Sandbox
1. Ve a **Apps & Credentials**
2. Asegúrate de estar en **Sandbox**
3. Haz clic en **Create App**
4. Tipo: **Merchant**
5. Nombre: "BusinessPro"
6. Haz clic en **Create**

### 5.3 Obtener Credenciales
1. Selecciona tu app creada
2. Bajo **Sandbox**, verás:
   - **Client ID**
   - **Secret**
3. Copia ambas valores

### 5.4 Añadir a Variables de Entorno
```
PAYPAL_CLIENT_ID=tu_client_id
PAYPAL_CLIENT_SECRET=tu_client_secret
PAYPAL_MODE=sandbox
```

## Paso 6: Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Paso 7: Crear Primera Cuenta

### 7.1 Registrar Admin
1. Ve a [http://localhost:3000/auth/register](http://localhost:3000/auth/register)
2. Completa el formulario
3. Haz clic en "Registrarse"

### 7.2 Verificar en Firebase
1. Ve a Firebase Console → Authentication
2. Deberías ver tu cuenta creada
3. Nota el **UID** (lo necesitarás)

### 7.3 Crear Usuario Admin en Firestore
1. Ve a Firestore Console
2. Crea una colección llamada **users**
3. Crea un documento con ID = tu UID
4. Añade estos campos:
   ```
   email: "tu@email.com" (string)
   name: "Tu Nombre" (string)
   role: "admin" (string)
   company: "empresa-001" (string)
   createdAt: Fecha actual (timestamp)
   ```

### 7.4 Crear Empresa
1. Crea una colección **companies**
2. Documento con ID = "empresa-001"
3. Campos:
   ```
   name: "Mi Empresa" (string)
   owner: "tu_uid" (string)
   plan: "premium" (string)
   createdAt: Fecha actual (timestamp)
   ```

## Paso 8: Crear Datos de Prueba

### Crear Productos
1. En dashboard, ve a **Productos**
2. Haz clic en **Nuevo Producto**
3. Completa el formulario
4. Guarda

### Crear Ventas
1. Ve a **POS**
2. Busca productos
3. Agrega al carrito
4. Selecciona método de pago
5. Completa

## Troubleshooting

### "Firebase not initialized"
- Verifica que `.env.local` está configurado
- Reinicia el servidor: `Ctrl+C` y `npm run dev`

### "Permission denied" en Firestore
- Revisa las Security Rules
- Asegúrate de tener el UID correcto
- Verifica el campo `role` en el documento del usuario

### "Product not found"
- Verifica que la `companyId` es correcta
- Confirma que el producto existe en Firestore

## Próximos Pasos

1. Personaliza colores en `app/globals.css`
2. Configura tus categorías de productos
3. Crea planes de suscripción en PayPal
4. Invita usuarios a tu empresa
5. Configura impuestos y cálculos

## Soporte

- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [PayPal Developer Docs](https://developer.paypal.com/docs)

---

**¡Tu BusinessPro está listo para usar!** 🎉
