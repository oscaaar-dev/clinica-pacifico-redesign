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

1. Compila con la URL pública, que se usa para la vista previa al compartir:
   ```sh
   SITE_URL=https://demo.tu-dominio.com npm run build
   ```
2. Sube la carpeta `out/`:
   ```sh
   rsync -avz --delete out/ usuario@tu-vps:/var/www/clinica-pacifico/
   ```
3. Solo la primera vez, en el VPS:
   ```sh
   sudo cp nginx.conf /etc/nginx/sites-available/clinica-pacifico
   sudo ln -s /etc/nginx/sites-available/clinica-pacifico /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   sudo certbot --nginx -d demo.tu-dominio.com
   ```

En Windows sin `rsync`, puedes usar `scp -r out/* usuario@tu-vps:/var/www/clinica-pacifico/`.

## Privacidad

El formulario de citas es una demostración: no pide datos personales y no envía ni guarda nada. El sitio tiene `noindex` para que los buscadores no lo confundan con la web oficial.
