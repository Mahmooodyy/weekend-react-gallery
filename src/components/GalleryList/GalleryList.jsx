import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({list, likeClick}){
    return(
    <div id = "gallery">
    {list.map(item => {
        return (<GalleryItem key={item.id} item={item} likeClick={likeClick} />)
    })}
    </div>
    )
}

export default GalleryList
