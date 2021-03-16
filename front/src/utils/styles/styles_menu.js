import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;

export const DivMenu = styled.div`
  position: absolute;
  width: 750px;
  height: 609px;
  left: 345px;
  top: 207px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  background: #0E101C;
  border-radius: 10px;
`;


export const H1Menu = styled.h1`
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