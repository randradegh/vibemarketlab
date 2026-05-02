# VibeMarket Lab

Landing page para **VibeMarket Lab**, agencia boutique de Vibe Marketing / Vibe Coding orientada a pymes en México.

## Tech stack

- **React** + **Vite**
- **Tailwind CSS** v4
- **Lucide React** (icons)

## Getting started

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
```

## Estructura

```
src/
├── components/     # Componentes React por sección
├── data/           # Copy y datos editables
├── App.jsx         # Componente principal
└── main.jsx        # Entry point
```

## Personalización

### Copy y contenido

Edita `src/data/content.js` para modificar:
- Textos de navegación
- Items de problemas, método, paquetes, beneficios, FAQ
- Señales de credibilidad

### Colores

Edita las variables CSS en `src/index.css`:

```css
--color-primary: #01696f;    /* Teal principal */
--color-bg: #f7f6f2;        /* Fondo */
--color-surface: #f9f8f5;   /* Superficie */
--color-text: #28251d;      /* Texto principal */
--color-text-muted: #7a7974;
--color-accent: #cedcd8;
```

### Formulario

El componente `LeadFormModal.jsx` tiene el UI listo. Para conectar a un endpoint:

1. Busca `handleSubmit` en `src/components/LeadFormModal.jsx`
2. Reemplaza el `setTimeout` con tu llamada fetch

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('TU_ENDPOINT_AQUI', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // ... maneja respuesta
};
```

## Deploy

Build para producción genera la carpeta `dist/`:

```bash
npm run build
```

Sube el contenido de `dist/` a cualquier hosting estático (Vercel, Netlify, Cloudflare Pages, etc.).

## SEO

Meta tags configurados en `index.html`. Edita según necesidades.
