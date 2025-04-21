import Image from "next/image";
import Link from "next/link";

import p1 from "../../../public/p1.jpeg";
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

const MenuPosts = async ({ imageWith, title, subtitle }: { imageWith: boolean; title: string; subtitle: string }) => {
    const data = await getPosts();

    // Sort the data based on the value of imageWith
    const sortedData = imageWith
        ? data.slice().reverse().slice(0, 6) // Reverse and slice for the latest 6 posts
        : data.slice().sort((a, b) => b.view - a.view).slice(0, 6); // Sort by view count and slice for top 6

    return (
        <div>
            <p className="text-[16px] text-gray-500">
                {subtitle}
            </p>
            <p className="text-3xl">
                {title}
            </p>
            <div className="flex flex-col gap-10 pt-10">
                {
                    sortedData.map(ele => {
                        const color = categoryColors[ele.category as keyof typeof categoryColors];
                        return (
                            <Link href={`/blog/${ele._id}`} className="flex items-center gap-4" key={ele._id}>
                                {
                                    imageWith && (
                                        <div className="flex-[1]">
                                            {
                                                ele.image ?
                                                    <Image src={ele.image} width={63} height={63} className="aspect-square rounded-full border-[3px] border-gray-300" alt="img" />
                                                    :
                                                    <Image src={p1} width={63} height={63} className="aspect-square rounded-full border-[3px] border-gray-300" alt="img" />
                                            }
                                        </div>
                                    )
                                }

                                <div className="flex-[4] flex flex-col gap-[5px]">
                                    <span className="text-xs text-white px-2 py-1 rounded-full w-fit"
                                        style={{ backgroundColor: color }}
                                    >
                                        {ele.category.charAt(0).toUpperCase() + ele.category.slice(1)}
                                    </span>

                                    <p className="text-sm lg:text-lg font-[500] text-softTextColor">
                                        {ele.title}
                                    </p>

                                    <div className="text-xs">
                                        <span className="font-[500]">{ele.username}</span>
                                        <span className="text-gray-500"> - {getFormattedTime(ele.createdAt).slice(0, 10)}</span>
                                    </div>
                                    {!imageWith && <span className="text-xs">view: {ele.view}</span>}
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default MenuPosts;