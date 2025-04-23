import { getSinglePost } from "@/utils/fetchData";
import { getFormattedTime } from "@/utils/timeConverter";
import Image from "next/image";

import p1 from "../../../../public/p1.jpeg";
import Comments from "@/components/shared/Comments";
import { PostType } from "@/utils/type";
import FavButon from "@/components/ui/FavButon";

interface BlogDetailsPageProps {
    params: { id: string };
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
    const data: PostType | null = await getSinglePost(params.id);

    return (
        <div>
            {data && <FavButon postId={data._id}></FavButon>}

            <div className="text-softTextColor mt-12 max-w-[800px] mx-auto">
                {data?.image ? (
                    <Image src={data.image} width={800} height={450} className="h-[250px] ml:h-[350px] md:h-[400px] xl:h-[450px] w-full" alt="img" />
                ) : (
                    <Image src={p1} className="h-[250px] ml:h-[350px] md:h-[400px] xl:h-[450px] w-full" alt="img" />
                )}
                <p className="text-3xl font-[500] text-textColor mt-4">{data?.title}</p>
                <p className="font-[500] py-4">{data?.username}</p>
                <div className="flex items-center justify-between flex-wrap gap-2 pb-12">
                    <p className="font-[500]">{getFormattedTime(data?.createdAt || Date.now())}</p>
                    <p className="text-softTextColor">Views: {data?.view}</p>
                </div>
                <div className="text-xl" dangerouslySetInnerHTML={{ __html: data?.description || "" }} />
            </div>
            {data?._id && <Comments postId={data._id} initialComments={data.comments} />}
        </div>
    );
};

export default BlogDetailsPage;