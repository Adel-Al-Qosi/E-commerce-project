function Gallery({images, photoVisible, setPhotoVisible}) {
  // const imageStyle = {
  //   backgroundImage: `url(${images[photoVisible]})`,
  //   maxWidth: "100%",
  //   maxHeight: "100%",
 
  // };

  const handleLeft = (e) => {
    e.preventDefault()
    setPhotoVisible(photoVisible + 1 === images.length ? 0 : photoVisible + 1)
  }

  const handleRight = (e) => {
    e.preventDefault()
    setPhotoVisible(photoVisible - 1 === -1 ? images.length - 1 : photoVisible - 1)
  }
  return (
    <div className="gallery">
        <button onClick={handleLeft} className="btn btn-left"></button>
        <button onClick={handleRight} className="btn btn-right"></button>
      {/* <div className="pic" style={imageStyle}></div> */}
      <img className="pic" src={images[photoVisible]} alt="product" />
    </div>
  );
}

export default Gallery;
