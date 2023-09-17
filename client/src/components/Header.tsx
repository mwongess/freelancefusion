import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <Link href="/home" className='font-bold text-2xl'><span className='border-2 p-1 text-[#0B9240]'>FF</span> FreelanceFusion</Link>
        <div className='flex gap-6'>
            <Link href="">Explore</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Services</Link>
            <Link href="/login">Sign In</Link>
            <Link href="/signup">Register</Link>
        </div>
    </div>
  )
}

export default Header