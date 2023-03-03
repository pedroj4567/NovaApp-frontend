import React from 'react'

export const Alerta = ({alerta}) => {
  return (
    <div 
        className={`${alerta.error ? 'from-red-400 to-red-700' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r w-full text-center text-white font-bold py-2 mt-2 rounded-xl`}
    >{alerta.msg}</div>
  )
}
