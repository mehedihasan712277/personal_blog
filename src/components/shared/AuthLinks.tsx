"use client"
import { MouseEvent } from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
    // const status: string = "authenticated"
    const { status } = useSession();

    const handleSignOut = async (e: MouseEvent<HTMLSpanElement>) => {
        await signOut()
    }
    return (
        <>
            {
                status === "unauthenticated" ?
                    <>
                        <Link href="/login">Login</Link>
                    </>
                    :
                    <>
                        <Link href="write">Write</Link>
                        <span className="cursor-pointer" onClick={handleSignOut}>Logout</span>
                    </>
            }
        </>
    )
}

export default AuthLinks