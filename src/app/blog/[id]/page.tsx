import { getSinglePost } from "@/utils/fetchData";
import { getFormattedTime } from "@/utils/timeConverter";
import Image from "next/image";

import p1 from "../../../../public/p1.jpeg";
import Comments from "@/components/shared/Comments";
import { PostType } from "@/utils/type";

interface BlogDetailsPageProps {
    params: { id: string };
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
    const data: PostType | null = await getSinglePost(params.id);

    return (
        <div>
            <div className="text-softTextColor mt-12 max-w-[800px] mx-auto">
                {data?.image ? (
                    <Image src={data.image} width={800} height={450} className="h-[250px] ml:h-[350px] md:h-[400px] xl:h-[450px] w-full" alt="img" />
                ) : (
                    <Image src={p1} className="h-[250px] ml:h-[350px] md:h-[400px] xl:h-[450px] w-full" alt="img" />
                )}
                <p className="text-3xl font-[500] text-textColor mt-4">{data?.title}</p>
                <p className="font-[500] py-4">{data?.username}</p>
                <p className="font-[500] pb-12">{getFormattedTime(data?.createdAt || Date.now())}</p>
                <div className="text-xl" dangerouslySetInnerHTML={{ __html: data?.description || "" }} />
            </div>
            {data?._id && <Comments postId={data._id} initialComments={data.comments} />}
        </div>
    );
};

export default BlogDetailsPage;