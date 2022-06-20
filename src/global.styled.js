import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        color: #333;
        line-height: 1.42857;
        font-size: 14px;
        font-weight: 400;
        font-family: Arial,Helvetica,sans-serif;
    }

`

export default GlobalStyled;