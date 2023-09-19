"use client"

import { Client, Databases, ID } from "appwrite";


const Chat = () => {
    const client = new Client();
    const databases = new Databases(client);
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('5df5acd0d48c2') // Your project ID
        ;

    async function sendMessageToAdmin(userID: string, message: any) {
        // Create a new message object
        const messageObject = {
            senderID: userID,
            recipientID: 'YOUR_ADMIN_USER_ID',
            message,
        };

        // Create a new document in the messages collection
        const response = await databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_COLLECTION_ID!, ID.unique(), messageObject);

        // Return the message document
        return response;
    }
    async function sendMessageToUser(userID: string, message: any) {
        // Create a new message object
        const messageObject = {
            senderId: 'YOUR_ADMIN_USER_ID',
            recipientId: userID,
            message,
        };

        // Create a new document in the messages collection
        const response = await databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_COLLECTION_ID!, ID.unique(), messageObject);

        // Return the message document
        return response;
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
