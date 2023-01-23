import React from 'react'

const Bienvenida = ({ setComenzar }) => {
  return (
    <>
      <header className='bg-yellow-500 h-96 p-48 text-center'>
        <h1 className='font-bold'>
          Bienvenido al quiz
        </h1>
        <button
          className='bg-violet-800 uppercase rounded-full my-10 border-white border-2 p-4'
          onClick={() => setComenzar(true)}
          >
          Comenzar
        </button>
      </header>
      <main className='text-center'>
        <p>Este es un cuestionario de matematicas 1</p>
        <p>Temario</p>
        <ul>
          <li>Sumas</li>
          <li>Restas</li>
          <li>Multiplicacion</li>
          <li>Divisiones</li>
        </ul>
      </main>
    </>
  )
}

export default Bienvenida
