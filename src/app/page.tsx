import CardList from "@/components/ui/CardList"
import CategoryList from "@/components/ui/CategoryList"
import Featured from "@/components/ui/Featured"
import Menu from "@/components/ui/Menu"

const page = () => {

  return (
    <div>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className="flex">
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </div>
  )
}

export default page