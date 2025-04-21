export type UserType = {
    name: string;
    email: string
}

export type CommentsType = {
    name: string;
    email: string;
    createdAt: number;
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
    comments: CommentsType[];
    image: string;
    view: number;
}