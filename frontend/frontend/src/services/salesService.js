import axios from 'axios';

const API_URL = 'http://localhost:8080/ventas/ventas';  // Ajuste según tu API Gateway

// Función para crear una nueva venta
export const createSale = async (saleData) => {
  try {
    const response = await axios.post(API_URL, saleData);
    return response.data;
  } catch (error) {
    console.error('Error al crear la venta:', error);
    throw error;
  }
};

// Función para obtener la lista de ventas
export const getSales = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las ventas:', error);
    throw error;
  }
};
