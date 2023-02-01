import { useState } from "react"

export const Contador=()=>{

    const  [valor,setvalor]= useState(0)
    var operandoa;
    var operandob;
    var operacion;

    var sumar=()=>{var pantalla2 = document.getElementById("pantalla2").value = pantalla2 = document.getElementById("pantalla").value
     {borrar}
    
     operacion ="+";}
    
    
    var restar=()=>{setvalor(valor-1)}

    var multiplicar=()=>{setvalor(valor*1)}

    var dividirr=()=>{setvalor(valor/1)}


    var cero=()=> { var pantalla = document.getElementById("pantalla").value
                                  document.getElementById("pantalla").value = pantalla + "0"}
    var uno=()=> { var pantalla = document.getElementById("pantalla").value
                                  document.getElementById("pantalla").value = pantalla + "1"}
    var dos=()=> { var pantalla = document.getElementById("pantalla").value
                                  document.getElementById("pantalla").value = pantalla + "2"}
    var tres=()=> { var pantalla = document.getElementById("pantalla").value
                                  document.getElementById("pantalla").value = pantalla + "3"}
    var cuatro=()=> { var pantalla = document.getElementById("pantalla").value
                                  document.getElementById("pantalla").value = pantalla + "4"}
    var cinco=()=> { var pantalla = document.getElementById("pantalla").value
                                     document.getElementById("pantalla").value = pantalla + "5"}
    var seis=()=> { var pantalla = document.getElementById("pantalla").value
                                     document.getElementById("pantalla").value = pantalla + "6"}
    var siete=()=> { var pantalla = document.getElementById("pantalla").value
                                     document.getElementById("pantalla").value = pantalla + "7"}
    var ocho=()=> { var pantalla = document.getElementById("pantalla").value
                                     document.getElementById("pantalla").value = pantalla + "8"}
    var nueve=()=> { var pantalla = document.getElementById("pantalla").value
                                     document.getElementById("pantalla").value = pantalla + "9"}
   
                    function igual(){
                        operandob = document.getElementById("pantalla").innerHTML = pantalla;
                    
                            
                            if(operacion== "+"){
                            
                            var pantalla= document.getElementById("pantalla").value  =parseFloat(pantalla = document.getElementById("pantalla").value)+ parseFloat( pantalla = document.getElementById("pantalla2").value);
                            pantalla = document.getElementById("pantalla2").value = "";
                        }
            
                        else if(operacion=="-"){
                            var pantalla= document.getElementById("pantalla").value = (pantalla2= document.getElementById("pantalla2").value) - (pantalla= document.getElementById("pantalla").value);
                            pantalla2 = document.getElementById("pantalla2").value = "";
                        }
            
                        else if(operacion=="x"){
                            var pantalla= document.getElementById("pantalla").value = (pantalla= document.getElementById("pantalla").value) * (pantalla= document.getElementById("pantalla2").value);
                            pantalla2 = document.getElementById("pantalla2").value = "";
                        }
            
                        else if(operacion=="/"){
                            var pantalla= document.getElementById("pantalla").value = (pantalla= document.getElementById("pantalla2").value) / (pantalla2= document.getElementById("pantalla").value);
                            pantalla2 = document.getElementById("pantalla2").value = "";
                        }
                        else if(operacion=="%"){
                            var pantalla= document.getElementById("pantalla").value = (pantalla= document.getElementById("pantalla").value) * (pantalla= document.getElementById("pantalla2").value)/100 ;
                            pantalla2 = document.getElementById("pantalla2").value = "";
                        }
                        
                        
                    }

                    var borrar=()=>{
                        var pantalla = document.getElementById("pantalla").value
                            document.getElementById("pantalla").value = pantalla2 = "";}
        



        

    return (
        <>
            
            <h1>calculadora</h1>

        <input type="number" name="pantalla" id="pantalla" />
        <input type="number" name="pantalla" id="pantalla2" />
            
            <br />

                <button type="button" class="btn btn-primary" onClick={sumar}>+</button>
                <button type="button" class="btn btn-primary" onClick={restar}>-</button>
                <button type="button" class="btn btn-primary" onClick={multiplicar}>*</button>
                <button type="button" class="btn btn-primary" onClick={dividirr}>/</button>


                <button type="button" class="btn btn-primary" onClick={cero}>0</button>
                <button type="button" class="btn btn-primary" onClick={uno}>1</button>
                <button type="button" class="btn btn-primary" onClick={dos}>2</button>
                <button type="button" class="btn btn-primary" onClick={tres}>3</button>
                <button type="button" class="btn btn-primary" onClick={cuatro}>4</button>
                <button type="button" class="btn btn-primary" onClick={cinco}>5</button>
                <button type="button" class="btn btn-primary" onClick={seis}>6</button>
                <button type="button" class="btn btn-primary" onClick={siete}>7</button>
                <button type="button" class="btn btn-primary" onClick={ocho}>8</button>
                <button type="button" class="btn btn-primary" onClick={nueve}>9</button>

                <button type="button" class="btn btn-primary" onClick={igual}>=</button>
              
        </>
    )
}

export default Contador