import Link from "next/link";


import { getPosts } from "@/utils/fetchData";
import { getFormattedTime } from "@/utils/timeConverter";

const categoryColors = {
    travel: "#ff7857",
    culture: "#ffb14f",
    food: "#7fb881",
    fashion: "#ff7887",
    coding: "#775ace",
    style: "#789cff"
};

const Favourite = async () => {
    const data = await getPosts();


    return (
        <div>
            <div className="flex flex-col gap-10 pt-10">
                {
                    data.map(ele => {
                        const color = categoryColors[ele.category as keyof typeof categoryColors];
                        return (
                            <Link href={`/blog/${ele._id}`} className="flex items-center gap-4" key={ele._id}>

                                <div className="flex-[4] flex flex-col gap-[5px]">
                                    <span className="text-xs text-white px-2 py-1 rounded-full w-fit"
                                        style={{ backgroundColor: color }}
                                    >
                                        {ele.category.charAt(0).toUpperCase() + ele.category.slice(1)}
                                    </span>

                                    <p className="text-sm font-[500] text-softTextColor">
                                        {ele.title}
                                    </p>

                                    <div className="text-xs">
                                        <span className="font-[500]">{ele.username}</span>
                                        <span className="text-gray-500"> - {getFormattedTime(ele.createdAt).slice(0, 10)}</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Favourite;