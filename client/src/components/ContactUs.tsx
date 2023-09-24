import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div id='contact' className='p-8'>
            <h1 className='font-bold text-3xl text-center pt-20 mb-8 sm:mb-12'>Contact Us</h1>
            <div className='flex flex-col sm:flex-row justify-between gap-8'>
                <div className='w-1/2'>
                    <h1 className='font-bold text-2xl'>Get in Touch Today!</h1>
                    <p className='my-4'>We value your feedback and look forward to connecting with you. Whether you're inquiring about our services, requesting a quote, or simply want to say hello, we're here to assist you promptly. Your satisfaction is our priority</p>
                    <div className='socials flex flex-col gap-2'>
                        <Link className='flex gap-3 items-center text-lg' href={`https://www.github.com/`} target='_blank'><span><FaGithub /></span> Github</Link>
                        <Link className='flex gap-3 items-center text-lg' href={`https://www.linkedin.com/in/`} target='_blank'><span><FaLinkedinIn /> </span>LinkedIn</Link>
                        <Link className='flex gap-3 items-center text-lg' href="https://wa.me/" target='_blank'><span><FaWhatsapp /></span>Whatsapp</Link>
                        <p><span><FaPhoneAlt /></span></p>
                    </div>
                </div>
                <div className='sm:w-1/2'>
                    <form action="https://formsubmit.co/fusionfreelance00@gmail.com" method="post">
                        <div>
                            <input className='w-full rounded-lg p-3 bg-transparent border  border-slate-400' type="email" placeholder='Your Email' name="email" />
                        </div>
                        <div className='my-4'>
                            <textarea className='w-full rounded-lg p-3 bg-transparent border border-slate-400' name="message" id="" cols={30} rows={5} placeholder='Message ...'></textarea>
                        </div>
                        <button type="submit" className='send-btn p-3 rounded-full w-1/2 bg-[#0B9240]'>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs