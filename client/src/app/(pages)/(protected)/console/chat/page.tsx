import Chat from "@/components/chat/Chat"
import Image from "next/image"

const page = () => {
    return (
        <div className="flex gap-3 flex-col justify-center text-slate-400 items-center w-full h-full text-center p-4">
            <Image src="/group.svg" height={300} width={450} alt="chat"/>
            <p className="tracking-wider font-bold text-xl">Realtime chat !</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa illum aperiam ratione ducimus quas modi assumenda totam repellat pariatur aspernatur. Unde vero sed nemo, recusandae voluptatum neque labore quod incidunt.</p>
        </div>
    )
}

export default page
