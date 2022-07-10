function GalleryList({list}){
    return(
    <>
    {list.map((picture) => {
    return (<li key = {picture.id}> <img src={ picture.path }/> <button>LIKE</button></li>)
    })}
    </>
    )
}

export default GalleryList
