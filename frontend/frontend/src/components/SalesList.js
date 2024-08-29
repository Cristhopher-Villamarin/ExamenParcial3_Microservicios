import React, { useEffect, useState } from 'react';
import { getSales } from '../services/salesService';
import './Sales.css';  // Importamos el nuevo CSS

const SalesList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const data = await getSales();
      setSales(data);
    };
    fetchSales();
  }, []);

  return (
    <div className="sales-list-container">
      <h2>Lista de Ventas</h2>
      <div className="sales-cards">
        {sales.map(sale => (
          <div key={sale.id} className="sale-card">
            <h3>Venta N°: {sale.id}</h3>
            <p><strong>Cliente ID:</strong> {sale.clienteId}</p>
            <p><strong>Total:</strong> ${sale.total}</p>
            <h4>Detalles de la Venta:</h4>
            <div className="detalle-cards">
              {sale.detalles.map(detalle => (
                <div key={detalle.id} className="detalle-card">
                  <p><strong>Producto ID:</strong> {detalle.productoId}</p>
                  <p><strong>Cantidad:</strong> {detalle.cantidad}</p>
                  <p><strong>Precio:</strong> ${detalle.precio}</p>
                  <p><strong>Subtotal:</strong> ${detalle.subtotal}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesList;
