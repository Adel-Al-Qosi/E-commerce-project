import { useState } from "react";
import data from "../data/data";
import "../index.css";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageStyle = {
    backgroundImage: `url(${data[0].images[currentIndex]})`,
    width: "100%",
    height: "100%",
 
  };

  const handleLeft = (e) => {
    e.preventDefault()
    setCurrentIndex(currentIndex + 1 === data[0].images.length ? 0 : currentIndex + 1)
  }

  const handleRight = (e) => {
    e.preventDefault()
    setCurrentIndex(currentIndex - 1 === -1 ? data[0].images.length - 1 : currentIndex - 1)
  }
  return (
    <div className="gallery">
        <button onClick={handleLeft} className="btn btn-left"></button>
        <button onClick={handleRight} className="btn btn-right"></button>
      <div className="pic" style={imageStyle}></div>
    </div>
  );
}

export default Gallery;
