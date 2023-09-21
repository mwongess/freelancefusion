"use client"

import { useAuth } from '@/context/authContext'
import React, { useState } from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState([])
  const { user } = useAuth()

  const isAdmin = user.$id === process.env.NEXT_PUBLIC_ADMIN_USER_ID

  return (
    <div className="flex flex-col sm:flex-row items-start gap-5">
      {
        isAdmin && <div className="hidden sm:flex flex-col items-center w-full sm:w-[30%] border-r border-slate-600 p-4 sm:min-h-[90vh]">
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <h1 className="font-bold">{isAdmin ? 'All Chats' : 'Chat with Admin'}</h1>
              <p className=" px-2 rounded-lg h-fit w-fit text-xl"><RiVerifiedBadgeFill /></p>
            </div>
            <div className="flex flex-col gap-4 py-8 ">
              {isAdmin && chats.filter((chat: any) => chat.senderID != process.env.NEXT_PUBLIC_ADMIN_USER_ID).map((chat: any, index: any) => (
                <p key={index} className="bg-slate-200 rounded-lg p-3 w-full text-black">{chat.senderID}</p>
              ))}
            </div>
          </div>
        </div>
      }
      {children}
    </div>
  )
}

export default ChatLayout