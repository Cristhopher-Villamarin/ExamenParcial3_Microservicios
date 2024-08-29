const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Crear un nuevo producto
router.post('/productos', productoController.crearProducto);

// Obtener todos los productos
router.get('/productos', productoController.obtenerProductos);

// Obtener un producto por ID
router.get('/productos/:id', productoController.obtenerProductoPorId);

// Actualizar el stock de un producto
router.put('/productos/:id/actualizar-stock', productoController.actualizarStock);

module.exports = router;
