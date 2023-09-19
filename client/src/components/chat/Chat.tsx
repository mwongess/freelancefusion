"use client"

import { Client, Databases, ID } from "appwrite";


const Chat = () => {
    const client = new Client();
    const databases = new Databases(client);
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

    async function sendMessageToAdmin(userID: string, message: any) {
        try {
            const messageObject = {
                senderID: userID,
                recipientID: process.env.NEXT_PUBLIC_ADMIN_USER_ID,
                message,
            };
            const response = await databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_COLLECTION_ID!, ID.unique(), messageObject);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async function sendMessageToUser(userID: string, message: any) {
        try {
            const messageObject = {
                senderId:  process.env.NEXT_PUBLIC_ADMIN_USER_ID,
                recipientId: userID,
                message,
            };
            const response = await databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_COLLECTION_ID!, ID.unique(), messageObject);
            return response;

        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className="flex items-start gap-5">
            <div className="flex justify-between w-[25%] border-r p-8 min-h-[90vh]">
                <h1 className="font-bold">My chats</h1>
                <p className="bg-green-500 px-2 rounded-lg h-fit">+</p>
            </div>
            <div className="flex flex-col justify-between w-[75%]  p-8 min-h-[90vh]">
                <div>Chats</div>
                <div>
                    <input className="border bg-transparent p-3 rounded-l-lg  w-[90%]" type="text" />
                    <button className="border p-3 bg-green-500 rounded-r-lg  w-[10%]">send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
