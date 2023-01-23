import React from 'react'

const Marcador = ({ className, contador }) => {
  return (
    <div className={className}>
      Puntación: {contador} puntos
    </div>
  )
}

export default Marcador
