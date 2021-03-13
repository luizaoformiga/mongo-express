import React, { useState, useEffect } from 'react';
import { GlobalStyle, Body, Button } from '../utils/styles/styles_login';
import { DivMenu, H1Menu } from '../utils/styles/styles_menu';

export default function Menu() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:7769/sign')
      .then(response => response.json())
      .then(response => { setUsers({...users, users: response })
      .catch(error => console.log("ERROR: " + error))
    })
  })

  return (
    <Body>
    <GlobalStyle/>
      <DivMenu>
        <H1Menu>Hello! Welcome!</H1Menu>
        <Button>Exit</Button>
      </DivMenu>   
    </Body>  
  );
};
