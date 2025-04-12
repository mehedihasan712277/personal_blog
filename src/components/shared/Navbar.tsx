import Image from "next/image"

import facebook from "../../../public/facebook.png"
import instagram from "../../../public/instagram.png"
import tiktak from "../../../public/tiktok.png"
import youtube from "../../../public/youtube.png"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import AuthLinks from "./AuthLinks"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-[100px]">
            {/* social */}
            <div className="flex gap-[10px] flex-1">
                <Image alt="icon" src={facebook} width={24} height={24}></Image>
                <Image alt="icon" src={instagram} width={24} height={24}></Image>
                <Image alt="icon" src={youtube} width={24} height={24}></Image>
                <Image alt="icon" src={tiktak} width={24} height={24}></Image>
            </div>
            {/* logo */}
            <div className="flex-1 text-center font-[700] text-[36px]">
                lamablog
            </div>
            {/* links */}
            <div className="flex items-center gap-5 flex-1 text-[20px]">
                <ThemeToggle></ThemeToggle>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                <AuthLinks></AuthLinks>
            </div>
        </div>
    )
}

export default Navbar