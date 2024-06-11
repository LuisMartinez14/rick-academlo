import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
const FondoTierra ='#ebe480'
const FondoTierra2='#6b7132'
const FondoAgua='#043c6e'
const FondoAgua2='#a6cccc'
const Anima = keyframes`
from{transform:rotateY(180deg)}
to{transform:rotateY(0deg)}
`

const Carta = styled.div`
width:200px;
height:300px;
margin:5px 5px;
border-radius:10px;
border:2px black solid;
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(5,1fr);
z-index:2;
margin:25px 25px;
backface-visibility:hidden;
transform:rotateY(0deg);
transform-style:preserve-3d;
animation:${Anima} 2s;
box-shadow:5px 5px 5px black;
`
const TrasFondo1="../src/assets/TrasFondo1.jpg";
const TrasFondo2="../src/assets/TrasFondo2.jpg";
const TrasFondo3="../src/assets/TrasFondo3.jpg";
const CartaTras=styled.div`
position:absolute;
margin:0 0;
transform:rotateZ(180deg) rotateX(180deg);
width:200px;
height:300px;
border-radius:10px;
border:2px black solid;
backface-visibility:hidden;
background-size:contain;
background-image:url(${props=>props.foto % 2===0 ? "../src/assets/TrasFondo1.jpg"  : "../src/assets/TrasFondo2.jpg" });
`

const Titulo = styled.div`
grid-area:1/1/2/2;
background-color:${props=>props.fondo % 2===0 ? '#6b7132'  :props.fondo % 3===0  ? '#60a85f' : '#043c6e'};
display:flex;
justify-content:center;
align-items:center;
color:white;
border-top-left-radius:10px;
border-top-right-radius:10px;
`
const Contenido = styled.div`
grid-area:5/1/6/2;
background-color:${props=>props.fondo % 2===0 ?'#ebe480':props.fondo % 3===0  ? '#88e23b': '#a6cccc'};
display:flex;
justify-content:center;
align-items:center;
border-top-style:solid ;
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;
`
const Imagen = styled.img`
grid-area:2/1/5/2;
width:100%;
height:100%;
border-top-style:solid;

`
const CajaConteiner = styled.div`
width:90%;
height:70%;
border-radius:5px;
display:flex;
align-items:center;
font-size:25px;
justify-content:space-evenly;

`
const CajaConteiner2 = styled.button`
width:90%;
font-size:20px;
height:70%;
border-radius:5px;
background-color:#fcfd96;
border:solid black 1px;
cursor:pointer;
transition:0.2s;
box-shadow:5px 5px 1px black;
&:hover{
background-color:#ffff00;
}
&:active{
  box-shadow:1px 1px 1px black;
}
`
const Bola = styled.div`
width:25px;height:25px;
border:1px black solid;
background-color:${props=>props.verde==='Alive'?'green':'red'};
border-radius:50%;
`

export const Cards = ({titulo,foto,numero,estado}) => {
  return (
    <>
  <Carta>
<Titulo fondo={numero}>
<CajaConteiner fondo={numero} ><p>#{numero} {titulo}</p> <Bola verde={estado} ></Bola> </CajaConteiner>
</Titulo>
<Imagen src={foto}></Imagen>
<Contenido fondo={numero}>
<CajaConteiner2   >⭐ Agregar a Fav </CajaConteiner2>
</Contenido>
<CartaTras foto={parseInt(numero)} >Hola</CartaTras>
  </Carta>


    </>
  )
}
