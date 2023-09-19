"use client"
import SideNav from "@/components/Console/SideNav"
import TopNav from "@/components/Console/TopNav"
import { AuthProvider } from "@/context/authContext"
import { useState } from 'react'
const layout = ({ children }: { children: React.ReactNode }) => {
    const [authStatus, setAuthStatus] = useState(false)
    return (
        <AuthProvider value={{ authStatus, setAuthStatus }}>
            <div>
                <TopNav />
                <div className="flex sm:min-h-[90vh]">
                    <div className="hidden sm:flex sm:w-[20%] border-r border-slate-100">
                        <SideNav />
                    </div>
                    <div className="sm:w-[80%]">
                        {children}
                    </div>
                </div>
            </div>
        </AuthProvider>
    )
}

export default layout