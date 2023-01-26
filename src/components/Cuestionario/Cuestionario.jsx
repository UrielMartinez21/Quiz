import React from 'react'
import BarraPrincipal from '../Mostrador/BarraPrincipal'
import Preguntas from './Preguntas'

//---> Componente principal de preguntas
const Cuestionario = ({ setComenzar, contador, setContador }) => {
//--------------------| Valor que regresara |--------------------
  return (
    <>
      <BarraPrincipal setComenzar={setComenzar} contador={contador} />
      <div>
        <Preguntas setContador={setContador} contador={contador} />
      </div>
    </>
  )
}

export default Cuestionario
