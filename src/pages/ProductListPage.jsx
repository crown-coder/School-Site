// src/pages/ProductListPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const ProductListPage = () => {
  const navigate = useNavigate();

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1',
      price: 30,
      imageUrl: 'https://via.placeholder.com/150',
      category: 'Electronics',
      sellerName: 'Seller 1',
      sellerImage: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for Product 2',
      price: 40,
      imageUrl: 'https://via.placeholder.com/150',
      category: 'Clothing',
      sellerName: 'Seller 2',
      sellerImage: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for Product 3',
      price: 50,
      imageUrl: 'https://via.placeholder.com/150',
      category: 'Furniture',
      sellerName: 'Seller 3',
      sellerImage: 'https://via.placeholder.com/150',
    },
  ];

  // Navigate to the ProductPage with the product data
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="product-list-container">
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <Button text="View Details" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
