# ChefTimer Web

ChefTimer Web es una aplicación de administración diseñada para gestionar la aplicación móvil ChefTimer, una herramienta de alarmas especializada para uso en cocina.

## Características principales

- Panel de administración para gestionar alarmas culinarias
- Interfaz de usuario intuitiva construida con React y Material UI

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada)
- npm (normalmente viene con Node.js) o [pnpm](https://pnpm.io/) (recomendado)

## Tecnologías utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) - Entorno de desarrollo
- [Material UI 6](https://mui.com/) - Biblioteca de componentes UI

## Estructura del proyecto

```
cheftimer-web/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes de React
│   │   ├── Auth/        # Componentes de autenticación
│   │   ├── Layout/      # Componentes de estructura
│   │   ├── Menu/        # Componentes del menú
│   │   ├── Navbar/      # Barra de navegación
│   │   ├── Home/        # Página principal
│   │   └── History/     # Historial de alarmas
│   ├── App.jsx          # Componente principal
│   ├── App.module.css   # Estilos CSS modulares
│   └── main.jsx         # Punto de entrada
├── .eslintrc.cjs        # Configuración de ESLint
├── index.html           # Archivo HTML principal
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── README.md            # Este archivo
```

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jnarro-miso/cheftimer-web.git
   cd cheftimer-web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```
   O si prefieres usar pnpm:
   ```bash
   pnpm install
   ```

## Ejecución en modo desarrollo

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo Vite. Por defecto, la aplicación estará disponible en [http://localhost:5173](http://localhost:5173).
