import React, { useState, useEffect } from 'react';
import AddProductForm from '../components/AddProductForm';
import ProductList from '../components/ProductList';
import { getProducts, createProduct } from '../services/productService';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      await createProduct(productData);
      loadProducts(); // Recargar la lista de productos después de agregar uno nuevo
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
