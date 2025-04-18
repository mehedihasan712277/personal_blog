"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import 'react-quill/dist/quill.bubble.css';
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import { getPosts } from "@/utils/fetchData";
import { useRouter } from "next/navigation";
// Dynamically import ReactQuill to disable SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
    // const [open, setOpen] = useState(false);
    const { data, status } = useSession()
    const [bannerImg, setBannerImg] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
    const route = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            route.push("/login");
        }
    }, [status, route]);


    const handleSubmit = async () => {
        try {
            // Basic validations
            if (!title.trim()) {
                throw new Error("Title is required.");
            }

            // If image is provided, validate it's from imgbb
            if (bannerImg && !bannerImg.includes("https://i.ibb.co")) {
                throw new Error("Image must be uploaded to imgbb (https://i.ibb.co/...)");
            }

            const plainValue = value.replace(/<(.|\n)*?>/g, "").trim(); // Strip HTML tags and trim
            if (!plainValue) {
                throw new Error("Description cannot be empty.");
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: data?.user?.name,
                    email: data?.user?.email,
                    userImg: data?.user?.image,
                    category: catSlug || "style",
                    createdAt: Date.now(),
                    title,
                    description: value,
                    comments: [],
                    image: bannerImg
                }),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData?.error || "Failed to publish blog");
            }
            await getPosts();

            Swal.fire({
                title: "Success",
                text: "Blog Published Successfully",
                icon: "success",
                confirmButtonText: "Done",
            }).then(() => {
                // ✅ Clear fields after success
                setTitle("");
                setBannerImg("");
                setCatSlug("");
                setValue("");
                route.push("/#blog");
            })

        } catch (error: unknown) {
            const err = error as Error;
            console.error("Submission error:", err);
            Swal.fire({
                title: "Oops",
                text: err?.message || "Something went wrong. Please try again.",
                icon: "error",
            });
        }
    };


    return (
        <div className="relative flex flex-col gap-4">
            <input
                type="text"
                placeholder="Title"
                className="p-[0px] text-[64px] border-none outline-none bg-transparent text-[var(--textColor)] placeholder-[#b3b3b1]"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Paste image link from imgbb (optional)"
                className="text-[24px] border-none outline-none bg-transparent text-[var(--textColor)] placeholder-[#b3b3b1]"
                value={bannerImg}
                onChange={(e) => setBannerImg(e.target.value)}
            />
            <select
                className="mb-[50px] px-[20px] py-[10px] w-max bg-softBg"
                onChange={(e) => setCatSlug(e.target.value)}
            >
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>

            <ReactQuill
                className="w-full"
                theme="bubble"
                value={value}
                onChange={setValue}
                placeholder="Tell your story..."
            />
            <button
                className="absolute top-0 right-0 px-[20px] py-[10px] border-none bg-[#1a8917] text-white cursor-pointer rounded-[20px]"
                onClick={handleSubmit}
            >
                Publish
            </button>
        </div>
    );
};

export default WritePage;
