# Clínica Pacífico — Prototipo de rediseño (no oficial)

Propuesta independiente de rediseño web para una clínica de Chiclayo. **No está afiliada a la clínica.** Todos los nombres de médicos, teléfonos, direcciones y testimonios son datos de ejemplo.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Export estático (`output: "export"`) servido con nginx en un VPS propio, sin Node en producción
- Íconos: lucide-react · Fuentes: Newsreader, Geist y Geist Mono (autoalojadas por `next/font`)

## Estructura

```
src/
  app/            layout (metadata, fuentes), page (orden de secciones), globals.css
  components/
    Sections.tsx  secciones estáticas (Server Components)
    Header.tsx    navegación con menú móvil (cliente)
    Dialogs.tsx   diálogos de cita, especialidad y privacidad + contexto (cliente)
    SpecialtyCard.tsx, Icons.tsx
  data/clinica.ts todo el contenido editable en un solo archivo
deploy/nginx.conf configuración del servidor
```

Para cambiar textos, médicos, servicios o sedes solo hay que editar `src/data/clinica.ts`.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # genera out/
```

## Despliegue en el VPS

Demo publicada en https://clinica.169.58.110.225.sslip.io, con HTTPS de Let's Encrypt que se renueva solo. Es un sitio independiente en nginx, separado de los demás sitios del VPS. [sslip.io](https://sslip.io) es un DNS gratuito que apunta el subdominio a la IP; cuando haya un dominio propio, solo hay que cambiar `server_name` y `SITE_URL`.

Para publicar una actualización, desde Windows:

```powershell
powershell -ExecutionPolicy Bypass -File .\deploy\deploy.ps1
```

El script compila, sube `out/` empaquetado, reemplaza la versión anterior y ajusta los permisos (carpetas 755 y archivos 644, para que nginx pueda leerlos).

Configuración inicial (ya hecha):

```sh
cp nginx.conf /etc/nginx/sites-available/clinica-pacifico
ln -s /etc/nginx/sites-available/clinica-pacifico /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d clinica.169.58.110.225.sslip.io --redirect
```

## Privacidad

El formulario de citas es una demostración: no pide datos personales y no envía ni guarda nada. El sitio tiene `noindex` para que los buscadores no lo confundan con la web oficial.
