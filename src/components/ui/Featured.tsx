import Image from "next/image"
import p1 from "../../../public/p1.jpeg"
import Link from "next/link"
const Featured = () => {
    return (
        <div className="mt-8">
            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 14i:text-8xl">
                <span className="font-[500]">{"Hey Bloggers' here!"}</span> <span className="font-[300]">Discover stories and creative ideas.</span>
            </p>
            <div className="mt-14 flex flex-col lg:flex-row gap-12 items-center relative">
                <div className="flex-1">
                    <Image src={p1} alt="img" className="h-[500px] object-cover"></Image>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <p className="text-4xl">
                        {"Welcome to Our Personal Blog: A Journey Through Technology, Travel, Fashion, and Life's Inspiring Stories"}
                    </p>
                    <p className="text-2xl text-softTextColor font-[300]">
                        {"Hello and welcome! We're thrilled to have you here on our personal blog, where we share our thoughts, stories, and experiences. Whether you're a regular reader or a first-time visitor, we hope you find inspiration, ideas, and maybe even a little laughter along the way."}
                    </p>
                    <Link href="/about" className="w-fit">
                        <button className="bg-softBg w-fit px-5 py-4 rounded-md shadow-lg">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Featured