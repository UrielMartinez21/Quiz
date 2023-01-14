import React from 'react'

const Pregunta = ({ pregunta, opciones, respuesta }) => {
//--------------------| Valor que regresara |--------------------
  return (
    <div className='border-dashed border-2 border-red-700'>
      <div className='object-top'>{pregunta}</div>
      <div className='columns-2'>
        <div>Opcion a: {opciones[0]}</div>
        <div>Opcion b: {opciones[1]}</div>
        <div>Opcion c: {opciones[2]}</div>
        <div>Opcion d: {opciones[3]}</div>
      </div>
      <div>La respuesta es: {respuesta}</div>
    </div>
  )
}

export default Pregunta
