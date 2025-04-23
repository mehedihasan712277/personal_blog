"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const AuthLinks = () => {
    const { status, data } = useSession();
    const pathname = usePathname();

    const handleSignOut = async () => {
        await signOut();
    };

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {
                status === "unauthenticated" ? (
                    <Link
                        href="/login"
                        className={isActive("/login") ? "text-blue-500 font-semibold" : ""}
                    >
                        Login
                    </Link>
                ) : (
                    <>
                        <Link
                            href="/write"
                            className={isActive("/write") ? "text-blue-500 font-semibold" : ""}
                        >
                            Write
                        </Link>
                        <Link
                            href={`/profile/${data?.user?.email?.split("@")[0]}`}
                            className={pathname.startsWith("/profile") ? "text-blue-500 font-semibold" : ""}
                        >
                            Profile
                        </Link>
                        <span className="cursor-pointer" onClick={handleSignOut}>Logout</span>
                    </>
                )
            }
        </>
    );
};

export default AuthLinks;
