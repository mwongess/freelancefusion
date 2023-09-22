import React from 'react'

const JobsLoader = () => {
  return (
    <div className='p-8'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className='bg-gray-400 animate-pulse h-[300px] p-4 rounded-lg'>

        </div>
      ))}
    </div>
    </div>
  )
}

export default JobsLoader
