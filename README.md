# EXAMEN DEL 2º PARCIAL – RONNY

*Backend – Gestor de Tareas*

# Descripción General del Proyecto

Este proyecto corresponde al backend del sistema “Gestor de Tareas”, desarrollado con Node.js, Express y MongoDB. Su objetivo es manejar todas las operaciones relacionadas con la gestión de tareas, permitiendo crear, consultar, actualizar y eliminar los registros almacenados en la base de datos.

La estructura del código está organizada de manera modular, separando las rutas, el servidor y la conexión a la base de datos para mantener un proyecto claro, ordenado y fácil de ampliar. El archivo principal de rutas centraliza las funcionalidades del sistema, mientras que el servidor administra los middlewares y la configuración general.

En conjunto, el backend ofrece una base estable para el funcionamiento del proyecto y asegura una comunicación correcta con MongoDB.

# Instalación y Puesta en Marcha

Para ejecutar el proyecto, es necesario instalar las dependencias e iniciar el servidor con los comandos disponibles.

1. Instalación de dependencias
npm install

2. Ejecutar el servidor

Se puede iniciar con Node, nodemon o con el script configurado en el proyecto:

nodemon src/index.js


o

npm run dev

*3. Servidor en funcionamiento*

Cuando se inicia, el servidor queda activo en el puerto definido en las variables de entorno o en el puerto 3000 por defecto.

La ruta base del proyecto es:

/GestorDeTarea/

En el arranque se establece la conexión con MongoDB, se activan los middlewares principales (como CORS, manejo de JSON y archivos estáticos) y se cargan todas las rutas correspondientes al sistema de tareas.

# Estructura y Organización de Rutas

Las rutas del sistema se administran mediante el archivo:

routes/index.routes.js

En este archivo se define el agrupamiento principal:

indexRoutes.use('/tareas', tareaRouter);

# Todas las rutas del proyecto quedan bajo la ruta global:

/GestorDeTarea/

Rutas de Tareas

Ruta base:

/GestorDeTarea/tareas


Estas rutas permiten administrar completamente el módulo de tareas. Según la configuración del controlador, permiten realizar las operaciones siguientes:

GET / → Obtener todas las tareas.

GET /:id → Obtener una tarea específica por su ID.

POST / → Crear una nueva tarea.

PUT /:id → Actualizar una tarea existente.

DELETE /:id → Eliminar una tarea por ID.

Estas acciones corresponden a un CRUD completo.

Estructura del Servidor

El servidor principal se encuentra en:

server/server.js


Este archivo incluye aspectos fundamentales como:

Conexión a MongoDB

Se realiza mediante el módulo:

../db/cnn_mongodb.js


Antes de iniciar, se verifica si la base de datos ya está conectada, evitando conexiones repetidas.

Middlewares activados

CORS

express.json()

Servidor de archivos estáticos

Manejo de rutas no encontradas (404)

Carga de rutas principales
this.app.use(this.ronnyruta, indexRoutes);


Esto asegura que el proyecto mantenga una organización adecuada y sea fácil de escalar.

Estructura del Proyecto

El repositorio está organizado en carpetas específicas, entre las que se encuentran:

routes

server

db

public

Cada una cumple una función clara, permitiendo separar correctamente las responsabilidades del sistema.

# Conclusión

El desarrollo del backend “Gestor de Tareas – Examen del 2º Parcial” me permitió reforzar conocimientos importantes como:

Construcción de APIs con Node.js y Express.

Organización de rutas mediante módulos.

Conexión y uso de MongoDB.

Implementación de middlewares esenciales.

Creación de un servidor bien estructurado y capaz de escalar.

Este proyecto representa una buena base para futuros desarrollos y contribuye de forma significativa al fortalecimiento de mis habilidades en el desarrollo backend.
