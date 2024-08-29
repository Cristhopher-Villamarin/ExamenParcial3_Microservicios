// models/Venta.js
const { DataTypes } = require('sequelize');
const db = require('../db');
const DetalleVenta = require('./DetalleVenta');  // Importa el modelo

const Venta = db.define('Venta', {
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaVenta: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

// Definir la asociación después de importar ambos modelos
Venta.hasMany(DetalleVenta, {
  foreignKey: 'ventaId',
  as: 'detalles'
});

DetalleVenta.belongsTo(Venta, {
  foreignKey: 'ventaId',
  as: 'venta'
});

module.exports = Venta;
