import React, { useState } from 'react'
import BarraPrincipal from './BarraPrincipal'
import Preguntas from './Cuestionario/Preguntas'

//---> Componente principal de preguntas
const Cuestionario = ({ setComenzar }) => {
  const [contador, setContador] = useState(0)
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
