import { useState } from "react";
import "../index.css";

function Gallery({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const imageStyle = {
  //   backgroundImage: `url(${images[currentIndex]})`,
  //   maxWidth: "100%",
  //   maxHeight: "100%",
 
  // };

  const handleLeft = (e) => {
    e.preventDefault()
    setCurrentIndex(currentIndex + 1 === images.length ? 0 : currentIndex + 1)
  }

  const handleRight = (e) => {
    e.preventDefault()
    setCurrentIndex(currentIndex - 1 === -1 ? images.length - 1 : currentIndex - 1)
  }
  return (
    <div className="gallery">
        <button onClick={handleLeft} className="btn btn-left"></button>
        <button onClick={handleRight} className="btn btn-right"></button>
      {/* <div className="pic" style={imageStyle}></div> */}
      <img className="pic" src={images[currentIndex]} alt="product" />
    </div>
  );
}

export default Gallery;
