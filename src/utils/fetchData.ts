import { PostType, UserType } from "./type";

// Fetch all users
export const getUsers = async (): Promise<UserType[]> => {
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
            next: { revalidate: 0 },
        }).then(res => res.json());

        return result;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

// Fetch all posts
export const getPosts = async (): Promise<PostType[]> => {
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
            next: { revalidate: 0 },
        }).then(res => res.json());

        return result;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};


export const getSinglePost = async (id: string): Promise<PostType | null> => {
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
            next: { revalidate: 0 },
        }).then(res => res.json());

        return result;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
};
