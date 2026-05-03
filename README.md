# VibeMarket Lab

Landing page para **VibeMarket Lab**, agencia boutique de Vibe Marketing con IA orientada a pymes en México.

## Objetivos

- **Atraer clientes potenciales** (pymes en México) que necesitan presencia digital efectiva
- **Demostrar capacidad creativa** — el sitio mismo es un showcase de lo que podemos hacer por sus clientes
- **Generar leads cualificados** mediante un formulario de diagnóstico gratuito
- **Construir credibilidad** con prueba social, casos de éxito y metodología clara

## Diseño

Este sitio es un ejemplo de lo que somos capaces de hacer: diseño distintivo, personalidad, y ejecución de primer nivel. No es un template más — es un showcase de nuestra capacidad creativa.

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
--color-warm: #da7101;
```

### Formulario

El componente `LeadFormModal.jsx` tiene el UI listo. Para conectar a un endpoint:

1. Busca `handleSubmit` en `src/components/LeadFormModal.jsx`
2. Reemplaza el `setTimeout` con tu llamada fetch

## Deploy

Build para producción genera la carpeta `dist/`:

```bash
npm run build
```

Sube el contenido de `dist/` a cualquier hosting estático (Vercel, Netlify, Cloudflare Pages, etc.).

## SEO

Meta tags configurados en `index.html`. Edita según necesidades.
