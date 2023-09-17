import Notes from '@/components/Notes'
import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen'>
      <Notes />
      <div className='flex flex-col justify-center items-center w-1/2 bg-white '>
        <form action="" className='w-1/2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Email</label>
            <input className='p-2 bg-transparent border border-[#0B9240] rounded ' type="email" />
          </div>
          <div className='flex flex-col gap-2 my-3'>
            <label htmlFor="">Password</label>
            <input className='p-2 bg-transparent border border-[#0B9240] rounded' type="password" />
          </div>
          <div className=''>
            <button className='bg-[#0B9240] rounded-lg py-2 px-6'>Login</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login