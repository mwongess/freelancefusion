import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col  justify-between'>
            <div className='min-h-screen'>
            <Header />
            <div className="outlet">
                {children}
            </div>
            </div>
            <div>
                <Cta />
                <Footer />
            </div>
        </div>
    )
}

export default layout