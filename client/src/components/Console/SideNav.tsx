import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa"
import { VscSettings } from "react-icons/vsc";
import { CgLogOut } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { SiSlack } from "react-icons/si";
import Link from "next/link"

const SideNav = () => {
    return (
        <div className="fixed flex flex-col justify-between gap-[5rem] px-4 py-8 font-bold">
            <div className="flex flex-col gap-8">
                <Link className="flex items-center gap-4 text-lg" href="/console/chat"><BiSolidMessageRoundedDetail />Message</Link>
                <Link className="flex items-center gap-4 text-lg" href="/console/jobs"><BiTask />Jobs</Link>
                <Link className="flex items-center gap-4 text-lg" href="https://app.slack.com/client/T05ST3P68MC/C05TNPWRPSL" target="_blank"><SiSlack />Slack</Link>
                <Link className="flex items-center gap-4 text-lg" href="/console/profile" ><FaUserAlt /> Profile</Link>
                <Link className="flex items-center gap-4 text-lg" href="/console/settings"><VscSettings /> Settings</Link>
            </div>
            <div className="fixed bottom-0 pb-8">
                <Link className="text-red-500 flex items-center gap-3 text-lg" href=""><CgLogOut /> Logout</Link>
            </div>
        </div>
    )
}

export default SideNav