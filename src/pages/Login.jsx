import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Balloon from '../assets/baloon.png'

import './Login.css';

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
      <div className='login-left'>
        <img src={Balloon} alt="Balloon image in the login page" />
        <div>
          <h2>Welcome to UniqueShelves</h2>
          <p className='motto'>Empowering Learning and Growth, One Step at a Time.</p>

          <p>🌟 Discover expert-led courses in various fields.</p>
          <p>🌟 Join a community of learners just like you.</p>
          <p>🌟 Achieve your goals at your own pace.</p>
        </div>
      </div>
      <div className='login-right'>
        <h2>Login</h2>
          <form>
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
          </form>

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
    </div>
  );
};

export default Login;
