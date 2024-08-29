FROM node:14
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

COPY wait-for-it.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/wait-for-it.sh

EXPOSE 3002
CMD ["bash", "wait-for-it.sh", "sales-db:5432", "--", "node", "server.js"]
