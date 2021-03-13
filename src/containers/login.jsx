import React, { useState } from 'react';
import api from '../api/api';
import { Body, DivLogin, GlobalStyle, H1, Input, P, Button } from '../utils/styles/styles_login';

export default function Login() {
  const [form, setForm] = useState({
    email_user: '', 
    password_user: ''
  })

  const handleSubmit = async () => {
    const data = {
      email: form.email_user,
      password: form.password_user 
    }
    
    if(form.email === '' && form.password === '') {
      const response = await api.post('/', data);
 
      if(response.status === 201) {
        window.location.href = '/login';
  
      } else {
        alert('Error registering user');
      }

    } else {
      alert('Please enter your details in the fields below!');
    }

  }

  return(
    <div>
      <GlobalStyle/>
      <Body>
        <H1>To be Herobank is to reinvent your financial life</H1>
        <DivLogin>
          <P>Please. Enter in your account.</P>
          <Input 
            type="email"
            value={form.email_user} 
            onChange={event => setForm(event.target.value)}
            placeholder="Email"
          />
          <Input 
            type="password"
            value={form.password_user} 
            onChange={event => setForm(event.target.value)}
            placeholder="Password"
          />
          <Button onClick={handleSubmit()}>GO!</Button>
        </DivLogin>
      </Body>
    </div>
  )
}
