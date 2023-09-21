"use client"

import { appwriteClient } from '@/appwrite/config'
import NoMesages from '@/components/NoMesages'
import config from '@/config/conf'
import { useAuth } from '@/context/authContext'
import { Databases, ID, Permission, Query, Role } from 'appwrite'
import React, { FormEvent, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ChatWithAdmin = () => {
  const [chats, setChats] = useState<any>([])
  const [message, setMessage] = useState("")

  const { user } = useAuth()

  const databases = new Databases(appwriteClient);
  useEffect(() => {
    getMessages();

    const unsubscribe = appwriteClient.subscribe(`databases.${config.appwriteDatabaseId}.collections.${config.appwriteCollectionId}.documents`, (response: any) => {

      if (response.events.includes("databases.*.collections.*.documents.*.create")) {
        console.log('MESSAGE SENT')
        setChats((prevState: any) => [...prevState, response.payload])
      }

      if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
        console.log('MESSAGE HAS BEEN DELETED!!!')
        setChats((prevState: any[]) => prevState.filter(message => message.$id !== response.payload.$id))
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const getMessages = async () => {
    const response = await databases.listDocuments(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
    )
    const myChats = response.documents.filter((chat) => { return (chat.receiverID == user.$id )||( chat.senderID === user.$id) })
    setChats(myChats)
  }
  const sendMessage = async (e: FormEvent) => {
    e.preventDefault()

    const permissions = [
      Permission.write(Role.user(user.$id)),
    ]

    const payload = {
      senderID: user.$id,
      senderUsername: user.name,
      receiverID: process.env.NEXT_PUBLIC_ADMIN_USER_ID,
      message: message
    }

    const response = await databases.createDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      ID.unique(),
      payload,
      permissions
    )
    setMessage('') //Reset message input
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen sm:w-full p-4 h-[90vh]">
      <div className="flex flex-col gap-4 overflow-y-scroll  w-full h-[80vh] px-3">
        {
          !chats[0] && <NoMesages />
        }
        {chats.map((chat: any, index: any) => (
          <div key={index} className={(chat.senderID === user.$id ? "self-end bg-slate-50 text-black " : "self-start border border-slate-50") + " border p-3 w-fit rounded-lg mb-[0.5rem]"}>
            <div className='flex gap-4'>
              <p className='font-bold'>{chat.senderUsername}</p>
              <p>{new Date(chat.$createdAt).toLocaleString()}</p>
            </div>
            <div className='mt-1'>
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 w-full h-[10vh]">
        <input className="message border border-red-100 bg-transparent p-3 rounded-l-lg my-[1px]  w-[90%]" placeholder="Message here ..." value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
        <button className="flex items-center justify-center p-3  rounded-r-lg text-white   w-[10%] bg-blue-500" onClick={sendMessage}><FaArrowUp /></button>
      </div>
    </div>
  )
}

export default ChatWithAdmin