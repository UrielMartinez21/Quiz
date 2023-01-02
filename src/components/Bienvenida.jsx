import React from 'react'

const Bienvenida = ({ setComenzar }) => {
  return (
    <div className='py-60 text-center bg-amber-500 rounded'>
      <h1 className='font-bold'>
        Bienvenido al quiz de matematicas 1
      </h1>
      <button
        className='bg-red-500 uppercase rounded-full my-5'
        onClick={() => setComenzar(true)}
      >
        Comenzar
      </button>
    </div>
  )
}

export default Bienvenida