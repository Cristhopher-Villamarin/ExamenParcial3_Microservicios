// views/routes.js
const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Crear una nueva venta
router.post('/ventas', ventaController.crearVenta);

// Obtener todas las ventas
router.get('/ventas', ventaController.obtenerVentas);

// Obtener una venta por ID
router.get('/ventas/:id', ventaController.obtenerVentaPorId);

module.exports = router;
