import React from 'react'
import BarraPrincipal from './BarraPrincipal'
import Preguntas from './Cuestionario/Preguntas'

const Cuestionario = ({setComenzar}) => {
  return (
    <>
      <BarraPrincipal setComenzar={setComenzar} />
      <div>
        <Preguntas/>
      </div>
    </>
  )
}

export default Cuestionario
