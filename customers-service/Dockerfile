FROM node:14
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Copiar el script wait-for-it.sh
COPY wait-for-it.sh /usr/local/bin/

# Darle permisos de ejecución al script
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Exponer el puerto 3001 (para el servicio de clientes)
EXPOSE 3001

# Comando para esperar a la base de datos y luego iniciar el servidor
CMD ["bash", "wait-for-it.sh", "customers-db:5432", "--", "node", "server.js"]

