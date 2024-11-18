import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login logic here
    alert(`Logging in as ${username}`);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      <InputField 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <InputField 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button text="Login" onClick={handleLogin} />

      {/* Forgot Password Link */}
      <p className="link">
        <span onClick={() => navigate('/forgot-password')} className="forgot-password-link">
          Forgot Password?
        </span>
      </p>

      {/* Don't Have an Account Link */}
      <p className="link">
        Don't have an account?{' '}
        <span onClick={() => navigate('/signup')} className="signup-link">
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
