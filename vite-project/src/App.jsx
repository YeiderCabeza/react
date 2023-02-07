import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const [valor1, setValor1]=useState("");
  const [valor2, setvalor2]=useState("");
  const [opera, setOp]=useState("");

  const Operador = (i) => {
    if (opera == "") {
      setvalor2(parseFloat(valor1));
      setOp(i.target.value);
      setValor1("");
    } else {
      setOp(i.target.value);
    }
  };

  const Resultado =()=>{
    if(opera == "+"){
      setValor1(parseFloat(valor1) + valor2);
      setOp("");
      setValor2("");
     
    }
    if(opera == "-"){
      setValor1(parseFloat(valor2) - valor1);
      setOp("");
      setValor2("");
    }
    if(opera == "/"){
      setValor1(parseFloat(valor2) / valor1);
      setOp("");
      setValor2("");
    }
    if(opera == "*"){
      setValor1(parseFloat(valor1) * valor2);
      setOp("");
      setValor2("");
    }
    if(opera == "%"){
      setValor1(parseFloat(valor1) * valor2/100);
      setOp("");
      setValor2("");
    }
    
  }

  const Pantalla =()=>{
    return(
      <input type="text" value={valor1} />
    )
  }

  function Botones(props){
    return(
      <button  class="btn btn-dark" onClick={() => setValor1(valor1 + (props.num))}>{props.num}</button>
    )
  } 

  function BtnOpera(props){
    return(
      <button class="btn btn-danger" onClick={Operador} value={props.num}>{props.num}</button>
    )
  } 

  function Igual(props){
    return(
      <button class="btn btn-danger" onClick={Resultado} value={props.num}>{props.num}</button>
    )
  } 

  const Eliminar =(props)=>{
    return(
      setValor1("")
    )
  }

  function Borrar(props){
    return(
      <button class="btn btn-danger" onClick={Eliminar} value={props.num}>{props.num}</button>
    )
  } 


  return (
    <>
        <Pantalla/><br /> <br />
        <Botones num="1"/>
        <Botones num="2"/>
        <Botones num="3"/>
        <Botones num="4"/>
        <Botones num="5"/>
        <Botones num="6"/>
        <Botones num="7"/>
        <Botones num="8"/>
        <Botones num="9"/>
        <Botones num="0"/><br />
  
        <BtnOpera num="%"/>
        <BtnOpera num="*"/>
        <BtnOpera num="/"/>
        <BtnOpera num="+"/>
        <BtnOpera num="-"/>
        <Igual num="="/>
        <Borrar num="⌫"/>
      
    
    </>
    
  )
}

export default App
