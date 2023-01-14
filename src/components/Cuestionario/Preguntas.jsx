import React from 'react'
import Pregunta from './Pregunta'
import { cuestionario } from '../../data/cuestionario'

const Preguntas = () => {
  const preguntasCuestionario = cuestionario
  return (
    <div>
      {preguntasCuestionario.map((pregunta) => ( 
        <Pregunta
          key={pregunta.id}
          pregunta={pregunta.pregunta}
          opciones={pregunta.opciones}
          respuesta={pregunta.respuesta}
        />
      ))}
    </div>
  )
}

export default Preguntas
