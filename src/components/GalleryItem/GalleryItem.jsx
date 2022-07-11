import React, { useState } from 'react';

function GalleryItem({item, likeClick}){
    const [showItem, setItem] = useState(true);
    const toggleImg = () => setItem (!showItem);

    return(
        <div className='Items'>
        {showItem ? <img src={item.path} onClick={toggleImg} /> : <p onClick={toggleImg}>{item.description} </p>}
        <button onClick={() => likeClick(item.id)}>like</button>
        <p>{item.likes} likes</p>

</div>
)
}


export default GalleryItem