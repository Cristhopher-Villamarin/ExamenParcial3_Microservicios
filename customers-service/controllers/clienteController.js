// controllers/clienteController.js
const Cliente = require('../models/Cliente');

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono } = req.body;
    const nuevoCliente = await Cliente.create({ nombre, apellido, email, telefono });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener cliente por ID
exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, telefono } = req.body;
  
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
      }
  
      cliente.nombre = nombre || cliente.nombre;
      cliente.apellido = apellido || cliente.apellido;
      cliente.email = email || cliente.email;
      cliente.telefono = telefono || cliente.telefono;
  
      await cliente.save();
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

