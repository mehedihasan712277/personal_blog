"use client";

import { useEffect } from "react";

const UpdateView = ({ postId }: { postId: string }) => {
    useEffect(() => {
        if (!postId) return;

        const updateView = async () => {
            try {
                await fetch(`/api/posts/${postId}/view`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } catch (error) {
                console.error("Failed to update view:", error);
            }
        };

        updateView();
    }, [postId]);

    return null;
};

export default UpdateView;
