import React from 'react'
import Pregunta from './Pregunta'
import { cuestionario } from '../../data/cuestionario'

const Preguntas = ({ setContador, contador }) => {
  const preguntasCuestionario = cuestionario      // Importan preguntas

//--------------------| Valor que regresara |--------------------
  return (
    <>
      {preguntasCuestionario.map((pregunta) => ( 
        <Pregunta
          key={pregunta.id}
          pregunta={pregunta.pregunta}
          opciones={pregunta.opciones}
          respuesta={pregunta.respuesta}
          setContador={setContador}
          contador={contador}
        />
      ))}
    </>
  )
}

export default Preguntas
