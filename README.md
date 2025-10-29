# Modelo de Landing Page

Una landing page estática, rápida y accesible construída con HTML + Tailwind CSS y JavaScript mínimo.

## Requisitos
- Node.js 18+
- npm

## Instalación
```bash
npm install
```

## Desarrollo
Inicia el servidor local y el watcher de CSS:
```bash
npm run dev
```
- Servidor: http://localhost:5173
- Tailwind compila `src/input.css` → `styles.css` en modo watch.

## Build (CSS minificado)
```bash
npm run build:css
```
Genera `styles.css` minificado listo para producción.

## Estructura
- `index.html`: Estructura principal y contenido.
- `src/input.css`: Punto de entrada de Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`).
- `styles.css`: CSS generado por Tailwind (no editar a mano).
- `tailwind.config.js`: Configuración de Tailwind (`darkMode: 'class'`, `content` para purga).
- `js/main.js`: Toggle de tema, scroll suave y feedback del formulario.
- `.vscode/settings.json`: Preferencias del workspace.

## Dark mode
- Controlado por clase `dark` en `<html>`.
- Se establece lo antes posible con un script inline en `index.html` (evita FOUC) y se persiste desde `js/main.js` usando `localStorage`.

## Deploy en Vercel
1. Crea un repositorio en GitHub y sube el proyecto.
2. En Vercel, "Add New Project" → importa el repo.
3. Ajustes del proyecto:
   - Framework Preset: `Other`.
   - Comando de Build: `npm run build:css` (opcional; puedes commitear `styles.css`).
   - Directorio de salida: `.` (raíz; es un sitio estático).
4. Deploy.

Notas:
- Si haces build en Vercel, asegúrate de commitear `package.json` y `tailwind.config.js` (obvio) y de tener `src/input.css`.
- Alternativa: commit de `styles.css` y desactivar el paso de build (Vercel sirve estáticos).

## Deploy alternativo (Netlify)
- Arrastra la carpeta al dashboard de Netlify o conecta el repo.
- Build command: `npm run build:css`.
- Publish directory: `.`.

## GitHub (comandos útiles)
```bash
git init
git add .
git commit -m "feat: landing base con Tailwind"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

## Formularios
- El formulario usa Formspree: reemplaza `https://formspree.io/f/tu-endpoint` por tu endpoint real.

## Licencia
MIT
