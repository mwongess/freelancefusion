import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa"
import { CgLogOut } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { SiSlack } from "react-icons/si";
import Link from "next/link"
import { useRouter } from "next/navigation";
import appwriteService from "@/appwrite/config";
import { useAuth } from "@/context/authContext";
import Settings from "../Settings";

const SideNav = () => {
    const router = useRouter()
    const { user } = useAuth()

    const isAdmin = () => user ? user.$id === process.env.NEXT_PUBLIC_ADMIN_USER_ID : false

    const logout = () => {
        appwriteService.logout()
        router.push("/login")
    }

    return (
        <div className="fixed flex flex-col justify-between gap-[5rem] px-4 py-8 font-bold">
            <div className="flex flex-col gap-8">
                <Link className="flex items-center gap-4 text-lg" href={isAdmin() ? "/console/chat" : "/console/chat/with-admin"}><BiSolidMessageRoundedDetail />Message</Link>
                <Link className="flex items-center gap-4 text-lg" href="/console/jobs"><BiTask />Jobs</Link>
                <Link className="flex items-center gap-4 text-lg" href="https://app.slack.com/client/T05ST3P68MC/C05TNPWRPSL" target="_blank"><SiSlack />Slack</Link>
                <Link className="flex items-center/ gap-4 text-lg" href="/console/profile" ><FaUserAlt /> Profile</Link>
                {/* <Profile/> */}
                {/* <Link className="flex items-center gap-4 text-lg" href="/console/settings"><VscSettings /> Settings</Link> */}
                <Settings />
            </div>
            <div className="fixed bottom-0 pb-8">
                <p className="text-red-500 flex items-center gap-3 text-lg cursor-pointer" onClick={logout}><CgLogOut /> Logout</p>
            </div>
        </div>
    )
}

export default SideNav