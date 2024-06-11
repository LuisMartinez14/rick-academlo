import React, { useState } from 'react'
import styled from 'styled-components'

const Envoltura = styled.div`
width:100%;height:30px;
display:flex;align-items:center;justify-content:space-between;
padding:0 20px;box-sizing:border-box;
margin-top:20px;
`
const Botones = styled.button`
width:30px;height:30px;background-color:whitesmoke;
border-radius:50%;border-style:none;cursor:pointer;
font-size:100%;text-align:center;display:flex;justify-content:center;
`
const Texto = styled.input`
width:80%; height:90%;font-size:20px;text-align:center;
border-radius:20px;
`

const Envoltura2 =styled.form`
width:50%;height:100%;
justify-content:center;
display:flex;
`
export const Busqueda = ({traer, setTraer}) => {
const [datos,setDatos] = useState('')
    function click(e){
e.preventDefault();
 }
 function Lectura(e){
  console.log(`valor de  ${e.target.value}`)
  setTraer(e.target.value)
  console.log(traer)
 }
  return (
    <Envoltura>
    <Botones>👈</Botones>
    <Envoltura2>
    <Texto onChange={Lectura} placeholder='Buscar Personaje' ></Texto>
    </Envoltura2>
    <Botones>👉</Botones>
    
    </Envoltura>
  )
}
