"use client"
import Image from "next/image"
import p1 from "../../../public/p1.jpeg"
import Link from "next/link"
import DOMPurify from "dompurify"; // sanitize HTML (recommended)
import { PostType } from "@/utils/type"
import { getFormattedTime } from "@/utils/timeConverter";
type CardPropType = {
    data: PostType
}


function getFirst15WordsFromHTML(html: string): string {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    const words = text.split(" ").slice(0, 15).join(" ");
    return DOMPurify.sanitize(words + (text.split(" ").length > 15 ? "..." : ""));
}

const Card = (data: CardPropType) => {
    const { _id, title, description, category, createdAt, image } = data.data
    return (
        <div className="flex items-center flex-col ml:flex-row gap-4 xl:gap-12">
            <div className="flex-1 h-[300px] xl:h-[350px]">
                {
                    image ?
                        <Image src={image} width={300} height={300} alt="img" className="w-auto h-[300px] xl:h-[350px] object-cover"></Image>
                        :
                        <Image src={p1} alt="img" className="h-[300px] xl:h-[350px] object-cover"></Image>
                }
            </div>

            <div className="flex-1 space-y-4">
                <div>
                    <span className="text-gray-500">{`${getFormattedTime(createdAt || Date.now()).slice(0, 10)}`} - </span>
                    <span className="text-red-400 font-[500] uppercase">
                        {category}
                    </span>
                </div>

                <div>
                    <Link href={`/blog/${_id}`}>
                        <p className="text-lg xl:text-3xl font-[700]">
                            {title}
                        </p>
                    </Link>
                </div>

                <div
                    className="text-sm xl:text-lg text-softTextColor font-[300]"
                    dangerouslySetInnerHTML={{
                        __html: getFirst15WordsFromHTML(description || ""),
                    }}
                />

                {/* {description.split(".")[0]} */}
                {/* {description.split(" ").slice(0, 15).join(" ") + " ..."} */}
                {/* </div> */}

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