import Image from "next/image"
import Link from "next/link"

import style from "../../../public/style.png"
import fashion from "../../../public/fashion.png"
import food from "../../../public/food.png"
import travel from "../../../public/travel.png"
import culture from "../../../public/culture.png"
import coding from "../../../public/coding.png"

const CategoryList = () => {
    return (
        <div>
            <p className="my-12 text-4xl font-[700]">
                Popular Categories
            </p>
            <div className="flex justify-between flex-wrap gap-5">
                <Link href="/blog?cat=style" className="flex items-center justify-center w-full md:w-[45%] lg:w-[30%] 14i:w-[15%] gap-2 h-20 rounded-lg bg-[#57c4ff31]">
                    <Image src={style} width={32} height={32} alt="img" className="rounded-full shrink-0 w-8 h-8"></Image>
                    <p>
                        Style
                    </p>
                </Link>

                <Link href="/blog?cat=fashion" className="flex items-center justify-center w-full md:w-[45%] lg:w-[30%] 14i:w-[15%] gap-2 h-20 rounded-lg bg-[#da85c731]">
                    <Image src={fashion} width={32} height={32} alt="img" className="rounded-full shrink-0 w-8 h-8"></Image>
                    <p>
                        Fashion
                    </p>
                </Link>

                <Link href="/blog?cat=food" className="flex items-center justify-center w-full md:w-[45%] lg:w-[30%] 14i:w-[15%] gap-2 h-20 rounded-lg bg-[#7fb88133]">
                    <Image src={food} width={32} height={32} alt="img" className="rounded-full shrink-0 w-8 h-8"></Image>
                    <p>
                        Food
                    </p>
                </Link>

                <Link href="/blog?cat=travel" className="flex items-center justify-center w-full md:w-[45%] lg:w-[30%] 14i:w-[15%] gap-2 h-20 rounded-lg bg-[#ff795736]">
                    <Image src={travel} width={32} height={32} alt="img" className="rounded-full shrink-0 w-8 h-8"></Image>
                    <p>
                        Travel
                    </p>
                </Link>

                <Link href="/blog?cat=culture" className="flex items-center justify-center w-full md:w-[45%] lg:w-[30%] 14i:w-[15%] gap-2 h-20 rounded-lg bg-[#ffb04f45]">
                    <Image src={culture} width={32} height={32} alt="img" className="rounded-full shrink-0 w-8 h-8"></Image>
                    <p>
                        Culture
                    </p>
                </Link>

                <Link href="/blog?cat=coding" className="flex items-center justify-center w-full md:w-[45%] lg:w-[30%] 14i:w-[15%] gap-2 h-20 rounded-lg bg-[#5e4fff31]">
                    <Image src={coding} width={32} height={32} alt="img" className="rounded-full shrink-0 w-8 h-8"></Image>
                    <p>
                        Coding
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList