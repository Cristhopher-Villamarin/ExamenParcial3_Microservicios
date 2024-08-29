const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Crear un nuevo cliente
router.post('/clientes', clienteController.crearCliente);

// Obtener todos los clientes
router.get('/clientes', clienteController.obtenerClientes);

// Obtener un cliente por ID
router.get('/clientes/:id', clienteController.obtenerClientePorId);

// Actualizar un cliente
router.put('/clientes/:id', clienteController.actualizarCliente);

module.exports = router;
