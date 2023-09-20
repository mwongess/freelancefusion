"use client"

import appwriteService from "@/appwrite/config";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import NoMesages from "../NoMesages";

const Chat = () => {
    const [currentUser, setCurrentUser] = useState("")
    const [recipientID, setRecipientID] = useState("")
    const [message, setMessage] = useState("")
    const [chats, setChats] = useState<any>([])

    const isAdmin = currentUser === process.env.NEXT_PUBLIC_ADMIN_USER_ID

    const client = new Client();
    const databases = new Databases(client);
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

    useEffect(() => {
        getCurrentUser()
        fetchChats()
    }, [message])

    async function getCurrentUser() {
        const id = (await appwriteService.getCurrentUser())?.$id!
        setCurrentUser(id)
    }

    const fetchChats = async () => {
        try {
            const { documents } = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_COLLECTION_ID!);
            console.log(documents);
            if (isAdmin) {
                setChats(documents)
            } else {
                const userChats = documents.filter((document) => (document.senderID || document.recieverID) === currentUser)
                setChats(userChats)
            }
        } catch (error) {
            console.error(error)
        }
    }

    async function sendMessageToAdmin(userID: string, message: any) {
        try {
            const messageObject = {
                senderID: userID,
                recieverID: process.env.NEXT_PUBLIC_ADMIN_USER_ID,
                message,
            };
            const response = await databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_COLLECTION_ID!, ID.unique(), messageObject);
            setMessage("")
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async function sendMessageToUser(userID: string, message: any) {
        try {
            const messageObject = {
                senderID: process.env.NEXT_PUBLIC_ADMIN_USER_ID,
                receiverID: userID,
                message,
            };
            const response = await databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_COLLECTION_ID!, ID.unique(), messageObject);
            setMessage("")
            return response;

        } catch (error) {
            console.error(error);
        }
    }

    // client.subscribe('documents', response => {
    //     if (response.events.includes('databases.*.collections.*.documents.*.create')) {
    //         console.log(response.payload);
    //     }
    // });

    const sendMessage = async () => {
        if (isAdmin) {
            sendMessageToUser("567890", message)
        }
        else {
            sendMessageToAdmin(message, recipientID);
        }
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
                        {isAdmin && chats.filter((chat: any) => chat.senderID != process.env.NEXT_PUBLIC_ADMIN_USER_ID).map((chat: any,index:any) => (
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
                    {chats.map((chat: any, index:any) => (
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
