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

    form {
        display: flex;
        flex-direction: column;
        margin: 50px 80px;

        label {
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: bold;
        }

        input, select  {
            border: none;
            border-bottom: 1px solid #ccc;
            font-size: 1rem;
            padding: 10px 20px;
            background-color: transparent;
            outline: none;
        }

        button{
            margin-top: 10px;
            padding: 10px 20px;
            border: 0;
            background: blueviolet;
            color: white;
            border-radius: 5px;
            font-weight: 700;
            font-size: 1rem;
        }
    }
` 