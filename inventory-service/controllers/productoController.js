// controllers/productoController.js
const Producto = require('../models/Producto');

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    const nuevoProducto = await Producto.create({ nombre, precio, stock });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener productos
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener producto por ID
exports.obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar stock de un producto
exports.actualizarStock = async (req, res) => {
  const { id } = req.params;
  const { cantidadVendida } = req.body; // cantidad que se ha vendido
  
  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Verificar si hay suficiente stock antes de reducirlo
    if (producto.stock < cantidadVendida) {
      return res.status(400).json({ error: 'Stock insuficiente' });
    }

    // Restar la cantidad vendida del stock actual
    producto.stock -= cantidadVendida;
    await producto.save();

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
