# Supermarket Sales Control System

Este proyecto es un sistema de control de ventas para un supermercado, desarrollado utilizando una arquitectura de microservicios. Los microservicios están implementados con Node.js y Express, y un API Gateway maneja las solicitudes hacia estos servicios. Además, el frontend está desarrollado con React y se comunica con los microservicios a través del API Gateway.

## Estructura del Proyecto

El proyecto está dividido en varios servicios:

- **Customers Service**: Gestión de clientes.
- **Inventory Service**: Gestión de productos.
- **Sales Service**: Gestión de ventas.
- **API Gateway**: Encargado de redirigir las solicitudes a los microservicios correspondientes.
- **Frontend**: Interfaz de usuario para interactuar con los microservicios.

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes:

- Docker
- Docker Compose
- Node.js (recomendado v14 o superior)
- npm (Node Package Manager)

## Instalación

### Clonar el Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/supermarket-system.git
cd supermarket-system

## Instalación de Dependencias

cd customers-service
npm install
cd ../inventory-service
npm install
cd ../sales-service
npm install
cd ../api-gateway
npm install
cd ../frontend
npm install

docker-compose build

docker-compose up

Puertos de los Servicios
Customers Service: http://localhost:3001
Inventory Service: http://localhost:3003
Sales Service: http://localhost:3002
API Gateway: http://localhost:8080
Frontend: http://localhost:3000

Pruebas con Postman
1. Clientes
Endpoint: POST http://localhost:8080/clientes/clientes
JSON para crear un cliente:
{
  "nombre": "Juan",
  "apellido": "Perez",
  "email": "juan.perez@example.com",
  "telefono": "0987654321"
}


Aquí tienes el archivo README.md completo, listo para ser utilizado en tu proyecto en GitHub. Incluye todos los pasos detallados y comandos necesarios.

markdown
Copiar código
# Supermarket Sales Control System

Este proyecto es un sistema de control de ventas para un supermercado, desarrollado utilizando una arquitectura de microservicios. Los microservicios están implementados con Node.js y Express, y un API Gateway maneja las solicitudes hacia estos servicios. Además, el frontend está desarrollado con React y se comunica con los microservicios a través del API Gateway.

## Estructura del Proyecto

El proyecto está dividido en varios servicios:

- **Customers Service**: Gestión de clientes.
- **Inventory Service**: Gestión de productos.
- **Sales Service**: Gestión de ventas.
- **API Gateway**: Encargado de redirigir las solicitudes a los microservicios correspondientes.
- **Frontend**: Interfaz de usuario para interactuar con los microservicios.

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes:

- Docker
- Docker Compose
- Node.js (recomendado v14 o superior)
- npm (Node Package Manager)

## Instalación

### Clonar el Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/supermarket-system.git
cd supermarket-system
Instalación de Dependencias
Cada microservicio tiene sus propias dependencias. Navega a cada directorio y ejecuta npm install:

bash
Copiar código
cd customers-service
npm install
cd ../inventory-service
npm install
cd ../sales-service
npm install
cd ../api-gateway
npm install
cd ../frontend
npm install
Configuración de Docker
Construcción de Imágenes
Construye las imágenes de Docker para todos los servicios usando Docker Compose:

bash
Copiar código
docker-compose build
Ejecución de Contenedores
Inicia los contenedores con Docker Compose:

bash
Copiar código
docker-compose up
Esto levantará todos los microservicios, el API Gateway y el frontend.

Puertos de los Servicios
Customers Service: http://localhost:3001
Inventory Service: http://localhost:3003
Sales Service: http://localhost:3002
API Gateway: http://localhost:8080
Frontend: http://localhost:3000
Pruebas con Postman
1. Clientes
Endpoint: POST http://localhost:8080/clientes/clientes
JSON para crear un cliente:
json
Copiar código
{
  "nombre": "Juan",
  "apellido": "Perez",
  "email": "juan.perez@example.com",
  "telefono": "0987654321"
}
2. Productos
Endpoint: POST http://localhost:8080/productos/productos
JSON para crear un producto:

{
  "nombre": "Manzanas",
  "precio": 1.50,
  "stock": 100
}

3. Ventas
Endpoint: POST http://localhost:8080/ventas/ventas
JSON para crear una venta:

{
  "clienteId": 1,
  "productos": [
    {
      "productoId": 1,
      "cantidad": 2,
      "precio": 1.25
    },
    {
      "productoId": 2,
      "cantidad": 1,
      "precio": 0.50
    }
  ]
}

Frontend
El frontend estará disponible en http://localhost:3000. Desde la interfaz web puedes gestionar clientes, productos y ventas.

Instalación de Dependencias del Frontend
Dentro de la carpeta frontend, ejecuta:

npm install

Ejecución del Frontend
Una vez que los microservicios y el API Gateway estén en funcionamiento, inicia el frontend con:

npm start

Esto abrirá la aplicación en tu navegador en http://localhost:3000.


