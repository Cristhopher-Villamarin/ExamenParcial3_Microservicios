// models/Cliente.js
const { DataTypes } = require('sequelize');
const db = require('../db');

const Cliente = db.define('Cliente', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Cliente;