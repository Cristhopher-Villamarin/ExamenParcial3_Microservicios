# Dockerfile del API Gateway
FROM node:14
WORKDIR /app

# Copiar el package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Copiar el archivo wait-for-it.sh dentro del contenedor
COPY wait-for-it.sh /usr/local/bin/

# Dar permisos de ejecución al archivo wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Exponer el puerto
EXPOSE 8080

# Comando de inicio
CMD ["npm", "start"]

