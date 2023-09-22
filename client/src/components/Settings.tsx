import appwriteService from "@/appwrite/config"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CgLogOut } from "react-icons/cg"
import { VscSettings } from "react-icons/vsc"

const Settings = () => {
    const router = useRouter()
    const logout = () => {
        appwriteService.logout()
        router.push("/login")
    }
    return (
        <div>
            <Sheet >
                <SheetTrigger className="flex items-center gap-4 text-lg text-white"><VscSettings /> Settings</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="">
                        </SheetTitle>
                        <SheetDescription className="">
                            <h1 className="font-bold text-xl text-red-800 mt-2 border border-red-800 bg-red-300 p-3 rounded-lg">Settings Coming Soon!</h1>

                            <div className="fixed bottom-0 pb-8">
                                <p className="text-red-500 flex items-center gap-3 text-lg cursor-pointer" onClick={logout}><CgLogOut /> Logout</p>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Settings