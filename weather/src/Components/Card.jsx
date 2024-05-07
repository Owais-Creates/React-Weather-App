import React from 'react'
import Input from './Input'
import Button from './Button'

const Card = () => {
    return (
        <>
            <div className='w-[300px] h-[500px] bg-zinc-200 rounded-xl flex flex-col items-center' >
                <h1 className='mt-5 text-zinc-600 font-bold font-sans text-3xl' >Weather Forecast</h1>
                <img src="xyz.png" alt="" /> image
                <h2 className='uppercase text-4xl font-extrabold text-zinc-700 underline  ' >City Name</h2>

                {/* <Input />
                <Button /> */}
            </div>



        </>
    )
}

export default Card
