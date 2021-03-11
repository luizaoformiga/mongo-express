import React, { useState, useEffect } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:8007/users')
      .then(response => response.json())
      .then(response => { setUsers({...users, users: response })
      .catch(error => console.log("ERROR: " + error))
    })
  })

  return (
    <>
    <h1>ola</h1>
      {users.map((login, data) => (
        <li key={data}>
          <h2><strong>Título: {login.email}</strong></h2>
          <p>Primeiro Nome: {login.firstName}</p>
          <p>sobrenome: {login.lastName}</p>
        </li>
      ))}
    </>  
  );
};
