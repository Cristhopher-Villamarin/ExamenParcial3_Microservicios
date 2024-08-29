const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false
});

sequelize.sync({ force: true }) // Cambia a false en producción si no quieres sobrescribir las tablas
  .then(() => console.log('Tablas de Clientes creadas'))
  .catch(err => console.log('Error al crear tablas: ', err));

module.exports = sequelize;


