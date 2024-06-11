import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Lugar } from "./PAGINAS/Lugar"
import { Principal } from "./PAGINAS/Principal"
import { Error } from "./PAGINAS/Error"
import { NavBar } from "./BARRADENAV/NavBar"
import { Favoritos } from "./PAGINAS/Favoritos"

function App() {

  return (
    <>
      <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path="/" element={<Principal/>} />      
      <Route path="/lugares" element={<Lugar/>}/> 
      <Route path="/favoritos" element={<Favoritos/>}/> 
      <Route path="*" element={<Error/>}/> 
      </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
