import React, { useState } from 'react';
import { createClient } from '../services/clientService';
import { useNavigate } from 'react-router-dom';  // Importamos el hook useNavigate
import './AddClientForm.css';  // Importa el archivo CSS

const AddClientForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClient(formData);
      alert('Cliente agregado con éxito');
      navigate('/');
    } catch (error) {
      console.error('Error al agregar cliente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        placeholder="Apellido"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />
      <button type="submit">Agregar Cliente</button>
    </form>
  );
};

export default AddClientForm;
