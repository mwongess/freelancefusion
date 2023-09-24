"use client"

import ContactUs from '@/components/ContactUs'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const isLogin = pathname.toString().includes('login')
    const isSignup = pathname.toString().includes('signup')
    const isAuth = isLogin || isSignup
    return (
        <div className='flex flex-col  justify-between'>
            <div className='min-h-[80vh]'>
                <Header />
                <div className="outlet">
                    {children}
                </div>
            </div>
            <ContactUs/>
            <div>
                {/* <Cta /> */}
                <Footer />
            </div>

        </div>
    )
}

export default HomeLayout