import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Cabeza from '../assets/FondoCabeceraRick.jpg'
import { useState } from 'react';


const Bloque = styled.header`
width:100%;
height:200px;
background-color:#252525;
display:flex;
color:lightgreen;
justify-content:center;
align-items:center;
letter-spacing:2px;
background-image:url(${Cabeza});
background-size:contain;
background-repeat:no-repeat;
background-position:right;
font-size:xx-large;
position:relative;
`
const Barra = styled.ul`
display:inline-flex;
`
const Enlace = styled.li`
border-radius:${props=>props.navi ? '5px 5px 0 0' : '0 0 5px 5px'};
text-decoration:none;
list-style-type:none;
margin:0 5%;
font-weight:bold;
transform:translateY(${props=>props.navi ? '-100%' : '0'});
padding:3% 3% 0% 3%;
background-color:yellow;
letter-spacing:5px;
transition:0.5s;
& a:nth-child(n){
  width:100%;
  height:100%;
  display:block;
}
`
export const NavBar = () => {
const [paginas, setPaginas] = useState([null,null,null]);
function cambiar(e){
let caja = e.target.className;
let tablero = [false, false, false]
if(caja.includes('1')){tablero[0]=true;}
if(caja.includes('2')){tablero[1]=true;}
if(caja.includes('3')){tablero[2]=true;}
setPaginas(tablero)
};
  return (
    <>
    <Bloque>
    <h1>Rick And Morty</h1>
    </Bloque>
    <Barra>
        <Enlace  onClick={cambiar} navi={paginas[0]} >
            <NavLink className="1" style={{textDecoration:'none'}} to='/' >PRINCIPAL</NavLink>
        </Enlace>
        <Enlace  onClick={cambiar} navi={paginas[1]} >
            <NavLink className="2" style={{textDecoration:'none'}} to='/lugares' >LOCATION</NavLink>

        </Enlace>
        <Enlace  onClick={cambiar} navi={paginas[2]} >
            <NavLink className="3" style={{textDecoration:'none'}} to='/favoritos' >FAVORITOS</NavLink>

        </Enlace>
    </Barra>
    </>
  )
}
