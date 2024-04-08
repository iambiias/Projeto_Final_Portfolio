import React from "react";
import * as S from "./Style.jsx";
import Wiki from "./ImagensPortifolio/wiki.png"
import Witcher from "./ImagensPortifolio/witcher.png"
import Cartoon from "./ImagensPortifolio/cartoon.png"

function Projetos() {
    return (
        <S.SectionProjetos>
        <S.Projetinhos>
          <img src={Wiki} alt="Primeiro projeto wiki" />
          <h2> Wiki </h2>
          <h3>HTML</h3>
        </S.Projetinhos>
        


<S.Projetinhos>
  <img src={Witcher} alt="The Witcher" />
  <h2> The Witcher </h2>
  <h3>HTML + CSS</h3>
</S.Projetinhos>

<S.Projetinhos>
  <img src={Cartoon} alt="Cartoon Network" />
  <h2> Cartoon Network </h2>
  <h3>React</h3>
</S.Projetinhos>
</S.SectionProjetos>
      
    
    );
}

export default Projetos;