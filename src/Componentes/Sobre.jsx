import React from 'react';
import * as S from './Style.jsx';
import Vnw from './ImagensPortifolio/vnw.png';
import Html from './ImagensPortifolio/iconehtml5.png';
import Css from './ImagensPortifolio/iconecss.png';
import Js from './ImagensPortifolio/iconejs.png';

function Sobre (){
return (
    <S.MainSobre>
        <S.SectionDoSobre>
            <h2>ESTUDOS</h2>
            <S.Card>
                <S.DivCard>
                    <h2>Desenvolvimento Front-End</h2>
                    <h3>Agosto/2023 - em curso</h3> 
                    <img src={Vnw} alt='Logo do VNW'/>
                
                </S.DivCard>

                <S.DivCardRedes>
                    <h2>Técnico em Redes de Computadores </h2>
                        <h3>Fevereiro/2024 - em curso</h3>
                 
                </S.DivCardRedes>

            </S.Card>
        </S.SectionDoSobre>
        <S.SectionDoSobre>
            <h2>HABILIDADES</h2>
            <S.Card>
                <S.DivCard2>
                    <div>
                        <h3>HTML5</h3>
                        <img src={Html} alt='Logo do html5'/>
                    </div>
                    <div>
                        <h3>CSS</h3>
                        <img src={Css} alt='Logo do css'/>
                    </div>
                    <div>
                        <h3>JavaScript</h3>
                        <img src={Js} alt='Logo do js'/>
                    </div>
                </S.DivCard2>
            </S.Card>
        </S.SectionDoSobre>
        <S.SectionDoSobre>
            <h2>PROFISSIONAL</h2>
            <S.Card>
                <S.DivCard>
                    <h2>Enfermeira Gerontóloga 🩺💉💊</h2>
                   
                </S.DivCard>
            </S.Card>
        </S.SectionDoSobre>
    </S.MainSobre>
);
}

export default Sobre;