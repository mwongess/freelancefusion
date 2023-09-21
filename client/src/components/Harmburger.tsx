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

const Harmburger = () => {
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
                                <Link href="/login" >Login</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/signup" >Register</Link>
                            </SheetClose>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default Harmburger
