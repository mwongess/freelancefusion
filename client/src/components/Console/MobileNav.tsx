import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { FaHamburger, FaUserAlt } from "react-icons/fa"
import Settings from "../Settings"
import { BiSolidMessageRoundedDetail, BiTask } from "react-icons/bi"
import { SiSlack } from "react-icons/si"
import { useAuth } from "@/context/authContext"
import { CgLogOut } from "react-icons/cg"
import appwriteService from "@/appwrite/config"
import { useRouter } from "next/navigation"

const MobileNav = () => {
    const { user } = useAuth()
    const router = useRouter()
    const isAdmin = () => user ? user.$id === process.env.NEXT_PUBLIC_ADMIN_USER_ID : false

    const logout = () => {
        appwriteService.logout()
        router.push("/login")
    }
    return (
        <Sheet >
            <SheetTrigger className="sm:hidden flex text-2xl"><FaHamburger />   </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>

                    </SheetTitle>
                    <SheetDescription >
                        <div className="flex items-start flex-col gap-4 font-bold text-xl">
                            <SheetClose asChild>
                                <Link className="flex items-center gap-4 text-lg text-white" href={isAdmin() ? "/console/chat" : "/console/chat/with-admin"}><BiSolidMessageRoundedDetail />Message</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="flex items-center gap-4 text-lg text-white" href="/console/jobs"><BiTask />Jobs</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="flex items-center gap-4 text-lg text-white" href="https://app.slack.com/client/T05ST3P68MC/C05TNPWRPSL" target="_blank"><SiSlack />Slack</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="flex items-center/ gap-4 text-lg text-white" href="/console/profile" ><FaUserAlt /> Profile</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Settings />
                            </SheetClose>
                            <SheetClose asChild>
                                <p className="text-red-500 flex items-center gap-3 text-lg cursor-pointer" onClick={logout}><CgLogOut /> Logout</p>
                            </SheetClose>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
