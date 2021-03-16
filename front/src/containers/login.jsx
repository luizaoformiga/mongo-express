import React, { useState } from 'react';
import api from '../api/api';
//import { Body, DivLogin, GlobalStyle, H1, Input, P, Button } from '../utils/styles/styles_login';

export default function Login() {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const data = {
        email: formEmail,
        password: formPassword 
      }

      const response = await api.post('/login', data);
       
      if(response.status === 200) {
        return window.location.href = '/sign';

      } else {
        return window.location.href = '/login';
      }
        
    } catch (error) {
      return alert("ERROR", error);    
    }
  }  

  return(
    <body>
      <h1>To be Herobank is to reinvent your financial life</h1>
        <p>Please. Enter in your account.</p>
        <input 
          type="email"
          value={formEmail} 
          onChange={event => setFormEmail(event.target.value)}
          placeholder="Email"
        />
        <input 
          type="password"
          value={formPassword} 
          onChange={event => setFormPassword(event.target.value)}
          placeholder="Password"
        />
        <button onClick={() => handleSubmit()}>GO!</button>
    </body>
  )
}
