import styled from "styled-components"

export const Nav = styled.nav`
`
export const Lista = styled.ul`
width: 100%;
display: flex;
justify-content: space-around;
list-style: none;
height: 20vh;
align-items: center;
@media (min-width: 320px) and (max-width: 768px){
    display: flex; 
    flex-direction: column;
    height: 40vh;
    border: solid red;
}


a{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;

}

`;

//Estilização Inicio

export const P1 = styled.img`
   height: 50vh;
   border-radius: 10px;
  
    
`;

export const ContainerInicio = styled.main`
display: flex;
justify-content:space-evenly;
align-items: center;
padding-top: 3rem;

@media (min-width: 320px) and (max-width: 768px){
  display: flex;
  flex-direction: column;

  img{
    width: 50vw;
  }
}
`;

//------------ teste na navegação

export const Header = styled.header`
/* background-image: url("https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg");
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 80vh; */

`;

//Estilização Sobre
export const MainSobre = styled.main`
display: flex;
justify-content: space-evenly;
align-items:center;
`;

export const SectionDoSobre = styled.section`
height: 60vh;
width: 30vw;
margin-top: 3rem;
border: solid red 5px;
border-radius: 50px;
h2{
    text-align: center;
}
`;

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 50vh;
`;

export const DivCard = styled.div` 
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 50vh; 
h2{
    color: tomato;
}

h3{
    color: white;
    font-size: 1rem;
}

`;

export const DivCard2 = styled.div`
width: 70%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;

h3 {
    color: tomato;
}
div{
    display: flex;
    align-items: center;
    
}
`;
 export const DivCardRedes = styled.div`
 display:flex;
justify-content: space-evenly ;
flex-direction: column;
align-items: center;
height: 30vh;
h3 {


    color: white;
    font-size: 1rem;
    
}
h2{
    color: tomato;
}
 `
export const SectionProjetos = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
`
export const Projetinhos = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
align-items: center;
justify-content: space-evenly;
width: 30vw;

h2 {
    font-size: 2.5rem;
}

img{
    height: 30vh;
    width: 20vw;
    
}
`
