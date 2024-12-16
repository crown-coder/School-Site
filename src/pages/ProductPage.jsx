import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

import './ProductPage.css'

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBuyNow = () => {
    setShowConfirmation(true);
  };

  const handleGoToCheckout = () => {
    // Redirect to checkout page or product purchase process
    navigate('/checkout', { state: product });
  };

  return (
    <div className='product-page-container'>
      <button onClick={() => navigate(-1)} className='back-button'>Back to Products</button>
      <section className='product-details'>
        <div className='product-header'>
          <h1>{product?.title || "Product Title"}</h1>
          <img src={product?.imageUrl || "placeholder.jpg"} alt={product?.title || "Product Image"} />
        </div>
        <div className='product-seller-infor'>
          <div className='product-info'>
            <h2>Product Information</h2>
            <p>{product?.description || "Product Description"}</p>
            <p><strong>Price:</strong> ${product?.price || "N/A"}</p>
            <p><strong>Category:</strong> {product?.category || "N/A"}</p>
            <button className='buy-now-button' onClick={handleBuyNow}>Buy Now</button>
          </div>

          {/* <div className='product-seller'>
            <h2>Seller Info</h2>
            <p><strong>Name:</strong> {product?.sellerName || "Seller Name"}</p>
            <img src={product?.sellerImage || "seller-placeholder.jpg"} alt="seller" className='seller-image' />
          </div> */}
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to purchase this product?</p>
          <Button text="Proceed to Checkout" onClick={handleGoToCheckout} />
          <Button text="Cancel" onClick={() => setShowConfirmation(false)} />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
