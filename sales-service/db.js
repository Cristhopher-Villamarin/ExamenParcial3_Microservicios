// db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false
});

// Sincronizar esquema de la base de datos
sequelize.sync({ force: true }) // Cambia a false en producción
  .then(() => console.log('Tablas de Ventas creadas'))
  .catch(err => console.log('Error al crear tablas: ', err));

module.exports = sequelize;
