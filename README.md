# Personal Driver

Landing page de Personal Driver, una empresa de transporte privado y tours por
el Oriente Antioqueño. La página presenta los destinos, las medidas de
seguridad, el equipo de conductores, la flota de vehículos y un formulario de
cotización que envía la solicitud por WhatsApp.

El proyecto utiliza React, TypeScript y Vite.

## Funcionalidades

- Navegación de una sola página con anclas a cada sección.
- Hero principal con llamada a la acción.
- Destinos turísticos con cotización individual por WhatsApp.
- Información de seguridad y documentación de la empresa.
- Presentación del equipo de conductores.
- Carrusel responsive de vehículos.
- Formulario de cotización con envío a WhatsApp y alternativa por correo.
- Enlaces sociales flotantes en el sitio y en el footer.
- Metadatos SEO, Open Graph y Twitter Card.

## Requisitos

- Node.js 18 o superior.
- npm, incluido con Node.js.

## Desarrollo local

```sh
git clone <this-repository-url>
cd personal-driver
npm install
npm run dev
```

Vite mostrará en la terminal la URL local disponible al iniciar el servidor.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con Vite. |
| `npm run build` | Genera el build de producción. |
| `npm run build:dev` | Genera un build usando el modo de desarrollo. |
| `npm run preview` | Sirve localmente el build generado. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |
| `npm run format` | Formatea los archivos con Prettier. |

## Estructura principal

- `index.html`: documento HTML principal y metadatos SEO.
- `src/main.tsx`: punto de entrada de React.
- `src/routes/index.tsx`: composición de la landing.
- `src/components/tours-sections.tsx`: secciones visuales, formulario y enlaces sociales.
- `src/components/ui/`: componentes reutilizables basados en Radix/shadcn.
- `src/assets/`: assets importados por el bundler.
- `src/lib/`: utilidades de errores y funciones compartidas.
- `src/styles.css`: Tailwind CSS, tokens de color y estilos globales.
- `public/img/`: imágenes estáticas de destinos, vehículos y conductores.

## Puntos de edición habituales

- Contenido de la landing: `src/components/tours-sections.tsx`.
- Estructura de la página, navegación y footer: `src/routes/index.tsx`.
- Títulos y metadatos SEO: `index.html`.
- Colores, tipografías y utilidades globales: `src/styles.css`.
- Imágenes: `public/img/`.
- Número de WhatsApp y redes sociales: `src/components/tours-sections.tsx`.
- Ruta del botón de inicio de sesión: `src/routes/index.tsx`.

Los componentes de `src/components/ui/` son componentes reutilizables basados
en Radix y shadcn. Se pueden reutilizar para nuevas funcionalidades sin
modificar los componentes que la landing no necesita.


