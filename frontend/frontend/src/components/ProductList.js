import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import './ProductList.css';  // Importa el archivo CSS

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <h2>Lista de Productos</h2>
      <div className="product-cards">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.nombre}</h3>
            <p><strong>Precio:</strong> ${product.precio}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
