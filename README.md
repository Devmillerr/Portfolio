# Miler.OS — Portfolio de Miler Castro

Portfolio profesional construido como un pequeño "sistema operativo para
ingeniería": editorial en el contenido, preciso en la interacción.

🔗 **Demo en vivo:** [portfolio-delta-fawn-41.vercel.app](https://portfolio-delta-fawn-41.vercel.app)

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript estricto
- Tailwind CSS v4 (tokens de diseño en `app/globals.css`)
- Framer Motion
- Radix UI + `cmdk` (command palette) + `class-variance-authority` /
  `tailwind-merge` (primitives en `components/ui`, patrón shadcn/ui)
- TanStack Query (estadísticas en vivo de GitHub en la sección de proyectos)
- Space Grotesk, Instrument Sans y JetBrains Mono, autoalojadas vía
  `@fontsource-variable` (sin dependencia de red a Google Fonts en build).
  Las variantes estáticas (`@fontsource/space-grotesk`,
  `@fontsource/instrument-sans`) se usan solo en `app/opengraph-image.tsx`,
  porque el renderizador de imágenes de Next (`next/og`) no soporta fuentes
  variables.

## Identidad visual

Sistema "Grotesco HUD" + paleta "Plasma Violeta". Tokens de fuente en
`@theme inline` de `app/globals.css`:

| Token            | Fuente                    | Uso                                    |
| ----------------- | -------------------------- | ---------------------------------------- |
| `--font-display`  | Space Grotesk (600, uppercase, tracking amplio) | Titulares H1/H2 de cada sección |
| `--font-sans`     | Instrument Sans (400)      | Cuerpo de texto, UI                     |
| `--font-mono`     | JetBrains Mono              | Eyebrows, datos, stats, command palette |

Colores en `:root`:

| Token             | Valor      | Uso                                  |
| ------------------ | ---------- | ------------------------------------- |
| `--background`     | `#0a0813`  | Fondo base                            |
| `--surface`        | `#150f22`  | Superficies elevadas                  |
| `--foreground`     | `#f3eefb`  | Texto principal                       |
| `--accent`         | `#b266ff`  | Acento — se usa con criterio, no como relleno |
| `--warn`           | `#d9a273`  | Estado "antes" del caso de estudio (cálido, no semáforo) |

Los titulares de cada sección (Hero, Enfoque, Caso de estudio, Trayectoria,
Portafolio, Contacto) usan `font-display` en mayúsculas — ver
`components/hero/Hero.tsx` y los componentes en `components/sections/`.

## Command palette

`Ctrl/Cmd + K` en cualquier parte del sitio abre un buscador de comandos
(`components/command-palette.tsx`) para saltar entre secciones, copiar el
correo, descargar el CV o abrir GitHub/LinkedIn/WhatsApp.

## Otros detalles

- **Pantalla de carga** (`components/layout/LoadingScreen.tsx`): el logo se
  dibuja progresivamente (M → C → acento) en la primera visita de cada
  sesión; respeta `prefers-reduced-motion`.
- **SectionRail** (`components/layout/SectionRail.tsx`): dock de progreso de
  scroll visible en pantallas `xl`.
- **SEO**: `app/robots.ts` y `app/sitemap.ts` (convención de Next.js) y
  `app/opengraph-image.tsx`, que genera la imagen de vista previa para
  redes sociales en tiempo de build con `next/og`, sin depender de un
  archivo estático.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para probar desde otro dispositivo de la misma red:

```bash
npm run dev -- --hostname 0.0.0.0
```

## Validación

```bash
npm run lint
npm run build
```

## CV

El PDF vive en `public/cv-miler-castro.pdf`; el botón de descarga del navbar
y el command palette apuntan a esa ruta.

## Estructura

```text
app/                 layout, metadata, globals.css
components/hero/      Hero + reloj/estado del sistema + stats
components/sections/  Profile, CaseStudy, Experience, Projects, Contact
components/layout/    Navbar, Footer, SectionRail (dock de progreso)
components/projects/  Demo interactivo de DigiProy + estadísticas de GitHub
components/ui/        Primitives reutilizables (button, tooltip, IconLink…)
lib/                  constants, utils, providers, hook de GitHub
```

## Enlaces

- [GitHub](https://github.com/Devmillerr)
- [LinkedIn](https://www.linkedin.com/in/devmillerr/)

## Licencia

Código publicado con fines de referencia y portafolio. El diseño, el
contenido y la marca personal ("Miler.OS") son de Miler Castro — no está
pensado para reutilizarse tal cual en otro proyecto.
