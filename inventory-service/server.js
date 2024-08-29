const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db'); // Conexión a la base de datos
const routes = require('./views/routes'); // Rutas del microservicio
const cors = require('cors'); // Importar CORS

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[Inventory Service] ${req.method} ${req.url}`);
  next();
});

app.use('/', routes); // Usar las rutas del microservicio de inventario

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servicio de inventario!');
});

const PORT = process.env.PORT || 3003;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos de inventario establecida');
    app.listen(PORT, () => {
      console.log(`Servidor de inventario corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.log('Error en la conexión a la base de datos de inventario:', err));
