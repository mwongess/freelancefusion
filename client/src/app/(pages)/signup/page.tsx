import Notes from "@/components/Notes"
import Link from "next/link"

const Signup = () => {
  return (
    <div className='flex h-screen'>
      <Notes />
      <div className='flex flex-col justify-center items-center w-1/2 bg-white '>
        <form action="" className='w-[60%] text-black'>
          <div className='flex flex-col gap-2'>
            <label className='font-bold text-lg' htmlFor="">Name</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240] ' type="text" />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-bold text-lg' htmlFor="">Email</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240]' type="email" />
          </div>
          <div className='flex flex-col gap-2 my-3'>
            <label className='font-bold text-lg' htmlFor="">Password</label>
            <input className='p-2 bg-transparent border-2 border-[#0B9240]' type="password" />
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

      </div>
    </div>
  )
}

export default Signup