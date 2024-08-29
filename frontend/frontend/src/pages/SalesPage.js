import React, { useState, useEffect } from 'react';
import { getSales, createSale } from '../services/salesService';
import AddSalesForm from '../components/AddSalesForm';
import SalesList from '../components/SalesList';

const SalesPage = () => {
  const [sales, setSales] = useState([]);

  // Cargar las ventas cuando el componente se monta
  useEffect(() => {
    const fetchSales = async () => {
      try {
        const salesData = await getSales();
        setSales(salesData);
      } catch (error) {
        console.error('Error al cargar las ventas:', error);
      }
    };

    fetchSales();
  }, []);

  // Función para agregar una nueva venta
  const handleAddSale = async (saleData) => {
    try {
      const newSale = await createSale(saleData);
      setSales([...sales, newSale]); // Agrega la nueva venta a la lista de ventas
    } catch (error) {
      console.error('Error al agregar la venta:', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Ventas</h1>
      <AddSalesForm onSubmit={handleAddSale} />
      <SalesList sales={sales} />
    </div>
  );
};

export default SalesPage;
