import React from 'react';
import { Body, DivLogin, GlobalStyle, H1, Input, P, Button } from '../utils/styles/styles_login';

export default function Login() {
  return(
    <div>
      <GlobalStyle/>
      <Body>
        <H1>To be Herobank is to reinvent your financial life</H1>
        <DivLogin>
          <P>Please. Enter in your account.</P>
          <Input type="email" placeholder="Email"/>
          <Input type="password" placeholder="Password"/>
          <Button>GO!</Button>
        </DivLogin>
      </Body>
    </div>
  )
}
