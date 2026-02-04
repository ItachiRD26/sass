# API Reference - BusinessPro

## Base URL
```
http://localhost:3000/api
https://your-domain.com/api (en producción)
```

## Authentication
Todas las rutas requieren autenticación con Firebase Token en el header:
```
Authorization: Bearer <firebase-token>
```

## Endpoints

### Productos

#### GET /products
Obtiene lista de productos

**Query Parameters:**
- `companyId` (string, requerido): ID de la empresa
- `id` (string, opcional): ID específico del producto

**Response:**
```json
[
  {
    "id": "prod-001",
    "name": "Laptop Dell",
    "price": 45000,
    "cost": 30000,
    "stock": 10,
    "category": "Electrónica",
    "sku": "DELL-001",
    "createdAt": "2024-02-04T10:30:00Z",
    "updatedAt": "2024-02-04T10:30:00Z"
  }
]
```

#### POST /products
Crea un nuevo producto

**Body:**
```json
{
  "companyId": "company-001",
  "product": {
    "name": "Laptop Dell",
    "price": 45000,
    "cost": 30000,
    "stock": 10,
    "category": "Electrónica",
    "sku": "DELL-001",
    "description": "Laptop potente"
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "prod-001",
  "name": "Laptop Dell",
  "price": 45000
}
```

#### PUT /products
Actualiza un producto existente

**Body:**
```json
{
  "companyId": "company-001",
  "productId": "prod-001",
  "updates": {
    "price": 50000,
    "stock": 8
  }
}
```

**Response:** `200 OK`
```json
{
  "message": "Producto actualizado"
}
```

#### DELETE /products
Elimina un producto

**Query Parameters:**
- `companyId` (string, requerido)
- `id` (string, requerido): ID del producto

**Response:** `200 OK`
```json
{
  "message": "Producto eliminado"
}
```

---

### Ventas

#### GET /sales
Obtiene lista de ventas

**Query Parameters:**
- `companyId` (string, requerido)

**Response:**
```json
[
  {
    "id": "sale-001",
    "items": [
      {
        "productId": "prod-001",
        "quantity": 2,
        "price": 45000
      }
    ],
    "total": 90000,
    "tax": 16200,
    "method": "card",
    "status": "completed",
    "createdAt": "2024-02-04T10:30:00Z"
  }
]
```

#### POST /sales
Crea una nueva venta

**Body:**
```json
{
  "companyId": "company-001",
  "sale": {
    "items": [
      {
        "productId": "prod-001",
        "quantity": 2,
        "price": 45000
      }
    ],
    "total": 90000,
    "tax": 16200,
    "method": "card"
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "sale-001",
  "total": 90000
}
```

---

### Cotizaciones

#### GET /quotes
Obtiene lista de cotizaciones

**Query Parameters:**
- `companyId` (string, requerido)

**Response:**
```json
[
  {
    "id": "quote-001",
    "clientName": "Juan Pérez",
    "items": [...],
    "subtotal": 90000,
    "tax": 16200,
    "total": 106200,
    "status": "pending",
    "expiresAt": "2024-03-06T00:00:00Z",
    "createdAt": "2024-02-04T10:30:00Z"
  }
]
```

#### POST /quotes
Crea una nueva cotización

**Body:**
```json
{
  "companyId": "company-001",
  "quote": {
    "clientName": "Juan Pérez",
    "clientEmail": "juan@example.com",
    "items": [
      {
        "description": "Laptop Dell",
        "quantity": 1,
        "price": 45000
      }
    ],
    "validDays": 30
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "quote-001",
  "total": 52200
}
```

#### PUT /quotes
Actualiza una cotización

**Body:**
```json
{
  "companyId": "company-001",
  "quoteId": "quote-001",
  "updates": {
    "status": "accepted"
  }
}
```

**Response:** `200 OK`

---

### PayPal

#### POST /paypal/token
Obtiene token de acceso de PayPal

**Response:** `200 OK`
```json
{
  "access_token": "A21AAG...",
  "app_id": "YOUR_APP_ID",
  "expires_in": 32400,
  "nonce": "2023-04-04T21:20:49Z"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Datos incompletos"
}
```

### 401 Unauthorized
```json
{
  "error": "No autorizado"
}
```

### 403 Forbidden
```json
{
  "error": "Permiso denegado"
}
```

### 404 Not Found
```json
{
  "error": "Recurso no encontrado"
}
```

### 500 Internal Server Error
```json
{
  "error": "Error al procesar la solicitud"
}
```

---

## Rate Limiting

- 100 requests por minuto por IP
- 1000 requests por hora por usuario

---

## Ejemplos de Uso

### Obtener Productos con cURL
```bash
curl -X GET "http://localhost:3000/api/products?companyId=company-001" \
  -H "Authorization: Bearer YOUR_FIREBASE_TOKEN"
```

### Crear Producto con cURL
```bash
curl -X POST "http://localhost:3000/api/products" \
  -H "Authorization: Bearer YOUR_FIREBASE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "companyId": "company-001",
    "product": {
      "name": "Producto Nuevo",
      "price": 10000,
      "stock": 5
    }
  }'
```

### Con JavaScript/Fetch
```javascript
const token = await getFirebaseToken();

const response = await fetch('/api/products', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    companyId: 'company-001',
    product: {
      name: 'Producto Nuevo',
      price: 10000,
      stock: 5
    }
  })
});

const data = await response.json();
console.log(data);
```

---

## Webhooks

Los webhooks para eventos de PayPal se enviarán a:
```
POST /api/webhooks/paypal
```

### Eventos Soportados
- payment.capture.completed
- payment.capture.refunded
- subscription.created
- subscription.updated

---

## Versionado de API

La versión actual es **v1**. Los cambios mayores serán anunciados con tiempo.

Para cambios futuros, usaremos:
- `/api/v1/...` (versión actual)
- `/api/v2/...` (futuro)

---

## Support

Para preguntas sobre la API:
- Abre una issue en GitHub
- Contacta al equipo de soporte
- Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para más detalles
