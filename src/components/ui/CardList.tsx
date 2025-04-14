import Card from "./Card"
import Pagination from "./Pagination"

const CardList = () => {
    return (
        <div>
            <p className="my-12 text-3xl font-[700]">
                Recent Posts
            </p>
            <div className="space-y-12">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <Pagination></Pagination>
        </div>
    )
}

export default CardList