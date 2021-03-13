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
`;

export const H1 = styled.h1`
  position: absolute;
  width: 595px;
  height: 297px;
  left: 102px;
  top: 313px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 93px;

  color: #FFFFFF;
`;

export const P = styled.p`
  width: 516px;
  height: 53px;
  left: 771px;
  top: 236px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
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

  border: none;

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

export const ImageStyle = styled.image`
  position: absolute;
  width: 1441px;
  height: 1024px;
  left: -1px;
  top: 0px;

  background: url('../img/mulher-feliz.png');
  border: 1px solid #000000;
  box-sizing: border-box;
`;



