"use client";

import { useRouter } from "next/navigation";


const NotFound = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center text-center bg-bg h-[calc(100vh-100px)]">
            <p className="text-[50px] text-center font-bold text-textColor">404</p>
            <p className="text-lg text-softTextColor mt-2">Page Not Found</p>
            <button
                onClick={() => router.back()}
                className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
                Go Back
            </button>
        </div>
    );
}
export default NotFound;