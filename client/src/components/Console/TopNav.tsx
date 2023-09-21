import Link from 'next/link'
import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import MobileNav from './MobileNav'

const TopNav = () => {
    return (
        <div className='flex justify-between items-center sticky inset-0 bg-black border-b px-4 py-8  border-slate-600 h-[10vh]'>
            <Link href="/console" className='font-bold text-xl'><span className='border-2 p-1 text-[#0B9240]'>FF</span> FreelanceFusion</Link>
            <div className='hidden sm:flex gap-8 font-bold '>
                <Link href="">Feedback</Link>
                <Link href="">Support</Link>
            </div>
            <MobileNav/>
        </div>
    )
}

export default TopNav