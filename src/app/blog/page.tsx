

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
            <p className="text-xl md:text-3xl font-[500] mt-5 md:mt-10">
                Category - <span className="text-red-400">{category?.toUpperCase()}</span>
            </p>
            <p className='mb-5 md:mb-10 text-sm md:text-xl text-softTextColor'>
                Total : {blogs.filter(e => e.category == category).length}
            </p>
            <div className="flex flex-col gap-16">
                {
                    blogs.filter(e => e.category == category).slice().reverse().map(ele => {
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
