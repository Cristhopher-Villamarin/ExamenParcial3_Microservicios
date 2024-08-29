import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        ANTOJITOS
      </header>
      <h1>Bienvenido al Sistema de Control de Ventas del Supermercado</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/clientes" className="link-box">Gestión de Clientes</Link>
          </li>
          <li>
            <Link to="/productos" className="link-box">Gestión de Productos</Link>
          </li>
          <li>
            <Link to="/ventas" className="link-box">Gestión de Ventas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
