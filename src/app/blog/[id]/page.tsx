import { getSinglePost } from "@/utils/fetchData";
import { getFormattedTime } from "@/utils/timeConverter";

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
            <p className="font-[500] py-4">
                {data?.username}
            </p>
            <p className="font-[500] pb-12">
                {getFormattedTime(data?.createdAt || Date.now())}
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
