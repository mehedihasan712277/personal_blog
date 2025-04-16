"use client"

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const page = () => {
    const { status } = useSession();
    const router = useRouter();


    if (status === "loading") {
        return <div className="text-textColor h-calc(100vh - 100px) flex items-center justify-center text-xl font-[500]">Loading...</div>;
    }

    if (status === "authenticated") {
        router.push("/")
    }



    return (
        <div>
            {
                status === "unauthenticated" && <div className="flex items-center justify-center mt-[40px]">
                    <div className="bg-[--softBg] flex flex-col gap-[50px] p-[100px_150px] rounded-[10px] max-md:p-[50px_100px] max-sm:p-[30px]">
                        <div
                            onClick={() => signIn("google")}
                            className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer flex items-center justify-center bg-[#ff5555] max-sm:font-normal max-sm:text-sm"
                        >
                            Sign in with Google
                        </div>
                        <div className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer flex items-center justify-center bg-[#111] max-sm:font-normal max-sm:text-sm">
                            Sign in with Github
                        </div>
                        <div className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer flex items-center justify-center bg-[#087bea] max-sm:font-normal max-sm:text-sm">
                            Sign in with Facebook
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default page