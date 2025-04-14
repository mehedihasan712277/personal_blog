import MenuCategories from "./MenuCategories"
import MenuPosts from "./MenuPosts"

const Menu = () => {
    return (
        <div className="mt-14 space-y-20">
            <MenuPosts imageWith={false} subtitle="Whats'Hot" title="Most Popular"></MenuPosts>
            <MenuCategories></MenuCategories>
            <MenuPosts imageWith={true} subtitle="Choosen by editor" title="Editor's Pick"></MenuPosts>
        </div>
    )
}

export default Menu