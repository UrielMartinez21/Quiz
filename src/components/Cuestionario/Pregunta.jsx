import React, { useEffect, useState } from 'react'

const Pregunta = ({ pregunta, opciones, respuesta, setContador, contador }) => {
  const [valor, setValor] = useState(null)        // Comparara con la respuesta correcta
  const [termino, setTermino] = useState(false)   // Deshabilita botones y muestra opcion correcta
  const [mensaje, setMensaje] = useState("")

  //---> Verifica si la respuesta es correcta
  useEffect(() => {
    if (valor!==null) {
      if (valor === respuesta) {
        console.log("Respuesta correcta")
        setContador(contador + 1)
        setMensaje("Felicidades")
      } else {
        console.log("Respuesta incorrecta")
        setMensaje(`Fallaste, la respuesta era: ${respuesta}`)
      }
      setTermino(true)
    }
  }, [valor])

//--------------------| Valor que regresara |--------------------
  return (
    <div className='border-dashed border-2 border-red-700'>
      <div>{pregunta}</div>
      <div className='grid grid-cols-2 gap-4 place-content-center'>
        <button onClick={() => setValor(opciones[0])} disabled={termino} className={termino?"bg-red-500":"bg-green-500"} >
          Opcion a: {opciones[0]}
        </button>
        <button onClick={() => setValor(opciones[1])} disabled={termino} >
          Opcion b: {opciones[1]}
        </button>
        <button onClick={() => setValor(opciones[2])} disabled={termino} >
          Opcion c: {opciones[2]}
        </button>
        <button onClick={() => setValor(opciones[3])} disabled={termino} >
          Opcion d: {opciones[3]}
        </button>
      </div>
      {termino && mensaje}
    </div>
  )
}

export default Pregunta
