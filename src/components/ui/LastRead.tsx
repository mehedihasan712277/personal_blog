import MenuPosts from "./MenuPosts"

const LastRead = () => {
    return (
        <div>
            <MenuPosts imageWith={true} subtitle="Your last read blogs" title="History"></MenuPosts>
        </div>
    )
}

export default LastRead