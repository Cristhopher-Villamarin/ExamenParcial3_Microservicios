// controllers/ventaController.js
const Venta = require('../models/Venta');
const DetalleVenta = require('../models/DetalleVenta');
const axios = require('axios');

// Crear una nueva venta
exports.crearVenta = async (req, res) => {
  const { clienteId, productos } = req.body; // productos es un array [{productoId, cantidad, precio}]
  let total = 0;

  try {
    // Validar existencia del cliente
    const cliente = await axios.get(`http://customers-service:3001/clientes/${clienteId}`);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Crear nueva venta
    const nuevaVenta = await Venta.create({
      clienteId,
      fechaVenta: new Date(),
      total: 0 // Se calculará después
    });

    // Procesar cada producto en la venta
    for (const producto of productos) {
      const { productoId, cantidad, precio } = producto;
      
      // Verificar stock del producto desde el inventory-service
      const response = await axios.get(`http://inventory-service:3003/productos/${productoId}`);
      const productoStock = response.data;
      
      if (productoStock.stock < cantidad) {
        return res.status(400).json({ error: `Stock insuficiente para el producto ${productoStock.nombre}` });
      }

      // Actualizar el stock del producto en el inventory-service
      await axios.put(`http://inventory-service:3003/productos/${productoId}/actualizar-stock`, { cantidadVendida: cantidad });

      // Calcular subtotal
      const subtotal = cantidad * precio;
      total += subtotal;

      // Crear el detalle de la venta
      await DetalleVenta.create({
        ventaId: nuevaVenta.id,
        productoId,
        cantidad,
        precio,
        subtotal
      });
    }

    // Actualizar el total de la venta
    nuevaVenta.total = total;
    await nuevaVenta.save();

    res.status(201).json(nuevaVenta);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las ventas
exports.obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: [{ model: DetalleVenta, as: 'detalles' }]
    });
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener venta por ID
exports.obtenerVentaPorId = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id, {
      include: [{ model: DetalleVenta, as: 'detalles' }] // Incluir detalles de la venta
    });
    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
