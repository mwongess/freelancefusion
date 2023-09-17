import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <div className='left'>
                <h1 className='font-bold text-3xl tracking-wider'>Unlock the boundless potential of freelance work.Look no further! Welcome to FreelanceFusion.</h1>
                <input className='bg-transparent border-2 rounded-lg p-3 w-full' type="search" placeholder='Search anything ...' />
                <div className='in-demand'>
                    <h1 className='font-bold'>In Demand:</h1>
                    <p>WebDev</p>
                    <p >Wordpress</p>
                    
                </div>
            </div>
            <div className='right'>

            </div>
        </div>
    )
}

export default Home