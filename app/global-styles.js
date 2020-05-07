import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  #app {
    background-color: #3041db;
    color: white;
    min-height: 100%;
    min-width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  }

  p,
  label {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
