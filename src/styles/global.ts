import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  body {
    background-color: ${Colors.gray900};
    color: ${Colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
`;
