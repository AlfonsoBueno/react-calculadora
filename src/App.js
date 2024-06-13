import { useState} from "react";
import { Pantalla,Boton} from "./elementos/ElementosCalculadora";

function App() {

  const [valorPantalla,setValorPantalla]=useState(false)
  const [num,setNum]=useState("")
  const [oldNum,setOldNum]=useState("")
  const [decimal,setDecimal]=useState(false)
  const [operador,setOperador]=useState("")

  function introducirNumero(e){
    const btnPulsado=e.target.value;
 
    if (num==="0")
      setNum(btnPulsado)
    else setNum(num+btnPulsado)
    
    
   }

  function operadorAdd(e){

    setValorPantalla(!valorPantalla)

    if ((operador==="")&&(num!==""))
      {
      setOperador(e.target.value);   
      setOldNum(num)
      setNum("")
      setDecimal(false)
      }
    else if(((operador!=="")&&(num!=="")&&oldNum!==""))
      {
        setOperador(e.target.value)
        igualTotal();
      }
  }


   function decimales(){
      if((decimal===false)&&(num.length>0))
        {
          setDecimal(true)
          setNum(num+".")
        }
   }

   function reset(){
      setNum("")
      setOldNum("")
      setOperador("")
      setDecimal(false)
   }

  function borrar()
  {
    num.length>=1?setNum(num.substring(0, num.length - 1)):setNum("")
  }

  function igualTotal(e){
    if (num!==""){

      if (operador!=="")
        {
          setOldNum(eval(oldNum + operador +num))
          setNum("")
          setDecimal(false)
        }

      if (e.target.value==="=")
        {
          setNum(eval(oldNum + operador +num))
          setOldNum("")
          setOperador("")
          setDecimal(false)

        }
      

    }
    
  }


  return (

    <div className="calculadora">
      <Pantalla>
        <div className="pantalla2">{oldNum} {operador}</div>
        <div className="pantalla1">{num}</div>
        
      </Pantalla>
      <Boton className="borrar" value="borrar" onClick={borrar}>BORRAR</Boton>
      <Boton className="operacion" value="+" onClick={operadorAdd}>+</Boton>
      <Boton className="operacion" value="-" onClick={operadorAdd}>-</Boton>
      <Boton value="7" onClick={introducirNumero}>7</Boton>
      <Boton value="8" onClick={introducirNumero}>8</Boton>
      <Boton value="9" onClick={introducirNumero}>9</Boton>
      <Boton value="*" className="operacion multiplicar" onClick={operadorAdd}>*</Boton>
      <Boton value="4" onClick={introducirNumero}>4</Boton>
      <Boton value="5" onClick={introducirNumero}>5</Boton>
      <Boton value="6" onClick={introducirNumero}>6</Boton>
      <Boton className="operacion" value="/" onClick={operadorAdd}>/</Boton>
      <Boton value="1" onClick={introducirNumero}>1</Boton>
      <Boton value="2" onClick={introducirNumero}>2</Boton>
      <Boton value="3" onClick={introducirNumero}>3</Boton>
      <Boton className="igual" value="=" onClick={igualTotal}>=</Boton>
      <Boton className="eliminar" value="C" onClick={reset}>C</Boton>
      <Boton value="0" onClick={introducirNumero}>0</Boton>
      <Boton value="." onClick={decimales}>.</Boton>
    </div>
  );
}

export default App;
