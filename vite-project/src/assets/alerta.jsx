const Alerta=()=>{alert("You pressed a key inside the input field");}

const Otro=()=>{
  return ( <button onClick={()=>(Alerta())}>otro componente</button> )
}

export default Alerta