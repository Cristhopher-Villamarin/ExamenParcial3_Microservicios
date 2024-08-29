import React, { useEffect, useState } from 'react';
import { getClients } from '../services/clientService';
import './ClientList.css';  // Importa el archivo CSS

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClients(data);
    };
    fetchClients();
  }, []);

  return (
    <div className="client-list-container">
      <h2>Lista de Clientes</h2>
      <div className="client-cards">
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <h3>{client.nombre} {client.apellido}</h3>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Teléfono:</strong> {client.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
