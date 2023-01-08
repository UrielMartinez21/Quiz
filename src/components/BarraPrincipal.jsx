import React from 'react'
import Marcador from './Marcador'

const BarraPrincipal = ({ setComenzar }) => {
  return (
    <header className='flex flex-row bg-red-500'>
      <Marcador className='basis-1/4'/>
      <h2 className='basis-1/2'>Matematicas 1</h2>
      <input
        type="button"
        value="Salir"
        className='basis-1/4'
        onClick={()=>{setComenzar(false)}}
      />
    </header>
  )
}

export default BarraPrincipal
