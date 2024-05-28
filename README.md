





<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


----------------------------------------------------------------------------------------------------------------

# Basic Node.js API users CRUD

## Descripción

API básica de Node.js con Express y PostgreSQL para realizar operaciones CRUD en una tabla de usuarios y autenticación de usuarios con JWT. Este proyecto tiene como propósito servir de base para proyectos más complejos.

## Pre-requisitos

Los requisitos para ejecutar este proyecto son:

```bash
npm install npm@latest -g
```

## Instalación

1. Clonar el repositorio:

```bash
git clone
```

2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
PORT = 4000
DATABASE_URL=postgres://default:pMGZQUc0h1vt@ep-polished-term-a4mniado-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require
JWT_SECRET=mySecretKey
```

Nota: No hay necesidad de crear la base de datos pues ya esta creada en vercel.

4. Ejecutar el proyecto:

```bash
npm start
```

## Dependencias

- [Express](https://expressjs.com/es/): Framework de Node.js para crear aplicaciones web y APIs.
- [pg](https://node-postgres.com/): Cliente de PostgreSQL para Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Módulo que carga variables de entorno desde un archivo `.env`.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Implementación de JSON Web Tokens (JWT) para Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Librería para encriptar contraseñas.
- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar CORS en Express.

## Tecnologías

- Node.js - Entorno de ejecución para JavaScript
- Express - Infraestructura web rápida, minimalista y flexible para Node.js
- PostgreSQL - Sistema de gestión de bases de datos relacional objeto

## Estructura de directorios

```txt
health_hub_back/
│
|── .vscode/                  # Configuracion para agregar iconos personalizados al proyecto y hacer que se vea como un proyecto Nest.js en Visual Studio Code
│   ├── settings.json/        # Configuracion iconos
│
|── dist/                     # Carpeta creada por el navegador para poder leer TypeScript en JavaScript
│   
│
│── node_modules/            # Directorio que se crea en la carpeta raíz de nuestro proyecto cuando instalamos paquetes o dependencias mediante npm.
│
│
├── src/                      # Código fuente
│   ├── auth/                 # Autenticacion
│   │   └── auth.controller.ts        # Controlador de Autenticacion Responsable de manejar las solicitudes  entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD
│   │     └── auth.module.ts          # Modulo de Autenticacion
│   │     └── auth.service.ts         # Logica y Metodos (que son consumidos en el controlador) de Autenticacion
│   │     └── jwt.constants.ts        # Carpeta llave secreta (token)
│   │     └── login-auth.dto.ts       # Data Transfer Object (dto) de "Login". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.)
│   │     └── register.dto.ts         # Data Transfer Object (dto) de "Create New Account".
│   │
│   ├── comments/             # Entidad Comentarios
│   │   └── comments.controller.ts        # Controlador de "Comentarios" Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD
│   │     └── comments.dto.ts             # Data Transfer Object (dto) de "Comentarios". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend
│   │     └── comments.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── comments.module.ts          # Modulo de "Comentarios" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── comments.service.ts         # Logica y Metodos (que son consumidos en el controlador) de los comentarios
│   │   
│   │
│   │
│   ├── patients_routines/   #  Entidad Pacientes_Rutinas
│   │   └──   patients_routines.controller.ts      # Controlador de "Pacientes_Rutinas". Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD.
│   │     └── patients_routines.dto.ts             # Data Transfer Object (dto) de "Pacientes_Rutinas". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend.
│   │     └── patients_routines.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── patients_routines.module.ts          # Modulo de "Pacientes_Rutinas" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── patients_routines.service.ts         # Logica y Metodos (que son consumidos en el controlador) de las rutinas de los pacientes.
│   │  
│   ├── responses/               #  Entidad Respuestas
│   |   └── responses.controller.ts.js     # Controlador de "Respuestas". Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD.
│   │     └── responses.dto.ts             # Data Transfer Object (dto) de "Respuestas". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend.
│   │     └── responses.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── responses.module.ts          # Modulo de "Respuestas" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── responses.service.ts         # Logica y Metodos (que son consumidos en el controlador) de las Respuestas.
│   │ 
│   ├── roles/             # Entidad Roles
│   │   └── roles.controller.ts.js     # Controlador de "Roles". Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD.
│   │     └── roles.dto.ts             # Data Transfer Object (dto) de "Roles". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend.
│   │     └── roles.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── roles.module.ts          # Modulo de "Roles" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── roles.service.ts         # Logica y Metodos (que son consumidos en el controlador) de los Roles.
│   │ 
│   │ 
│   ├── routine_tips/             # Entidad Rutinas_Tips
│   │   └── routine_tips.controller.ts.js     # Controlador de "Rutinas_Tips". Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD.
│   │     └── routine_tips.dto.ts             # Data Transfer Object (dto) de "Rutinas_Tips". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend.
│   │     └── routine_tips.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── routine_tips.module.ts          # Modulo de "Rutinas_Tips" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── routine_tips.service.ts         # Logica y Metodos (que son consumidos en el controlador) de los Rutinas_Tips.
│   │ 
│   ├── routine_types/             # Entidad Rutinas_Tipos
│   │   └── routine_types.controller.ts.js     # Controlador de "Rutinas_Tipos". Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD.
│   │     └── routine_types.dto.ts             # Data Transfer Object (dto) de "Rutinas_Tipos". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend.
│   │     └── routine_types.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── routine_types.module.ts          # Modulo de "Rutinas_Tipos" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── routine_types.service.ts         # Logica y Metodos (que son consumidos en el controlador) de las Rutinas_Tipos.
│   │ 
│   ├── routines/             # Entidad Rutinas
│   │   └── routines.controller.ts.js     # Controlador de "Rutinas". Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD.
│   │     └── routines.dto.ts             # Data Transfer Object (dto) de "Rutinas". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend.
│   │     └── routines.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── routines.module.ts          # Modulo de "Rutinas" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── routines.service.ts         # Logica y Metodos (que son consumidos en el controlador) de las Rutinas.
│   │ 
│   ├── user/             # Entidad Usuario
│   │   └── user.controller.ts.js     # Controlador de "Usuario". Responsable de manejar las solicitudes entrantes y devolver las respuestas al cliente. En esta van los Endpoints (URLs) y donde esta el CRUD.
│   │     └── user.dto.ts             # Data Transfer Object (dto) de "Usuario". (Guía para que el desarrollador y aquellos que consumen la API sepan que de forma espera tener el cuerpo de la solicitud.) Tipo de datos que espera que el backend.
│   │     └── user.entity.ts          # Representa una tabla de la Base de Datos
│   │     └── user.module.ts          # Modulo de "Usuario" (Donde se guardan las clases del controlador, entity, service. Para exportarlas al modulo madre)
│   │     └── user.service.ts         # Logica y Metodos (que son consumidos en el controlador) del Usuario.
│   │ 
│   │ 
│   ├── app.module.ts         # Es el modulo Padre. Contenedor de otras clases o artefactos, como son los controladores, servicios y otros componentes desarrollados con Nest
│   └── main.ts               # Configuracion y rutas de la aplicacion
│
│ 
│ 
│ 
│ 
│ 
│ 
│ 
├── .env                      # Variables de entorno (como la URL de la base de datos, puerto del servidor, etc.)
├── .gitignore                # Archivos a ignorar por git
├── package.json              # Dependencias del proyecto
└── README.md                 # Documentación del proyecto


