// src/pages/ProductPage.jsx
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the product object passed from the ProductListPage
  const product = location.state;

  return (
    <div className='product-page-container'>
      <button onClick={() => navigate(-1)}>Back to Products</button>

      <section className='product-details'>
        <div className='product-header'>
          <h1>{product?.name || "Product Title"}</h1>
          <img src={product?.imageUrl || "https://via.placeholder.com/500"} alt={product?.name || "Product Image"} />
          <p>{product?.description || "Product Description"}</p>
        </div>

        <div className='product-info'>
          <h2>Product Information</h2>
          <p><strong>Price:</strong> ${product?.price || "N/A"}</p>
          <p><strong>Category:</strong> {product?.category || "N/A"}</p>
          <button className='buy-now-button'>Buy Now</button>
        </div>

        <div className='product-seller'>
          <h2>Seller Info</h2>
          <p><strong>Name:</strong> {product?.sellerName || "Seller Name"}</p>
          <img src={product?.sellerImage || "https://via.placeholder.com/150"} alt="seller" className='seller-image' />
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
