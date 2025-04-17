import Image from "next/image"

import facebook from "../../../public/facebook.png"
import instagram from "../../../public/instagram.png"
import tiktak from "../../../public/tiktok.png"
import youtube from "../../../public/youtube.png"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import AuthLinks from "./AuthLinks"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-[100px]">
            {/* social */}
            <div className="xl:flex gap-[10px] flex-1 hidden">
                <Image alt="icon" src={facebook} width={24} height={24}></Image>
                <Image alt="icon" src={instagram} width={24} height={24}></Image>
                <Image alt="icon" src={youtube} width={24} height={24}></Image>
                <Image alt="icon" src={tiktak} width={24} height={24}></Image>
            </div>
            {/* logo */}
            <div className="flex-1 xl:text-center font-[700] text-2xl 14i:text-4xl">
                {"Bloggers'"}
            </div>
            {/* links - for learge device */}
            <div className="hidden sm:flex justify-end items-center gap-3 md:gap-3 14i:gap-4 15i:gap-5 flex-1 text-sm md:text-[16px] 15i:text-xl">
                <ThemeToggle></ThemeToggle>
                <Link href="/">Homepage</Link>
                {/* <Link href="/">Contact</Link> */}
                <Link href="/about">About</Link>
                <AuthLinks></AuthLinks>
            </div>


            {/* links - for small device */}
            <Menu></Menu>
        </div>
    )
}

export default Navbar