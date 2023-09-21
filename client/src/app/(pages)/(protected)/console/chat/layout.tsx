"use client"

import { appwriteClient } from '@/appwrite/config'
import config from '@/config/conf'
import { useAuth } from '@/context/authContext'
import { Databases } from 'appwrite'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<any>([])
  const { user } = useAuth()

  const isAdmin = user.$id === process.env.NEXT_PUBLIC_ADMIN_USER_ID

  const databases = new Databases(appwriteClient);
  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = async () => {
    const response = await databases.listDocuments(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
    )
    setChats(response.documents)
  }
  console.log(chats.map((object: any) => { return object.senderUsername, object.senderID }).filter((name: any, index: any, array: any) => array.indexOf(name) === index));

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
              {isAdmin && chats.filter((chat: any) => chat.senderID != process.env.NEXT_PUBLIC_ADMIN_USER_ID).map((object: any) => object.senderID).filter((name: any, index: any, array: any) => array.indexOf(name) === index).map((chat: any, index: any) => (
                <Link href={`/console/chat/${chat}`} key={index} className='flex flex-col bg-slate-400 rounded p-3 text-black '>
                  <p className='font-bold'>User</p>
                  <p className=''>{chat}</p>
                </Link >
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