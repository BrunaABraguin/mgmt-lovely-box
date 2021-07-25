import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;  
    }
    html {
        font-size: 1rem;
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        height: 100%;
    }
    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        color: #2c3e50;
        background-color: #f7f7f7;
    }
    a {
        text-decoration: none;
    }

    td{
        max-width: 25rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 10px 50px;                                        
        border-bottom: 1px solid #ccc;
    }

    th{
        text-align: center;
        padding: 20px 50px;
        border-bottom: 0.25px solid #ccc;  
    }

    .text-capitalize {        
        text-transform: capitalize;
    }
` 