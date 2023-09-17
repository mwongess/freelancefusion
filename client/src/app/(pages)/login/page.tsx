import Notes from '@/components/Notes'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen'>
      <Notes />
      <div className='flex flex-col justify-center items-center w-1/2 bg-white '>
        <form action="" className='w-1/2 text-black'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Email</label>
            <input className='p-2 bg-transparent border border-[#0B9240] ' type="email" />
          </div>
          <div className='flex flex-col gap-2 my-3'>
            <label htmlFor="">Password</label>
            <input className='p-2 bg-transparent border border-[#0B9240]' type="password" />
          </div>
          <div className='mb-3'>
            <button className='bg-[#0B9240] rounded-lg py-2 px-6'>Login</button>
          </div>
          <div>
            <p>Dont have an account? register <Link className="underline" href="/signup">here.</Link></p>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login