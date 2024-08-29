// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db'); // Conexión a la base de datos
const routes = require('./views/routes'); // Rutas del microservicio
const cors = require('cors'); // Importar CORS

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servicio de ventas!');
});

const PORT = process.env.PORT || 3002;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos de ventas establecida');
    app.listen(PORT, () => {
      console.log(`Servidor de ventas corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.log('Error en la conexión a la base de datos de ventas:', err));
