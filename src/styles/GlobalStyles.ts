import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`



    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
    height: 100%;
    background-color: #7a28ef;
    overflow-x: hidden;

  }
  *, button, input {
    border: 0;
    outline: 0;
  }

  button {
      cursor: pointer;
      background-color: transparent;
  }




`;
