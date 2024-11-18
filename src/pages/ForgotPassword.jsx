import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    // Replace with actual API call logic
    if (email) {
      setMessage('Password reset link has been sent to your email.');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <p>Please enter your email address to reset your password.</p>

      <InputField
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />

      <Button 
        text="Send Reset Link" 
        onClick={handleForgotPassword} 
        className="register-button"
      />

      {message && <p className="message">{message}</p>}

      <p className="link">
        Remembered your password?{' '}
        <span 
          onClick={() => navigate('/login')} 
          className="back-to-login-link">
          Back to Login
        </span>
      </p>
    </div>
  );
};

export default ForgotPassword;
