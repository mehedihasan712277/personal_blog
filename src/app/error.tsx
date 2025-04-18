// app/error.tsx
"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error("Error caught by error.tsx:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-red-50 dark:bg-black px-4">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
                {error.message || "An unexpected error has occurred."}
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
                Try Again
            </button>
        </div>
    );
}
