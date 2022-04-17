import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: #071b2e;
    height: 100%;
    font-family: 'Fredoka', sans-serif;
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;
