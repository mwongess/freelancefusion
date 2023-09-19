"use client"

import appwriteService from '@/appwrite/config'
import Notes from '@/components/Notes'
import { useAuth } from '@/context/authContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const { setAuthStatus } = useAuth()
  const router = useRouter()
  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const session = await appwriteService.login(formData);
      if (session) {
        setAuthStatus(true)
        router.push("/console")
      }


    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <div className='flex h-screen'>
      <Notes />
      <div className='flex flex-col justify-between sm:justify-center items-center w-full sm:w-1/2 bg-white pt-10 sm:pt-0'>
        <form action="" className='w-[80%] sm:w-[60%] text-black'>
          <div className='flex flex-col gap-2'>
            <label className='font-bold text-lg' htmlFor="">Email</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240]' onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            } name="email" type="email" />
          </div>
          <div className='flex flex-col gap-2 my-3'>
            <label className='font-bold text-lg' htmlFor="">Password</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240]' onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            } name="password" type="password" />
          </div>
          <div className='mb-3'>
            <button className='text-white bg-[#0B9240] rounded-lg py-2 px-6'>Login</button>
          </div>
          <div>
            <p>Dont have an account? register <Link className="underline" href="/signup">here.</Link></p>
          </div>
        </form>
        <div className="flex sm:hidden justify-self-end self-end">
          <Image src="/fingerprint.svg" height={150} width={350} alt="fingerprint" />
        </div>
      </div>
    </div>
  )
}

export default Login