// app/page.tsx or app/blog/page.tsx (wherever you use it)

import Card from "@/components/ui/Card";
import { getPosts } from "@/utils/fetchData";

interface PageProps {
    searchParams: {
        cat?: string;
    };
}

const Page = async ({ searchParams }: PageProps) => {
    const category = searchParams.cat;
    const blogs = await getPosts();

    return (
        <div>
            <p className='my-10 text-xl font-[500]'>
                Total : {blogs.filter(e => e.category == category).length}
            </p>
            <div className="flex flex-col gap-10">
                {
                    blogs.filter(e => e.category == category).map(ele => {
                        return <div key={ele._id}>
                            <Card data={ele}></Card>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Page;
