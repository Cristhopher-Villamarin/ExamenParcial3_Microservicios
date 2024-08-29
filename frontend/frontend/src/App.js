import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import ProductPage from './pages/ProductPage';
import SalesPage from './pages/SalesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientes" element={<ClientPage />} />
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/ventas" element={<SalesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
