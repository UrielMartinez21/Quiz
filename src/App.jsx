import React, { useState } from 'react'
import Bienvenida from './components/Bienvenida'
import Ejercicios from './components/Ejercicios'

const App = () => {
  const [comenzar, setComenzar] = useState(false)

//----------------------| Valor que regresara |----------------------
  return (
    <>
      {comenzar ?
        <Ejercicios setComenzar={setComenzar} /> :
        <Bienvenida setComenzar={setComenzar} />
      }
    </>
  )
}

export default App
