#!/bin/bash

# Agregar todos los cambios
git add .

# Crear commit con mensaje descriptivo
git commit -m "feat: Rediseño completo del landing page con diseño profesional y moderno

- Mejorada navegación sticky con backdrop blur
- Hero section con gradientes y elementos visuales
- Sección de características con cards interactivos
- Sección de beneficios con estadísticas
- Pricing section con 3 planes
- FAQ section completa
- Footer mejorado
- Mejor tipografía, espaciado y jerarquía visual
- Diseño responsivo mobile-first"

# Hacer push a la rama actual
git push origin HEAD

echo "✅ Cambios enviados a GitHub exitosamente"
