import axios from 'axios';

const API_URL = 'http://localhost:8080/clientes/clientes';

export const getClients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createClient = async (clientData) => {
  const response = await axios.post(API_URL, clientData);
  return response.data;
};
