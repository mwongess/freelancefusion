import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { FaUserAlt } from "react-icons/fa"

const Profile = () => {
    return (
        <div>
            <Sheet >
                <SheetTrigger className="flex items-center gap-4 text-lg"> <FaUserAlt /> Profile</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="relative h-[6rem] w-[6rem] p-2 my-0 mx-auto flex justify-center items-center rounded-full border">
                            <Image className="rounded-full" src={"/group.svg"} fill alt="profile"/>
                        </SheetTitle>
                        <SheetDescription className="text-center">
                            <h1 className="font-bold text-2xl">User</h1>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Profile