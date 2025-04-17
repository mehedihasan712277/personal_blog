import { getSinglePost } from "@/utils/fetchData";

interface BlogDetailsPageProps {
    params: { id: string };
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
    const data = await getSinglePost(params.id);
    return (
        <div className="text-softTextColor mt-12">
            <p className="text-3xl font-[500] text-textColor">
                {data?.title}
            </p>
            <p className="font-[500] pt-4 pb-12">
                {data?.username}
            </p>
            <div className="text-xl"
                dangerouslySetInnerHTML={{
                    __html: data?.description || "",
                }}
            />
            {/* {data?.description} */}
            {/* </div> */}
        </div>
    );
};

export default BlogDetailsPage;
