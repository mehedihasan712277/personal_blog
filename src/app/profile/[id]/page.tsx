"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import { PostType } from "@/utils/type";

const ProfilePage = () => {
    const { data: session, status } = useSession();
    const [posts, setPosts] = useState<PostType[]>([]);
    const router = useRouter();

    // Redirect to /login if unauthenticated
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    const fetchUserPosts = async () => {
        try {
            const email = session?.user?.email?.split("@")[0];
            if (!email) return;

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/user/${email}`);
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleDelete = async (id: string) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to recover this post!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (!confirm.isConfirmed) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || "Failed to delete");
            }

            await res.json();
            Swal.fire({
                title: "Deleted!",
                text: "Post has been deleted.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });

            setPosts(prev => prev.filter(post => post._id !== id));
        } catch (error: unknown) {
            let message = "An unknown error occurred.";
            if (error instanceof Error) {
                message = error.message;
            }
            Swal.fire({
                title: "Error",
                text: message,
                icon: "error",
            });
        }
    };

    useEffect(() => {
        if (status === "authenticated") {
            fetchUserPosts();
        }
    }, [status, session]);

    return (
        <div>
            <div className="">
                <div>
                    <p className="text-3xl font-[500]">
                        {session?.user?.name}
                    </p>
                    <p className="text-xl text-softTextColor">
                        {session?.user?.email}
                    </p>
                </div>
                {
                    Boolean(posts.length) && <p className="text-3xl py-6">Your Blogs</p>
                }
                <div className="space-y-10">

                    {
                        posts.length === 0 ?
                            <div className="text-xl text-softTextColor text-center h-[calc(100vh-100px)] flex items-center justify-center">
                                You did not post anything
                            </div>
                            :
                            posts?.slice()?.reverse()?.map(post => (
                                <div className="relative group" key={post._id}>
                                    <Card data={post} />
                                    <button
                                        onClick={() => handleDelete(post._id)}
                                        className="absolute bottom-4 right-4 opacity-0 transition-all ease-in-out duration-150 group-hover:opacity-100 h-12 w-12 bg-softBg flex justify-center items-center rounded-full active:scale-90"
                                    >
                                        <Trash2 color="crimson" />
                                    </button>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
