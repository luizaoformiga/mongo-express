import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;

export const Body = styled.body`
  background-color: #191d3a;
  height: 1024px;
  width: 1440px;

  @media (min-width: 1024px) {
    background-color: #191d3a;
    height: 1024px;
    width: 1440px;
  }
`;

export const H1 = styled.h1`
  position: absolute;
  width: 595px;
  height: 288px;
  left: 51px;
  top: 273px;

  font-family: "Segoe UI";
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 96px;

  color: #FFFFFF;
`;

export const P = styled.p`
  width: 516px;
  height: 53px;
  left: 772px;
  top: 241px;

  font-family: "Segoe UI";
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 53px;

  color: #790242;  
`;

export const Input = styled.input`
  width: 380px;
  height: 80px;
  left: 840px;
  top: 337px;

  font-size: 30px;
  font-family: "Segoe UI";
  padding-left: 10px;
  margin-top: 40px;

  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #8E8C8C;
  border-radius: 5px;
  
  &:hover{
    color: #790242;
    border: 4px solid #790242; 
    transition: 0.3s;
  }
`;

export const DivLogin = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  left: 720px;
  top: 210px;

  padding: 20px;

  display: flex;
  flex-direction: column; 
  text-align: center;
  align-items: center;

  background: #0E101C;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 380px;
  height: 100px;
  left: 840px;
  top: 636px;
  
  font-family: "Segoe UI";
  font-size: 40px;
  color: #ffffff;
  margin-top: 80px; 

  background: #05081F;
  border: 4px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 5px;

  &:hover{
    color: #790242;
    border: 4px solid #790242; 
    transition: 0.5s;
  }
`;

