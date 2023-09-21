"use client"
import appwriteService from "@/appwrite/config"
import SideNav from "@/components/Console/SideNav"
import TopNav from "@/components/Console/TopNav"
import { AuthProvider } from "@/context/authContext"
import { useEffect, useState } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [authStatus, setAuthStatus] = useState(false)
    const [user, setUser] = useState<any>()

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            let accountDetails = await appwriteService.getCurrentUser()
            setUser(accountDetails)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <AuthProvider value={{ authStatus, setAuthStatus, user }}>
             <div>
                    <TopNav />
                    <div className="flex sm:min-h-[90vh]">
                        <div className="hidden sm:flex sm:w-[20%] border-r border-slate-600">
                            <SideNav />
                        </div>
                        { user &&

                        <div className="sm:w-[80%]">
                            {children}
                        </div>
                        }
                    </div>
                </div>

        </AuthProvider>
    )
}

export default Layout