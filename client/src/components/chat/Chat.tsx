"use client"

import appwriteService from "@/appwrite/config";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Chat = () => {
    const [currentUser, setCurrentUser] = useState("")
    const [recipientID, setRecipientID] = useState("")
    const [message, setMessage] = useState("")
    const [chats, setChats] = useState<any>([])

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
            setChats(documents)
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
        if (currentUser === process.env.NEXT_PUBLIC_ADMIN_USER_ID) {
            sendMessageToUser("567890", message)
        }
        else {
            sendMessageToAdmin(message, recipientID);
        }
    }

    return (
        <div className="flex flex-col sm:flex-row items-start gap-5">

            <div className="hidden sm:block w-full sm:w-[25%] border-r border-slate-600 p-8 sm:min-h-[90vh]">
                <div className="flex items-center justify-between">

                    <h1 className="font-bold">Chat with Admin</h1>
                    <p className=" px-2 rounded-lg h-fit w-fit text-xl"><RiVerifiedBadgeFill/></p>
                </div>
                <div>

                </div>
            </div>
            <div className="flex flex-col justify-between w-full sm:w-[75%] py-3 sm:p-8 h-[91vh] px-3 sm:px-0">
                <div className="flex flex-col gap-4 h-[70vh] overflow-y-scroll px-3 ">
                    {chats.map((chat: any) => (
                        <div className={(chat.senderID === currentUser ? "self-end bg-slate-50 text-black " : "self-start border border-slate-50" ) + " border p-3 w-fit rounded-lg mb-[0.5rem]"}>
                            <p>{chat.message}</p>
                        </div>
                    ))}
                </div>
                <div className="flex w-full gap-2">
                    <input className="message border border-red-100 bg-transparent p-3 rounded-l-lg my-[1px]  w-[90%]" placeholder="Message here ..." value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
                    <button className="flex items-center justify-center p-3  rounded-r-lg text-white   w-[10%] bg-blue-500" onClick={sendMessage}><FaArrowUp/></button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
