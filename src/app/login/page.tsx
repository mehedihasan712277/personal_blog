"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useEffect } from "react";

const LogInPage = () => {
    const { status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    useEffect(() => {
        if (status === "authenticated") {
            router.push(callbackUrl);
        }
    }, [status, router, callbackUrl]);

    if (status === "loading") {
        return <div className="text-textColor h-calc(100vh-100px) flex items-center justify-center text-xl font-[500]">Loading...</div>;
    }

    const showAlert = (name: string) => {
        Swal.fire({
            title: "Sign up with Google instead",
            text: `${name}  Sign Up method is in construcion`,
            icon: "warning",
            timer: 3000
        });
    };

    return (
        <div>
            {
                status === "unauthenticated" && <div className="flex items-center justify-center mt-[40px]">
                    <div className="bg-[--softBg] flex flex-col gap-[50px] p-[100px_150px] rounded-[10px] max-md:p-[50px_100px] max-sm:p-[30px]">
                        <div
                            onClick={() => signIn("google", { callbackUrl })}
                            className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer flex items-center justify-center bg-[#ff5555] max-sm:font-normal max-sm:text-sm hover:opacity-85 transition-all ease-in-out duration-150 active:scale-95"
                        >
                            Sign in with Google
                        </div>
                        <div
                            onClick={() => showAlert("Github")}
                            className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer flex items-center justify-center bg-[#111] max-sm:font-normal max-sm:text-sm hover:opacity-85 transition-all ease-in-out duration-150 active:scale-95">
                            Sign in with Github
                        </div>
                        <div
                            onClick={() => showAlert("Facebook")}
                            className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer flex items-center justify-center bg-[#087bea] max-sm:font-normal max-sm:text-sm hover:opacity-85 transition-all ease-in-out duration-150 active:scale-95">
                            Sign in with Facebook
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default LogInPage;
