import React from 'react';
import { Link } from 'react-router-dom';
import './ThankyouPage.css'

const ThankYouPage = () => {
  return (
    <div className='thank-you-container'>
      <h1>Thank You!</h1>
      <p>Your purchase/enrollment was successful.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ThankYouPage;
