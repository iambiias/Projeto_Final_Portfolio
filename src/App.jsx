import React from "react";
import {createGlobalStyle} from "styled-components";
import Navegacao from "./Componentes/Navegacao.jsx";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: black;
    color: white;
    font-family: "merienda" cursive;

}
`;

function App() {
    return(
        <>
        <GlobalStyle/>
        <Navegacao/>
        </>
    );

}

export default App;
