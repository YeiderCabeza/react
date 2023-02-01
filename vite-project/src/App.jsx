import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador from './assets/contador'

function App() {
 
const Nuevo=() =>{

  return (
    <>
        <p>nuevo componente</p>
    </>
    
  )
}
const Alert=()=>{alert("You pressed a key inside the input field");}

const Otro=()=>{
  return ( <button onClick={()=>(Alert())}>otro componente</button> )
}

var c = "variable con var"
var b ="esto es una prueba"


  return (
    <>
        
        <Contador/>
      
    </>
    
  )
}

export default App
