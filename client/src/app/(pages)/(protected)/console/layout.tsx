"use client"
import { AuthProvider } from "@/context/authContext"
import { useState } from 'react'
const layout = ({ children }: { children: React.ReactNode }) => {
    const [authStatus, setAuthStatus] = useState(false)
    return (
        <AuthProvider value={{ authStatus, setAuthStatus }}>
            <div>{children}</div>
        </AuthProvider>
    )
}

export default layout