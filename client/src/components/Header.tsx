import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header '>
        <h1 className='font-bold text-2xl'>FreelanceFusion</h1>
        <div className='flex gap-6'>
            <Link href="">Explore</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Services</Link>
            <Link href="">Sign In</Link>
            <Link href="">Register</Link>
        </div>
    </div>
  )
}

export default Header