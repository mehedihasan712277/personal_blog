"use client"

import Image from "next/image"
import { usePathname } from "next/navigation";


import facebook from "../../../public/facebook.png"
import instagram from "../../../public/instagram.png"
import youtube from "../../../public/youtube.png"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import AuthLinks from "./AuthLinks"
import Menu from "./Links"

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="flex items-center justify-between px-4 sm:px-0 z-10 h-[100px] fixed top-0 left-0 right-0 sm:static bg-bg">
            {/* social */}
            <div className="xl:flex gap-[10px] flex-1 hidden">
                <Link href="#"><Image alt="icon" src={facebook} width={24} height={24}></Image></Link>
                <Link href="#"><Image alt="icon" src={instagram} width={24} height={24}></Image></Link>
                <Link href="#"><Image alt="icon" src={youtube} width={24} height={24}></Image></Link>
            </div>

            {/* logo */}
            <div className="flex-1 xl:text-center font-[700] text-2xl 14i:text-4xl">
                {"Bloggers'"}
            </div>

            {/* links - for learge device */}
            <div className="hidden sm:flex justify-end items-center gap-3 md:gap-3 14i:gap-4 15i:gap-5 flex-1 text-sm md:text-[16px] 15i:text-xl">
                <ThemeToggle></ThemeToggle>
                <Link href="/" className={isActive("/") ? "text-blue-500 font-semibold" : ""}>Homepage</Link>
                <Link href="/about" className={isActive("/about") ? "text-blue-500 font-semibold" : ""}>About</Link>

                <AuthLinks></AuthLinks>
            </div>

            {/* links - for small device */}
            <Menu></Menu>
        </div>
    )
}

export default Navbar