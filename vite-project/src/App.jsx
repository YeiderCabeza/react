
import './App.css'


function App() {
 
function Pantalla(props){
    
  return (
    <>
        <input type="number" name="pantalla" id="pantalla" />
        <input type="number" name="pantalla" id="pantalla2" /> <br />
    </>
    
  )
}
const Boton=()=>{boton(num);}

function Botones(props){
  return ( <button type="button" class="btn btn-primary" onClick={Boton}>{props.num}</button> )
}




  return (
    <>
        <Pantalla/>
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
      
    
    </>
    
  )
}

export default App
