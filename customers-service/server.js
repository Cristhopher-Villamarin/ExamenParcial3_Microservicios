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
  console.log(`[Customers Service] ${req.method} ${req.url}`);
  next();
});

app.use('/', routes); // Usar las rutas del microservicio de clientes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servicio de clientes!');
});

const PORT = process.env.PORT || 3001;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos de clientes establecida');
    app.listen(PORT, () => {
      console.log(`Servidor de clientes corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.log('Error en la conexión a la base de datos de clientes:', err));
