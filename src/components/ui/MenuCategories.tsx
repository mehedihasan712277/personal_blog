import Link from "next/link"

const MenuCategories = () => {
    return (
        <div>
            <div>
                <p className="text-[16px] text-gray-500">
                    Discover by topics
                </p>
                <p className="text-3xl">
                    Categories
                </p>
            </div>
            <div className="flex flex-wrap gap-5 pt-10">
                <Link href="/blog?cat=style" className="px-4 py-2 rounded-lg bg-[#57c4ff31]">
                    <p>
                        Style
                    </p>
                </Link>

                <Link href="/blog?cat=fashion" className="px-4 py-2 rounded-lg bg-[#da85c731]">
                    <p>
                        Fashion
                    </p>
                </Link>

                <Link href="/blog?cat=food" className="px-4 py-2 rounded-lg bg-[#7fb88133]">
                    <p>
                        Food
                    </p>
                </Link>

                <Link href="/blog?cat=travel" className="px-4 py-2 rounded-lg bg-[#ff795736]">
                    <p>
                        Travel
                    </p>
                </Link>

                <Link href="/blog?cat=culture" className="px-4 py-2 rounded-lg bg-[#ffb04f45]">
                    <p>
                        Culture
                    </p>
                </Link>

                <Link href="/blog?cat=coding" className="px-4 py-2 rounded-lg bg-[#5e4fff31]">
                    <p>
                        Coding
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default MenuCategories