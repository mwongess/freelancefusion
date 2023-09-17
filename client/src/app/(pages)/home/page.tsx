import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <div className='home p-10'>
            <div className='left'>
                <h1 className='font-bold text-3xl tracking-wider'>Unlock the boundless potential of freelance work.Look no further! Welcome to FreelanceFusion.</h1>
                <input className='bg-transparent border-2 rounded-lg p-3 w-full' type="search" placeholder='Search anything ...' />
                <div className='in-demand'>
                    <p>WebDev</p>
                    <p >Wordpress</p>
                    <p >Remo</p>
                    <p >Next</p>
                </div>
            </div>
            <div className='right  '>
                <Image src='/remotely.svg' width={400} height={150} alt="remotely" />
            </div>
        </div>
    )
}

export default Home