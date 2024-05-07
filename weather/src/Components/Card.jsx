import React from 'react'


const Card = () => {
    return (
        <>
            <div className='w-[300px] pb-10 bg-zinc-200 rounded-xl flex flex-col items-center' >
                <img className='mt-10 w-[50px] h-[60px] ' src="xyz.png" alt="" /> image
                <h2 className='my-10 text-2xl font-bold text-zinc-700' >32°C</h2>
                <h2 className='uppercase text-4xl font-extrabold text-zinc-700 underline  ' >City Name</h2>

            </div>



        </>
    )
}

export default Card
