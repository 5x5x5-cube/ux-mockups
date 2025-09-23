# UX Mockups - Aplicación Web

Esta es una aplicación web Angular que sirve como mockup para un sistema de diseño UX, con componentes Material 3 y una interfaz de usuario moderna.

## Características

- **Sistema de Autenticación**: Páginas de login y registro con componentes de formulario Material 3
- **Layout del Dashboard**: Barra de navegación responsiva con barra lateral colapsable
- **Plantillas de Alarmas**: Operaciones CRUD para gestión de plantillas de alarmas
- **Integraciones Externas**: Gestión de integraciones con servicios de terceros (Jira, GitHub, GitLab)
- **Notificaciones**: Sistema de notificaciones impulsado por IA con recomendaciones inteligentes
- **Diseño Responsivo**: Enfoque mobile-first con layouts adaptativos

## Prerrequisitos

Antes de ejecutar esta aplicación, asegúrate de tener instalado lo siguiente:

### Software Requerido

- **Node.js**: Versión 18.x o superior
  - Descargar desde [nodejs.org](https://nodejs.org/)
  - Verificar instalación: `node --version`
- **npm**: Generalmente viene con Node.js
  - Verificar instalación: `npm --version`

### Herramientas Recomendadas

- **Angular CLI**: Para desarrollo y construcción
  - Instalar globalmente: `npm install -g @angular/cli`
- **VS Code**: IDE recomendado con extensiones de Angular

## Instalación

1. **Clonar el repositorio** (si no se ha hecho):
   ```bash
   git clone <repository-url>
   cd ux-mockups-final/web-mockup
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Verificar Angular CLI** (si no está instalado globalmente):
   ```bash
   npx ng version
   ```

## Ejecutar la Aplicación

### Servidor de Desarrollo

Iniciar el servidor de desarrollo:

```bash
npm start
```

O usando Angular CLI:

```bash
ng serve
```

La aplicación estará disponible en:
- **URL**: `http://localhost:4200`
- **Auto-recarga**: La página se recargará automáticamente cuando hagas cambios

### Construcción para Producción

Crear una construcción de producción:

```bash
npm run build
```

O usando Angular CLI:

```bash
ng build
```

Los artefactos de construcción se almacenarán en el directorio `dist/`.

### Ejecutar Pruebas

Ejecutar pruebas unitarias:

```bash
npm test
```

O usando Angular CLI:

```bash
ng test
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── authentication/          # Componentes de login y registro
│   ├── alarm-templates/         # Gestión de plantillas de alarmas
│   ├── external-integrations/   # Integraciones de terceros
│   ├── notifications/           # Sistema de notificaciones
│   ├── layout/                  # Componentes del layout principal
│   └── app.routes.ts           # Enrutamiento de la aplicación
├── assets/
│   ├── _colors.scss            # Colores del sistema de diseño
│   └── images/                 # Imágenes estáticas y logos
└── styles.scss                 # Estilos globales
```

## Stack Tecnológico

- **Framework**: Angular 20
- **Librería UI**: Angular Material 3
- **Estilos**: SCSS con theming Material 3
- **Enrutamiento**: Angular Router con lazy loading
- **Formularios**: Reactive Forms con validación
- **Iconos**: Material Icons

## Scripts Disponibles

- `npm start` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm test` - Ejecutar pruebas unitarias
- `npm run lint` - Ejecutar linting
- `ng generate component <name>` - Generar nuevo componente
- `ng generate service <name>` - Generar nuevo servicio

## Guías de Desarrollo

### Estilo de Código

- Seguir las convenciones de la guía de estilo de Angular
- Usar modo estricto de TypeScript
- Implementar manejo adecuado de errores
- Escribir mensajes de commit significativos

### Estructura de Componentes

- Usar componentes standalone
- Implementar bindings de input/output apropiados
- Seguir principios de diseño Material 3
- Asegurar diseño responsivo

### Estilos

- Usar variables SCSS de `_colors.scss`
- Seguir guías de theming Material 3
- Implementar breakpoints responsivos
- Usar componentes Angular Material cuando sea posible

## Solución de Problemas

### Problemas Comunes

1. **Problemas de Versión de Node.js**:
   ```bash
   # Usar Node Version Manager (nvm) para cambiar versiones
   nvm install 18
   nvm use 18
   ```

2. **Problemas de Instalación de Paquetes**:
   ```bash
   # Limpiar caché de npm y reinstalar
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Problemas de Angular CLI**:
   ```bash
   # Actualizar Angular CLI
   npm install -g @angular/cli@latest
   ```

4. **Puerto Ya en Uso**:
   ```bash
   # Usar un puerto diferente
   ng serve --port 4201
   ```

### Compatibilidad de Navegadores

- Chrome (recomendado)
- Firefox
- Safari
- Edge

## Contribuir

1. Crear una rama de feature
2. Hacer tus cambios
3. Probar exhaustivamente
4. Enviar un pull request

## Licencia

Este proyecto es para fines educativos como parte de un curso de diseño UX.

## Soporte

Para preguntas o problemas, consulta:
- Documentación de Angular: https://angular.io/docs
- Documentación de Material 3: https://m3.material.io/
- Documentación de Angular Material: https://material.angular.io/