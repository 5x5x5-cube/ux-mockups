# UX Mockups - Monorepo

Este repositorio contiene los mockups y prototipos de la aplicación UX Mockups.

## Estructura del Proyecto

```
ux-mockups-final/
├── web-mockup/          # Aplicación web Angular
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md           # Este archivo
```

## Proyectos Incluidos

### Web Mockup (`web-mockup/`)
Aplicación web desarrollada en Angular que simula la interfaz de usuario de UX Mockups.

**Características:**
- Sistema de autenticación (login/signup)
- Dashboard principal
- Gestión de plantillas de alarmas
- Integraciones externas (GitHub, GitLab, Jira)
- Sistema de notificaciones
- Diseño responsivo

**Tecnologías:**
- Angular 18
- Angular Material
- TypeScript
- SCSS

## Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Configuración del Proyecto Web

```bash
cd web-mockup
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
