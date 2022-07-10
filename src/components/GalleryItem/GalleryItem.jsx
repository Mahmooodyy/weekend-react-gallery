
function GalleryItem({}){
    axios
    .put(`/gallery/like/:id`)
    .then((response) => {
        console.log(response);
        getItems();
    })
    .catch((error) => {
        alert('Error with updating', error);
    });
    return(
        <>
        </>
    )
}


export default GalleryItem