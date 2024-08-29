import React, { useState } from 'react';
import { createProduct } from '../services/productService';
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(formData);
      alert('Producto agregado con éxito');
      navigate("/");
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre del producto"
        required
      />
      <input
        type="number"
        name="precio"
        value={formData.precio}
        onChange={handleChange}
        placeholder="Precio"
        required
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AddProductForm;
