import { useState } from "react";
import './App.css';
import ImageGrid from './image-grid';


function App() {



  return (
    <div className="photo-gallery">
      <div className="photo-gallery-container">
        <div className="heading"><h1>Photo Gallery</h1></div>

        <div className=""> <ImageGrid></ImageGrid></div>
      </div>

    </div>
  );
}

export default App;
