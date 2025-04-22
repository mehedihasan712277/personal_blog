"use client"

import { getPostsOfUser } from "@/utils/fetchData";
import { Trash2 } from "lucide-react"
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const DeletePost = ({ id }: { id: string }) => {
    const { data } = useSession()
    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                const result = await res.json();
                console.log('Post deleted:', result);
                Swal.fire({
                    title: "Success",
                    text: "Blog Published Successfully",
                    icon: "success",
                    confirmButtonText: "Done",
                }).then(() => {
                    getPostsOfUser(data?.user?.email?.split("@")[0] as string);
                    // route.push("/#blog");
                })
            }


            // Optional: You can refresh the UI or redirect if needed
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <button
            onClick={() => handleDelete(id)}
            className="absolute bottom-4 right-4 opacity-0 transition-all ease-in-out duration-150 group-hover:opacity-100 h-12 w-12 bg-softBg flex justify-center items-center rounded-full active:scale-90">
            <Trash2 color="crimson" />
        </button>
    );
};

export default DeletePost;
