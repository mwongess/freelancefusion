import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className='p-4 sm:p-8'>
      <div className='bg-red-300 text-red-800 border-2 border-red-900 rounded-lg text-center p-5 mb-4'>
        <p className='font-bold'>Editing - Coming Soon!</p>
      </div>

      <div className='w-full flex flex-col sm:flex-row justify-between gap-6  '>
        <div className='w-full sm:w-[35%] flex'>
          <div className='border w-full border-blue-500 h-fit p-3 rounded-lg'>
            <h1 className='font-bold text-xl'>Account Settings</h1>
            <p>Details about your personal information.</p>
          </div>
        </div>
        <div className='w-full sm:w-[75%]'>
          <div className='flex justify-between items-center h-fit mb-8 border border-slate-700 p-3 rounded-lg'>
            <div className='flex h-fit items-center'>
              <Image src="" height={120} width={200} alt="profile" />
              <h1>Upload a New Photo</h1>
            </div>
            <button className='h-fit border border-blue-600 rounded-lg p-3'>Update</button>
          </div>
          <div>
            <h1 className='font-bold'>Change User Information Here</h1>
            <form action="">
              <div className='flex flex-col sm:flex-row gap-4 w-full my-6'>
                <div className='w-full sm:w-1/2'>
                  <label htmlFor="">Full Name*</label>
                  <input type="text" className='bg-transparent rounded-lg p-3 w-full border border-blue-500' />
                </div>
                <div className='w-full sm:w-1/2'>
                  <label htmlFor="">Whats App*</label>
                  <input type="text" className='bg-transparent rounded-lg p-3 w-full border border-blue-500' />
                </div>
              </div>
              <div >
                <label htmlFor="">Adress*</label>
                <input type="text" className='bg-transparent rounded-lg p-3 w-full border border-blue-500' />
              </div>
              <button className='bg-blue-500 w-full p-3 rounded-lg mt-6'>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile
