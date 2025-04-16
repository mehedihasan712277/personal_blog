import Image from "next/image"
import p1 from "../../../public/p1.jpeg"
import Link from "next/link"
import { PostType } from "@/utils/type"
type CardPropType = {
    data: PostType
}
const Card = (data: CardPropType) => {
    const { _id, title, description, category } = data.data
    return (
        <div className="flex items-center gap-12">
            <div className="flex-1 h-[350px]">
                <Image src={p1} alt="img" className="h-[350px] object-cover"></Image>
            </div>

            <div className="flex-1 space-y-8">
                <div>
                    <span className="text-gray-500">11.02.2023 - </span>
                    <span className="text-red-400 font-[500] uppercase">
                        {category}
                    </span>
                </div>

                <div>
                    <Link href={`/blog/${_id}`}>
                        <p className="text-3xl font-[700]">
                            {title}
                        </p>
                    </Link>
                </div>

                <p className="text-lg text-softTextColor font-[300]">
                    {/* {description.split(".")[0]} */}
                    {description.split(" ").slice(0, 15).join(" ") + " ..."}
                </p>

                <div className="border-b-[1px] border-red-400 w-fit">
                    <Link href={`/blog/${_id}`}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card