"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import AuthLinks from "./AuthLinks"
import { MenuIcon, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

const Menu = () => {
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

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
                menu && <div className="flex flex-col pl-4 gap-5 text-xl bg-bg z-10 absolute top-[100px] left-40 right-0 h-[calc(100vh-100px)]">
                    <Link href="/" className={isActive("/") ? "text-blue-500 font-semibold" : ""}>Homepage</Link>
                    <Link href="/about" className={isActive("/about") ? "text-blue-500 font-semibold" : ""}>About</Link>

                    <AuthLinks></AuthLinks>
                </div>
            }
        </div>
    )
}

export default Menu