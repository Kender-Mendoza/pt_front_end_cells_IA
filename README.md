# Prueba Técnica - Frontend

Este proyecto es el resultado de una prueba técnica de frontend, cuyo objetivo era desarrollar un formulario de creación de registros utilizando Vue 3.

El formulario permite la entrada de datos con validaciones y controles interactivos, incluyendo un interruptor que habilita o deshabilita el campo de correo electrónico.

## Tecnologías utilizadas

El desarrollo de esta prueba se ha realizado con las siguientes tecnologías:

- **Vue 3**: Framework principal para la construcción de la aplicación.
- **Vite**: Herramienta de compilación rápida para el entorno de desarrollo.
- **Vuetify**: Framework de componentes UI basado en Material Design.
- **Vee-Validate**: Librería de validación de formularios.
- **Yup**: Schema validation para definir las reglas del formulario.
- **Vue Router**: Manejo de rutas en la aplicación.
- **Vue I18n**: Internacionalización de la aplicación.
- **Cypress**: Pruebas unitarias y de integración de los componentes.

## Instalación y ejecución

Para instalar las dependencias del proyecto, ejecutar:
```sh
npm install
```

Iniciar servidor en modo desarrollo:
```sh
npm run dev
```

Pruebas de unidad con Cypress:
```sh
npm run test:unit
```
Si el anterior no funciona, puedes utilizar la interfaz gráfica:
```sh
npm run test:unit:dev
```

Pruebas de unidad con Cypress:
```sh
npm run test:e2e
```

Si el anterior no funciona, puedes utilizar la interfaz gráfica:
```sh
npm run test:e2e:dev
```

## Estructura del proyecto

El proyecto sigue una estructura modular con componentes reutilizables y validaciones centralizadas para mantener el código limpio y escalable.