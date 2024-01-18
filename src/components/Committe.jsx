import React from 'react'
import { eventData } from '../constant'

const Committe = () => {
  return (
    <div className='lg:flex-1 w-full '>

      <div className='space-y-12 border bg-white p-5 shadow'>

        <div className=''>
          <h1 className='text-xl font-bold'>COMMITTEE : </h1>
        </div>


        <div>
      {Object.keys(eventData).map(category => (
        <div className='mb-5' key={category}>
          <h2 className='mb-2 text-lg'>{category}</h2>
          <ul className='list-star'>
            {eventData[category].map((member, index) => (
              <li className='text-sm' key={index}>
                {member}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

      </div>
    </div>
  )
}

export default Committe
