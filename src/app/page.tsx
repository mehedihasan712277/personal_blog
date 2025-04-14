import CardList from "@/components/ui/CardList"
import CategoryList from "@/components/ui/CategoryList"
import Featured from "@/components/ui/Featured"
import Menu from "@/components/ui/Menu"

const page = () => {

  return (
    <div>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className="flex gap-12">
        <div className="flex-[5]">
          <CardList></CardList>
        </div>

        <div className="flex-[2]">
          <Menu></Menu>
        </div>
      </div>
    </div>
  )
}

export default page