"use client";

import React from "react";
// import { useRouter } from "next/navigation";

const Pagination = () => {
    // const router = useRouter();

    return (
        <div className="flex justify-center gap-4 mt-8">
            <button
                className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed`}
            // disabled={!hasPrev}
            // onClick={() => router.push(`?page=${page - 1}`)}
            >
                Previous
            </button>
            <button
                className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed`}
            // disabled={!hasNext}
            // onClick={() => router.push(`?page=${page + 1}`)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
