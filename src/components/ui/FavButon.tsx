"use client"

import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";

const FavButon = ({ postId }: { postId: string }) => {
    const { data } = useSession()
    const [value, setValue] = useState(true);

    const addToFav = async () => {
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/favorite`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: data?.user?.email })
        });
        if (result.ok) {
            setValue(!value);
            Swal.fire({
                title: "Success",
                text: "Added To Favorite",
                icon: "success"
            });
        }
    }

    const removeFromFav = async () => {
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/unfavorite`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: data?.user?.email })
        });
        if (result.ok) {
            setValue(!value);
            Swal.fire({
                title: "Removed",
                text: "Removed from Favorite",
                icon: "success"
            });
        }
    }
    return (
        <div>
            {
                value
                    ?
                    <button onClick={addToFav}>
                        <Heart color="#f87171" />
                    </button>
                    :
                    <button onClick={removeFromFav}>
                        <Heart fill="#f87171" color="#f87171" />
                    </button>
            }
        </div>
    )
}

export default FavButon