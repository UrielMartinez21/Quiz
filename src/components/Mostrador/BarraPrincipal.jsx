import React from 'react'
import Marcador from './Marcador'

const BarraPrincipal = ({ setComenzar, contador }) => {
  return (
    <div className='flex justify-around p-8 bg-yellow-500'>
      <Marcador className='basis-1/4' contador={contador} />
      <h2 className='basis-1/2'> Quiz de atematicas 1</h2>
      <button
        className='border-white border-2 py-1 px-4'
        onClick={() => { setComenzar(false) }}
      >
        Salir
      </button>
    </div>
  )
}

export default BarraPrincipal
