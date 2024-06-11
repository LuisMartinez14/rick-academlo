import React, { useEffect, useState } from 'react'
import { Cards } from '../COMPONENTES/Cards'
import styled from 'styled-components'
import { Busqueda } from '../COMPONENTES/Busqueda'
const Todo = styled.div`
width:100%;
`
const Envoltura = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
`
export const Principal = () => {
const [lista, setLista] = useState([])
    const [datos,setDatos] = useState('')
useEffect(() => {
async function traerDatos(){
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${datos}`)
  const data = await response.json();
  setLista(data.results)
}
traerDatos()
}, [datos])

  
  return (
    <>
    <Todo>
   <Busqueda
   traer={datos}
   setTraer={setDatos} 
    />
   <Envoltura>

    {
lista.map((elementos)=>{
  return (<Cards titulo={elementos.name} 
  foto={elementos.image}
  numero={elementos.id}
  estado={elementos.status}
  key={elementos.id}
  />)
})
    }
   </Envoltura>
  
    </Todo>
  
    </>
  )
}
