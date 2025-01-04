import React from 'react'
import react from './React.js_logo-512.webp'

function ComponentCard({title , tagline, img}) {
  return (
    <div className='w-[300px] bg-gray-100 border-2 border-gray-300 m-5 rounded-lg p-10 '>
      <div className='flex justify-space-around  '>
        <img src={react} className='h-[100px] w-[100px] mr-5' alt='student'/>
      <div>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-md'>{tagline}</p>
      </div></div>
      <div>
        <button className='bg-red-400 text-xl text-white px-5 py-2 rounded-lg mr-5'>hide</button>
        <button className='bg-green-400 text-xl px-5 py-2 rounded-lg '>display</button>
      </div>
    </div>
  )
}

export default ComponentCard
