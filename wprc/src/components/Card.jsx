import React from 'react'

const Card = ({ weatherData }) => {

    return (
        <>
            <div className='w-[300px] pb-10 bg-zinc-200 rounded-xl flex flex-col items-center' >
                <img className='mt-10 w-[50px] h-[60px] ' src={weatherData?.current?.condition?.icon} alt="" /> image
                <h2 className='my-10 text-2xl font-bold text-zinc-700' >{weatherData?.current?.temp_c}</h2>
                <h2 className='uppercase text-4xl font-extrabold text-zinc-700 underline  ' >{weatherData?.location?.country}</h2>

            </div>



        </>
    )
}

export default Card
