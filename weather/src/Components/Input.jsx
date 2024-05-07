import React from 'react'
import { useWeather } from '../context/Weather'

const Input = () => {

  const weather = useWeather();
  console.log(weather);

  return (
    <div>

      <input className='py-2 px-6 rounded-xl font-sans ' placeholder='Enter the Location' type="text" />

    </div>
  )
}

export default Input