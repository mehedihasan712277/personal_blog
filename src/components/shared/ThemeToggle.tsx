"use client"
import Image from "next/image"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext";



const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext)

    return (
        <div
            onClick={toggle}
            style={
                theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
            }
            className="flex justify-between items-center w-10 h-5 rounded-[50px] cursor-pointer relative">

            <Image src="/moon.png" alt="icon" width={20} height={14}></Image>

            <div
                style={
                    theme === "dark"
                        ? { left: 2, background: "#0f172a" }
                        : { right: 2, background: "white" }
                }
                className="w-4 h-4 bg-white absolute rounded-full"></div>

            <Image src="/sun.png" alt="icon" width={20} height={14}></Image>
        </div>
    )
}

export default ThemeToggle