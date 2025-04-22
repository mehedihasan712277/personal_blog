"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
    const { status, data } = useSession();
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
                        <Link href={`/profile/${data?.user?.email?.split("@")[0]}`}>Profile</Link>
                        <span className="cursor-pointer" onClick={handleSignOut}>Logout</span>
                    </>
            }
        </>
    );
};

export default AuthLinks;
