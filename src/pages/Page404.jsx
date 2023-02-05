import React from 'react'
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
  <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">404</h1>
  <div className="bg-indigo-800 shadow-sm shadow-white text-white px-2 text-sm rounded rotate-12 absolute">
    Creo que se ha extraviado
  </div>
  <button className="mt-5">
    <Link to="/" className="relative inline-block text-sm font-medium text-white group 
    active:text-indigo-600 focus:outline-none focus:ring">
      <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0" />
      <span className="relative block px-8 py-3 bg-indigo-600 border border-current">
        Ir al Inicio
      </span>
    </Link>
  </button>
</main>

  )
}

export default Page404