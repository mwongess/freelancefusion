import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="footer">
            <div className='licensing'>
                <h1 className='font-bold text-xl sm:text-2xl'>FreelanceFusion</h1>
                <p>FreelanceFusion International Ltd .2023</p>
            </div>
            <div className='socials'>
                <Link href=""> <p><FaFacebook /></p></Link>
                <Link href=""><p><FaInstagram /></p></Link>
                <Link href=""><p><FaLinkedin /></p></Link>
            </div>
        </div>
    )
}

export default Footer