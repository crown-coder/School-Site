import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Balloon from '../assets/baloon.png'

const Signup = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName.trim()) {
      setErrorMessage('Full Name is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 8 || !/\d/.test(password)) {
      setErrorMessage('Password must be at least 8 characters long and include an uppercase letter and a number.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }
    setErrorMessage('');
    console.log('Registration data:', formData);
    navigate('/login');
  }

  return (
    <div className='login-page'>
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
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className='register-form'>
          
          <div className='form-group'>
            <label htmlFor="fullName">Full Name</label>
            <input 
              type='text'
              name='fullName'
              id='fullname'
              placeholder='fullname'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input 
              type='email'
              name='email'
              id='email'
              placeholder='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input 
              type='password'
              name='password'
              id='password'
              placeholder='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              placeholder='confirm password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && <p className='error-message'>{errorMessage}</p>}

          <button type='submit' className='register-button'>Register</button>
        </form>

        <p>
          Already have an account?{' '}
          <span className='login-link' onClick={() => navigate('/login')}>
            Login here
          </span>
        </p>
      </div>
  
    </div>
  )
}

export default Signup
