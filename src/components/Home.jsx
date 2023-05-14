import "../index.css";
import Gallery from "./Gallery";
import ProductInfo from "./productInfo";
import productData from "../data/data";
import { useState } from "react";

function Home() {
  const product = productData[0];
  const [photoVisible, setPhotoVisible] = useState(0);
  return (
    <main className="home">
      <div className="gallery-container">
        <Gallery 
        photoVisible={photoVisible}
        setPhotoVisible={setPhotoVisible}
        images={product.images} />
        <div className="thumbnails">
          {product.thumbnails.map((thumbnail, i) => {
            return (
              <img
                className="thumbnail"
                onClick={() => setPhotoVisible(i)}
                src={thumbnail}
                alt="thumbnail"
              />
            );
          })}
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <ProductInfo
            state={product.state}
            name={product.name}
            company={product.company}
            description={product.description}
          />
        </div>
        <div className="price-info">
          <p>{product.price}</p>
          <p>{product.discount}</p>
          <p>{product.priceAfterDiscount}</p>
        </div>
        <div className="add-to-cart-btns">
          <button>-</button>
          <p>hello</p>
          <button>+</button>
          <button>Add to cart</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
