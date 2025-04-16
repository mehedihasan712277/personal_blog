import { getPosts } from "@/utils/fetchData"
import Card from "./Card"
import Pagination from "./Pagination"

const CardList = async () => {
    const data = await getPosts();

    return (
        <div>
            <p className="my-12 text-3xl font-[700]">
                Recent Posts
            </p>
            <div className="space-y-12">
                {
                    data.slice().reverse().slice(0, 4).map(ele => {
                        return <div key={ele._id}>
                            <Card data={ele}></Card>
                        </div>
                    })
                }
            </div>
            <Pagination></Pagination>
        </div>
    )
}

export default CardList