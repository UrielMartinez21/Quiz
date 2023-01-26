import React, { useState } from 'react'
import Bienvenida from './components/Bienvenida'
import Cuestionario from './components/Cuestionario/Cuestionario'

const App = () => {
  const [comenzar, setComenzar] = useState(false)
  const [contador, setContador] = useState(0)
//----------------------| Valor que regresara |----------------------
  return (
    <>
      {!comenzar ?
        <Bienvenida setComenzar={setComenzar} />
        :
        <Cuestionario setComenzar={setComenzar} contador={contador} setContador={setContador} />
      }
    </>
  )
}

export default App
