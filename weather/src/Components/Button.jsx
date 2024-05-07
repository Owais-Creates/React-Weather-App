import React from 'react'

const Button = ({value}) => {
  return (
    <div>
      
      <button className='py-2 px-8 outline-none bg-zinc-800 text-white font-bold font-sans rounded-xl' >{value}</button>

    </div>
  )
}

export default Button