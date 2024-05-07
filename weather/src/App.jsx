import React from 'react'
import Card from './Components/Card'
import Input from './Components/Input'
import Button from './Components/Button'


const App = () => {
  return (
    <>
      <div className='w-full h-screen bg-zinc-400 flex justify-center flex-col items-center gap-5' >
        <h1 className='-mt-5  font-bold font-sans text-3xl' >Weather Forecast</h1>
        <div className='flex gap-2' >
          <Input />
          <Button value="Search" />
        </div>
        <Card />
        <Button value="Refresh" />
      </div>
    </>
  )
}

export default App