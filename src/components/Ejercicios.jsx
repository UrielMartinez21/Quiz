import React from 'react'
import Preguntas from './Preguntas'

const Ejercicios = ({ setComenzar }) => {
  return (
    <div className='text-center'>
      <h1>Ejercicios</h1>
      <button
        onClick={() => setComenzar(false)}
      >
        Salir
      </button>
      <Preguntas />
    </div>
  )
}

export default Ejercicios
