"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import AuthLinks from "./AuthLinks"
import { MenuIcon, X } from "lucide-react"
import { useState } from "react"

const Menu = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className="sm:hidden">
            <div className="flex items-center gap-4">
                <ThemeToggle></ThemeToggle>
                <button onClick={() => setMenu(!menu)}>
                    {
                        menu
                            ?
                            <X />
                            :
                            <MenuIcon></MenuIcon>
                    }
                </button>
            </div>
            {
                menu && <div className="flex flex-col items-center gap-5 text-xl bg-bg z-10 absolute top-[100px] left-0 right-0 h-[calc(100vh-100px)]">
                    <Link href="/">Homepage</Link>
                    {/* <Link href="/">Contact</Link> */}
                    <Link href="/about">About</Link>
                    <AuthLinks></AuthLinks>
                </div>
            }
        </div>
    )
}

export default Menu