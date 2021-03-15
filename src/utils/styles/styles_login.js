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
  background-image: linear-gradient(rgba(25, 29, 58, 0.829), rgba(25, 29, 58, 0.829)), url('./src/utils/img/mulher-feliz.png') ;
  background-repeat: no-repeat;
  background-size: cover;  

  @media (max-width: 800px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 93px;

  color: #FFFFFF;

  @media (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const P = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 53px;

  color: #790242;

  @media (max-width: 800px) {
    font-size: 30px;  
    width: 50%;
  }
`;

export const Input = styled.input`
  width: 380px;
  height: 60px;
  left: 840px;
  top: 337px;

  font-size: 30px;
  font-family: "Segoe UI";
  padding-left: 10px;
  margin-top: 40px;

  border: none;

  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #8E8C8C;
  border-radius: 5px;

  &:hover{
    color: #790242;
    border: 4px solid #790242; 
    transition: 0.3s;
  }

  @media (max-width: 800px) {
    width: 280px;
    height: 50px;
  }
`;

export const DivLogin = styled.div`
  width: 628px;
  height: 596.6px;
  left: 710px;
  top: 216px;

  background: #0E101C;
  border-radius: 10.4667px;
  text-align: center;
  display: flex;  
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 800px) {
    width: 320px;
    align-items: center;
    margin-bottom: 250px;
  }
`;

export const Button = styled.button`
  width: 380px;
  height: 100px;
  left: 840px;
  top: 636px;
  
  font-family: "Segoe UI";
  font-size: 40px;
  color: #ffffff;
  margin-top: 100px; 

  background: #05081F;
  border: 4px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 5px;

  &:hover{
    color: #790242;
    border: 4px solid #790242; 
    transition: 0.5s;
  }

  @media (max-width: 800px) {
    width: 280px;
    height: 80px;
  }
`;



