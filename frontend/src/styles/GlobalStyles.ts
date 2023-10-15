import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  img {
    width: 25px;
  }
  #modal {
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #modal:empty {
    display: none;
  }

`;

export default GlobalStyle;
