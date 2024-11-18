import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the checkout process here (e.g., payment gateway integration)
    alert('Purchase completed successfully!');
    navigate('/thank-you'); // Redirect to a thank you page after purchase
  };

  return (
    <div className='checkout-container'>
      <h1>Checkout</h1>
      <section className='product-details'>
        <h2>Product: {product?.title}</h2>
        <p><strong>Price:</strong> ${product?.price}</p>
        <img src={product?.imageUrl || 'placeholder.jpg'} alt={product?.title} />
      </section>

      <form onSubmit={handleSubmit}>
        <h3>Payment Information</h3>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Cardholder Name:
          <input
            type="text"
            name="cardHolder"
            value={paymentDetails.cardHolder}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Expiration Date:
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            required
          />
        </label>

        <button type="submit" className='checkout-button'>Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
