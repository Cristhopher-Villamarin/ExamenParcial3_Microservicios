import React, { useState, useEffect } from 'react';
import AddClientForm from '../components/AddClientForm';
import ClientList from '../components/ClientList';
import { getClients, createClient } from '../services/clientService';

const ClientPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    }
  };

  const handleAddClient = async (clientData) => {
    try {
      await createClient(clientData);
      loadClients(); // Recargar la lista de clientes después de agregar uno nuevo
    } catch (error) {
      console.error('Error al agregar cliente:', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Clientes</h1>
      <AddClientForm onAddClient={handleAddClient} />
      <ClientList clients={clients} />
    </div>
  );
};

export default ClientPage;
