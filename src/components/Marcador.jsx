import React from 'react'

const Marcador = ({ className, contador }) => {
  return (
    <div className={className}>
      El marcador es: {contador}
    </div>
  )
}

export default Marcador
