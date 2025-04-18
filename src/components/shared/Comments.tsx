"use client"

import { CommentsType } from "@/utils/type";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { getFormattedTime } from "@/utils/timeConverter";

const Comments = ({ postId, initialComments }: { postId: string, initialComments: CommentsType[] }) => {
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState(initialComments); // Manage comments state
    const { data } = useSession();
    const route = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!data?.user) {
            Swal.fire({
                title: "Please Log In",
                text: "You need to log in first to comment",
                icon: "warning",
                confirmButtonText: "Log In"
            }).then(() => {
                route.push("/login");
            });
        } else {
            if (!comment.trim()) {
                Swal.fire("Oops!", "Comment cannot be empty", "warning");
                return;
            }

            try {
                setLoading(true);

                const newComment: CommentsType = {
                    name: data?.user?.name as string,
                    email: data?.user?.email as string,
                    comment: comment,
                    createdAt: Date.now(),
                };

                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ comment: newComment }),
                });

                if (!res.ok) {
                    throw new Error("Failed to update post with comment");
                }

                // Update comments state with the new comment
                setComments(prevComments => [...prevComments, newComment]);

                Swal.fire("Success!", "Comment posted successfully", "success");
                setComment("");
            } catch (err) {
                console.error(err);
                Swal.fire("Error", "Something went wrong", "error");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="mt-10 bg-bg rounded-xl max-w-[800px] mx-auto">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <textarea
                    rows={4}
                    placeholder="Write your comment..."
                    className="resize-none p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2a2a2a] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`self-end bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {loading ? "Posting..." : "Post"}
                </button>
            </form>
            <div className="py-10">
                {Boolean(comments.length) && (
                    <div className="flex flex-col gap-4">
                        {comments.map((ele, i) => (
                            <div className="bg-softBg p-4 rounded-lg" key={i}>
                                <div className="flex flex-wrap justify-between mb-3 gap-2 text-sm text-softTextColor">
                                    <p className="font-[500]">{ele.name}</p>
                                    <p>{getFormattedTime(ele.createdAt)}</p>
                                </div>
                                <p className="text-lg">{ele.comment}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comments;