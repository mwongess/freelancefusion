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

const MobileNav = () => {
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
                                <Link href="" >Chat</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/console/jobs" >Jobs</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/console/profile" >Profile</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/console/settings" >Settings</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="text-red-600" href="/login" >Logout</Link>
                            </SheetClose>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
