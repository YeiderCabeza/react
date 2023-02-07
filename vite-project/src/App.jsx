import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const [valor1, setValor1]=useState("");
  const [valor2, setvalor2]=useState("");
  const [op, setOp]=useState("");

  const Operador = (i) => {
    if (op == "") {
      setvalor2(parseFloat(valor1));
      setOp(i.target.value);
      setValor1("");
    } else {
      setOp(i.target.value);
    }
  };

  const Resultado =()=>{
    if(op == "+"){
      setValor1(parseFloat(valor1) + valor2);
    }
    if(op == "-"){
      setValor1(parseFloat(valor2) - valor1);
    }
    if(op == "/"){
      setValor1(parseFloat(valor2) / valor1);
    }
    if(op == "*"){
      setValor1(parseFloat(valor1) * valor2);
    }
    
  }

  const Pantalla =()=>{
    return(
      <input type="text" value={valor1} />
    )
  }

  function Botones(props){
    return(
      <button onClick={() => setValor1(valor1 + (props.num))}>{props.num}</button>
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


  return (
    <>
        <Pantalla/><br />
        <Botones num="1"/>
        <Botones num="2"/>
        <Botones num="3"/>
        <Botones num="4"/>
        <Botones num="5"/>
        <Botones num="6"/>
        <Botones num="7"/>
        <Botones num="8"/>
        <Botones num="9"/>
        <Botones num="0"/>
        <Botones num="="/>
        <BtnOpera num="*"/>
        <BtnOpera num="/"/>
        <BtnOpera num="+"/>
        <BtnOpera num="-"/>
        <Igual num="="/>
      
    
    </>
    
  )
}

export default App
