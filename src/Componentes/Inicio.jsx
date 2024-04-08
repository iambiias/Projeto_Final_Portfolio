import React from 'react';
import P1 from './ImagensPortifolio/p1.jpeg';

import * as S from "./Style.jsx";

function Inicio(){
    return(
        <S.ContainerInicio>
            <S.P1 src={P1} alt="imagem do perfil de Bianca"/>
            
            <div>
                
                <h2> Olá, me chamo Bianca Ferreira</h2>
                    <h2>venham navegar pelo o meu portifólio.</h2>
            </div>
        </S.ContainerInicio>
    )
}

export default Inicio;