import Link from 'next/link'
import React from 'react'
import Harmburger from './Harmburger'

const Header = () => {
  return (
    <div className='header '>
        <Link href="/home" className='font-bold sm:text-2xl'><span className='border-2 p-1 text-[#0B9240]'>FF</span> FreelanceFusion</Link>
        <div className='hidden sm:flex gap-6'>
            <Link href="/#contact">Contact Us</Link>
            <Link href="/#services">Services</Link>
            <Link href="/login">Sign In</Link>
            <Link href="/signup">Register</Link>
        </div>
        <Harmburger/>
    </div>
  )
}

export default Header