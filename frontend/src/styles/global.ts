import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    button {
        background-color: none;
        border: none;
        outline: none;
    }

    html, body {
        height: 100vh;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`

export default GlobalStyle