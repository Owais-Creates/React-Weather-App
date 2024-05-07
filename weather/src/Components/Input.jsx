import React from 'react'
import { useWeather } from '../context/Weather'

const Input = () => {

  const weather = useWeather();
  const { setCity, city } = weather;
  const cityValue = city || ''

  return (
    <div>

      <input className='py-2 px-6 rounded-xl font-sans '
        placeholder='Enter the Location'
        type="text"
        value={cityValue}
        onChange={(e) => setCity(e.target.value)}
        />

    </div>
  )
}

export default Input