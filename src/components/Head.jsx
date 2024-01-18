import React from 'react'
import { avcoe } from '../assets'

const Head = () => {
  return (
    <div className='flex items-center justify-evenly py-4 lg:px-0 px-3 gap-4'>
        <div className=' lg:w-32 lg:h-32'>
                <img className='w-full h-full' src={avcoe}/>
        </div>
        <div>
            <h1 className=' text-green-700 font-medium lg:text-3xl text-xl'>Amrutvahini College Of Engineering</h1>
        </div>
    </div>
  )
}

export default Head
