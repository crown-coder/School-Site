import React, { useState } from 'react'
import Button from '../components/Button';
import InputField from '../components/InputField';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //login logic here
    alert(`Logging as ${username}`);
  } 

  return (
    <div>
      <h2>Login</h2>
      <InputField 
        type='text'
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField 
        type='password'
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Login" onClick={handleLogin}/>
    </div>
  )
}

export default Login
