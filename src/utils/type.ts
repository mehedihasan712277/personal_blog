export type UserType = {
    name: string;
    email: string
}

type comments = {
    name: string;
    date: string;
    comment: string;
}
export type PostType = {
    _id: string;
    username: string;
    email: string;
    userImg?: string;
    category: string;
    createdAt: number;
    title: string;
    description: string;
    comments: comments[];
    image: string;
}
export type CategoryType = {
    name: string
}