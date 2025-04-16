"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
    const { status } = useSession();

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <>
            {
                status === "unauthenticated" ?
                    <Link href="/login">Login</Link>
                    :
                    <>
                        <Link href="/write">Write</Link>
                        <span className="cursor-pointer" onClick={handleSignOut}>Logout</span>
                    </>
            }
        </>
    );
};

export default AuthLinks;
