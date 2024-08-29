import React, { useState, useEffect } from 'react';
import { createSale } from '../services/salesService';
import { getClients } from '../services/clientService';
import { getProducts } from '../services/productService';
import { useNavigate } from 'react-router-dom';  // Importa el hook de navegación
import './Sales.css';  // Importamos el CSS

const AddSalesForm = () => {
  const [formData, setFormData] = useState({
    clienteId: '',
    productos: []
  });
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({ productoId: '', cantidad: '', precio: '' });
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();  // Inicializa el hook de navegación

  // Cargar clientes y productos desde los servicios
  useEffect(() => {
    const fetchClientsAndProducts = async () => {
      const fetchedClients = await getClients();
      const fetchedProducts = await getProducts();
      setClients(fetchedClients);
      setProducts(fetchedProducts);
    };
    fetchClientsAndProducts();
  }, []);

  // Maneja los cambios en los campos de producto seleccionado
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  // Añadir el producto a la lista de productos seleccionados
  const handleAddProduct = () => {
    if (!selectedProduct.productoId || !selectedProduct.cantidad || !selectedProduct.precio) {
      alert('Por favor selecciona un producto, cantidad y precio.');
      return;
    }

    const subtotal = parseFloat(selectedProduct.precio) * parseInt(selectedProduct.cantidad);
    
    // Actualiza el total general de la venta
    setTotal(prevTotal => prevTotal + subtotal);

    // Agregar el producto al formData
    setFormData((prevData) => ({
      ...prevData,
      productos: [...prevData.productos, { ...selectedProduct, subtotal }]
    }));

    // Limpiar el producto seleccionado
    setSelectedProduct({ productoId: '', cantidad: '', precio: '' });
  };

  // Manejar los cambios en el cliente seleccionado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.productos.length === 0) {
      alert('Por favor añade al menos un producto antes de registrar la venta.');
      return;
    }

    try {
      await createSale(formData);
      alert('Venta registrada con éxito');
      navigate('/');  // Redireccionar a la página principal después de registrar la venta
    } catch (error) {
      console.error('Error al registrar venta:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sales-form">
      <label>Cliente:</label>
      <select name="clienteId" value={formData.clienteId} onChange={handleChange} required>
        <option value="">Selecciona un cliente</option>
        {clients.map(client => (
          <option key={client.id} value={client.id}>
            {client.nombre} {client.apellido}
          </option>
        ))}
      </select>

      <div className="product-selection">
        <label>Producto:</label>
        <select name="productoId" value={selectedProduct.productoId} onChange={handleProductChange} required>
          <option value="">Selecciona un producto</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.nombre}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="cantidad"
          value={selectedProduct.cantidad}
          onChange={handleProductChange}
          placeholder="Cantidad"
          required
          className="input-field"
        />

        <input
          type="number"
          step="0.01"
          name="precio"
          value={selectedProduct.precio}
          onChange={handleProductChange}
          placeholder="Precio"
          required
          className="input-field"
        />

        <button type="button" onClick={handleAddProduct} className="add-product-button">
          Añadir Producto
        </button>
      </div>

      <h3>Total: ${total.toFixed(2)}</h3>

      <button type="submit" className="submit-button">Registrar Venta</button>
    </form>
  );
};

export default AddSalesForm;
