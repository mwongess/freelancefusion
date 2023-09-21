"use client"

import appwriteService, { appwriteClient } from "@/appwrite/config";
import { Databases, ID, Permission, Query, Role } from "appwrite";
import { FormEvent, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import NoMesages from "../NoMesages";
import config from "@/config/conf";
import { useAuth } from "@/context/authContext";

const Chat = () => {
    const [currentUser, setCurrentUser] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<any>([])
    const [chats, setChats] = useState<any>([])

    const { user } = useAuth()

    // Check if current user is an admin
    const isAdmin = user.$id === process.env.NEXT_PUBLIC_ADMIN_USER_ID

    const databases = new Databases(appwriteClient);

    useEffect(() => {
        getMessages();

        const unsubscribe = appwriteClient.subscribe(`databases.${config.appwriteDatabaseId}.collections.${config.appwriteCollectionId}.documents`, (response: any) => {

            if (response.events.includes("databases.*.collections.*.documents.*.create")) {
                console.log('MESSAGE SENT')
                setMessages((prevState: any) => [response.payload, ...prevState])
            }

            if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
                console.log('MESSAGE HAS BEEN DELETED!!!')
                setMessages((prevState: any[]) => prevState.filter(message => message.$id !== response.payload.$id))
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
            [
                Query.orderAsc('$createdAt'),
            ]
        )
        console.log(response.documents)
        setMessages(response.documents)
    }

    const sendMessage = async (e: FormEvent) => {
        e.preventDefault()

        const permissions = [
            Permission.write(Role.user(user.$id)),
        ]

        const payload = {
            senderID: user.$id,
            senderUsername: user.name,
            receiverID: "",
            message: message
        }

        const response = await databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            ID.unique(),
            payload,
            permissions
        )
        console.log('RESPONSE:', response)
        setMessage('') //Reset message input

    }

    const deleteMessage = async (id: string) => {
        await databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, id);
    }

    return (
        <div className="flex flex-col sm:flex-row items-start gap-5">

            <div className="hidden sm:flex flex-col items-center w-full sm:w-[30%] border-r border-slate-600 p-4 sm:min-h-[90vh]">
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
            <div className="flex flex-col justify-between w-screen sm:w-[70%] py-3 sm:p-8 h-[91vh] px-3 sm:px-0 ">
                <div className="flex flex-col gap-4 h-[70vh] overflow-y-scroll px-3 ">
                    {
                        !chats[0] && <NoMesages />
                    }
                    {chats.map((chat: any, index: any) => (
                        <div key={index} className={(chat.senderID === currentUser ? "self-end bg-slate-50 text-black " : "self-start border border-slate-50") + " border p-3 w-fit rounded-lg mb-[0.5rem]"}>
                            <p>{chat.message}</p>
                        </div>
                    ))}
                </div>
                <div className="fixed bottom-0  py-6 flex w-[90%] sm:w-[54%] gap-2 ">
                    <input className="message border border-red-100 bg-transparent p-3 rounded-l-lg my-[1px]  w-[90%]" placeholder="Message here ..." value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
                    <button className="flex items-center justify-center p-3  rounded-r-lg text-white   w-[10%] bg-blue-500" onClick={sendMessage}><FaArrowUp /></button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
