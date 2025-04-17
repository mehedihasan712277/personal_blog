import Image from "next/image"
import Link from "next/link"

import p1 from "../../../public/p1.jpeg"
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
                    data.slice().reverse().slice(0, 6).map(ele => {
                        const color = categoryColors[ele.category as keyof typeof categoryColors];
                        return <Link href={`/blog/${ele._id}`} className="flex items-center gap-4" key={ele._id}>
                            {
                                imageWith && <div className="flex-[1]">
                                    {
                                        ele.image ?
                                            <Image src={ele.image} width={63} height={63} className="aspect-square rounded-full border-[3px] border-gray-300" alt="img"></Image>
                                            :
                                            <Image src={p1} alt="img" className="aspect-square rounded-full border-[3px] border-gray-300"></Image>
                                    }
                                </div>
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
                            </div>
                        </Link>
                    })
                }


                {/* <Link href="/" className="flex items-center gap-4">
                    {
                        imageWith && <div className="flex-[1]">
                            <Image src={p1} alt="img" className="aspect-square rounded-full border-[3px] border-gray-300"></Image>
                        </div>
                    }

                    <div className="flex-[4] flex flex-col gap-[5px]">
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-[#ffb14f] w-fit">
                            Culture
                        </span>

                        <p className="text-lg font-[500] text-softTextColor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="text-xs">
                            <span className="font-[500]">Jhon Doe</span>
                            <span className="text-gray-500"> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>


                <Link href="/" className="flex items-center gap-4">
                    {
                        imageWith && <div className="flex-[1]">
                            <Image src={p1} alt="img" className="aspect-square rounded-full border-[3px] border-gray-300"></Image>
                        </div>
                    }

                    <div className="flex-[4] flex flex-col gap-[5px]">
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-[#7fb881] w-fit">
                            Food
                        </span>

                        <p className="text-lg font-[500] text-softTextColor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="text-xs">
                            <span className="font-[500]">Jhon Doe</span>
                            <span className="text-gray-500"> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>



                <Link href="/" className="flex items-center gap-4">
                    {
                        imageWith && <div className="flex-[1]">
                            <Image src={p1} alt="img" className="aspect-square rounded-full border-[3px] border-gray-300"></Image>
                        </div>
                    }

                    <div className="flex-[4] flex flex-col gap-[5px]">
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-[#ff7887] w-fit">
                            Fashion
                        </span>

                        <p className="text-lg font-[500] text-softTextColor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="text-xs">
                            <span className="font-[500]">Jhon Doe</span>
                            <span className="text-gray-500"> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>



                <Link href="/" className="flex items-center gap-4">
                    {
                        imageWith && <div className="flex-[1]">
                            <Image src={p1} alt="img" className="aspect-square rounded-full border-[3px] border-gray-300"></Image>
                        </div>
                    }

                    <div className="flex-[4] flex flex-col gap-[5px]">
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-[#775ace] w-fit">
                            Coding
                        </span>

                        <p className="text-lg font-[500] text-softTextColor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="text-xs">
                            <span className="font-[500]">Jhon Doe</span>
                            <span className="text-gray-500"> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>


                <Link href="/" className="flex items-center gap-4">
                    {
                        imageWith && <div className="flex-[1]">
                            <Image src={p1} alt="img" className="aspect-square rounded-full border-[3px] border-gray-300"></Image>
                        </div>
                    }

                    <div className="flex-[4] flex flex-col gap-[5px]">
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-[#789cff] w-fit">
                            Style
                        </span>

                        <p className="text-lg font-[500] text-softTextColor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="text-xs">
                            <span className="font-[500]">Jhon Doe</span>
                            <span className="text-gray-500"> - 11.02.2023</span>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}

export default MenuPosts