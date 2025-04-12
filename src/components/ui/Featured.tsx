import Image from "next/image"
import p1 from "../../../public/p1.jpeg"
const Featured = () => {
    return (
        <div className="mt-8">
            <p className="text-8xl">
                Hey lama dev here! discover my stories and creative ideas.
            </p>
            <div className="mt-14 flex gap-12 items-center relative">
                <div className="flex-1">
                    <Image src={p1} alt="img" className="h-[500px] object-cover"></Image>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <p className="text-4xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat.
                    </p>
                    <p className="text-2xl text-softTextColor font-[300]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum ullam error exercitationem veritatis consectetur repellendus deserunt reprehenderit, ut, unde minima doloremque fuga voluptates nisi reiciendis culpa? Fuga, aperiam aspernatur.
                    </p>
                    <button className="bg-softBg w-fit px-5 py-4 rounded-md">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured