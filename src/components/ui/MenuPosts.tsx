import Image from "next/image"
import Link from "next/link"

import p1 from "../../../public/p1.jpeg"

const MenuPosts = ({ imageWith, title, subtitle }: { imageWith: boolean; title: string; subtitle: string }) => {
    return (
        <div>
            <p className="text-[16px] text-gray-500">
                {subtitle}
            </p>
            <p className="text-3xl">
                {title}
            </p>
            <div className="flex flex-col gap-10 pt-10">
                <Link href="/" className="flex items-center gap-4">
                    {
                        imageWith && <div className="flex-[1]">
                            <Image src={p1} alt="img" className="aspect-square rounded-full border-[3px] border-gray-300"></Image>
                        </div>
                    }

                    <div className="flex-[4] flex flex-col gap-[5px]">
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-[#ff7857] w-fit">
                            Travel
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
                </Link>
            </div>
        </div>
    )
}

export default MenuPosts