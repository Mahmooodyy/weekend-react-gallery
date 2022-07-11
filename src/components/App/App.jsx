import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
      getGallery();
  }, []);

  const getGallery = () => {
      axios
          .get('/gallery')
          .then((response) => {
              setGalleryList(response.data);
              console.log(response.data);
          })
          .catch((err) => {
              alert('error getting items');
              console.log(err);
          });
  };

  const likeClick = (id) => {
  axios
  .put(`/gallery/like/${id}`)
  .then((response) => {
      console.log(response);
      getGallery();
  })
  .catch((error) => {
      alert('Error with updating', error);
  });
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList list = {galleryList} likeClick = {likeClick}/>
      </div>
    );
}

export default App;
