import React, { useEffect, useState } from 'react'

const Pregunta = ({ pregunta, opciones, respuesta, setContador, contador }) => {
  const [valor, setValor] = useState(null)        // Comparara con la respuesta correcta
  const [termino, setTermino] = useState(false)   // Deshabilita botones y muestra opcion correcta
  const [mensaje, setMensaje] = useState("")      // Mensaje si fallo o no

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
    <div className='my-8'>
      <div className='border-solid border-2 border-yellow-500'>{pregunta}</div>
      <div className='grid grid-cols-2 gap-4 place-content-start h-48'>
        <button onClick={() => setValor(opciones[0])} disabled={termino} className='border-double border-4 border-sky-500 w-28' >
          Opcion a: {opciones[0]}
        </button>
        <button onClick={() => setValor(opciones[1])} disabled={termino} className='border-double border-4 border-sky-500 w-28'>
          Opcion b: {opciones[1]}
        </button>
        <button onClick={() => setValor(opciones[2])} disabled={termino} className='border-double border-4 border-sky-500 w-28'>
          Opcion c: {opciones[2]}
        </button>
        <button onClick={() => setValor(opciones[3])} disabled={termino} className='border-double border-4 border-sky-500 w-28'>
          Opcion d: {opciones[3]}
        </button>
      </div>
      {termino && mensaje}
    </div>
  )
}

export default Pregunta
