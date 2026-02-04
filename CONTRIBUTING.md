# Guía de Contribución - BusinessPro

## Bienvenido 👋

¡Gracias por tu interés en contribuir a BusinessPro! Esta guía te ayudará a entender cómo colaborar con el proyecto.

## Cómo Contribuir

### Reporte de Bugs
Si encuentras un bug:
1. Verifica que el bug no ha sido reportado antes
2. Describe el bug claramente
3. Incluye pasos para reproducir
4. Incluye screenshots si es relevante
5. Menciona tu entorno (SO, navegador, versión)

### Sugerencias de Mejoras
- Describe claramente la mejora
- Explica el caso de uso
- Lista ejemplos de cómo funcionaría

### Pull Requests
1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/tufeature`
3. Haz commits descriptivos: `git commit -m 'Describe tu cambio'`
4. Push a la rama: `git push origin feature/tufeature`
5. Abre un Pull Request

## Estándares de Código

### TypeScript
- Siempre usa tipos explícitos
- Evita `any` cuando sea posible
- Interfaz clara para props

```typescript
interface MyComponentProps {
  title: string;
  onClick: (id: string) => void;
  disabled?: boolean;
}

export function MyComponent({ title, onClick, disabled }: MyComponentProps) {
  // ...
}
```

### React Components
- Componentes funcionales con hooks
- Props debidamente tipadas
- Uso de componentes reutilizables

```typescript
'use client'; // Especifica si es Client Component

import React from 'react';
import { Button } from '@/components/ui/button';

export function MyFeature() {
  const [state, setState] = React.useState(false);
  return <Button onClick={() => setState(!state)}>Toggle</Button>;
}
```

### Estilos
- Usa Tailwind CSS siempre
- Utiliza variables de color (--primary, --success, etc)
- Sigue el mobile-first approach
- Cuidado con el dark mode

```typescript
<div className="p-4 rounded-lg bg-surface hover:bg-surface-secondary transition-colors dark:bg-slate-800">
  <h3 className="text-lg font-bold text-text-primary">Título</h3>
</div>
```

### Nombres de Variables
```
✓ userId, isLoading, handleClick, formatCurrency
✗ uid, loading, onclick, format
```

### Estructura de Archivos
```
feature/
├── components/
│   ├── index.ts
│   ├── my-component.tsx
│   └── my-other-component.tsx
├── hooks/
│   ├── use-feature.ts
│   └── use-other.ts
├── lib/
│   ├── utils.ts
│   └── constants.ts
└── types.ts
```

## Conventions

### Commit Messages
```
feat: Agregó soporte para múltiples métodos de pago
fix: Corrigió bug en cálculo de impuestos
refactor: Reorganizó estructura de componentes
docs: Actualizó guía de configuración
style: Formateo de código
test: Agregó tests unitarios
```

### Branch Names
```
feature/descripcion-corta
fix/descripcion-del-bug
refactor/descripcion
docs/descripcion
```

### File Names
```
✓ user-profile.tsx, use-auth.ts, auth.types.ts
✗ UserProfile.tsx, useAuth.ts, authTypes.ts
```

## Testing

### Unit Tests
```typescript
describe('formatCurrency', () => {
  it('should format number as currency', () => {
    expect(formatCurrency(1000)).toBe('RD$1,000.00');
  });
});
```

### Component Tests
```typescript
describe('Button', () => {
  it('should render with text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });
});
```

## Performance

### Tips
1. Memoiza componentes costosos con `React.memo`
2. Usa `useCallback` para funciones en event handlers
3. Lazy load componentes grandes
4. Optimiza imágenes

```typescript
const ExpensiveComponent = React.memo(({ data }: Props) => {
  return <div>{data}</div>;
});
```

## Security

### Checklist
- [ ] Validar inputs del usuario
- [ ] Sanitizar strings
- [ ] No hardcodear secretos
- [ ] HTTPS para requests
- [ ] CORS configurado correctamente
- [ ] SQL Injection prevention (use parameterized queries)

## Documentation

### Comentarios en Código
```typescript
// ✓ Explica el porqué, no el qué
// Firebase require timestamps en milisegundos
const timestamp = Date.now();

// ✗ Obvio, no necesita comentario
// Suma 1 a count
const newCount = count + 1;
```

### JSDoc
```typescript
/**
 * Formatea un número como moneda dominicana
 * @param value - Número a formatear
 * @param currency - Código de moneda (default: DOP)
 * @returns Número formateado
 */
export function formatCurrency(value: number, currency = 'DOP'): string {
  // ...
}
```

## Review Process

### El equipo revisará:
1. Funcionalidad correcta
2. Tests incluidos
3. Estándares de código
4. Performance
5. Security
6. Documentation

### Feedback
- Sé respetuoso
- Sugiere mejoras constructivamente
- Explica el porqué de los cambios

## Development Setup

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Buildear para producción
npm run build

# Linting
npm run lint
```

## Área de Enfoque

Necesitamos ayuda en:
- [ ] Optimización de performance
- [ ] Tests adicionales
- [ ] Documentación
- [ ] Traducciones
- [ ] Diseño UI/UX
- [ ] Integraciones de pago
- [ ] Reportes y analytics

## Preguntas?

- Abre una issue en GitHub
- Discute en Discussions
- Contacta al equipo

---

**¡Gracias por contribuir a BusinessPro!** ❤️
