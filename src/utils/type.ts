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
    userid: string;
    category: string;
    createdAt: string;
    title: string;
    description: string;
    comments: comments[];
    author: string;
    image: string;
}
export type CategoryType = {
    name: string
}