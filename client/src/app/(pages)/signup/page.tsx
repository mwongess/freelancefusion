import Notes from "@/components/Notes"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const signup = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className='flex h-screen'>
      <Notes />
      <div className='flex flex-col justify-between sm:justify-center items-center w-full sm:w-1/2 bg-white pt-10 sm:pt-0'>
        <form onSubmit={signup} className='w-[80%] sm:w-[60%] text-black'>
          <div className='flex flex-col gap-2'>
            <label className='font-bold text-lg' htmlFor="">Name</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240]' onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            } name="name" type="text" />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-bold text-lg' htmlFor="">Email</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240]'
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              name="email" type="email" />
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
          <div className='flex flex-col gap-2 my-3'>
            <label className='font-bold text-lg' htmlFor="">Confirm Password</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240]' type="password" />
          </div>
          <div className='mb-3'>
            <button className='text-white bg-[#0B9240] rounded-lg py-2 px-6'>Register</button>
          </div>
          <div>
            <p>Already have an account? Login <Link className="underline" href="/login">here.</Link></p>
          </div>
        </form>
        <div className="flex sm:hidden justify-self-end self-end">
          <Image src="/fingerprint.svg" height={150} width={350} alt="fingerprint" />
        </div>
      </div>
    </div>
  )
}

export default Signup