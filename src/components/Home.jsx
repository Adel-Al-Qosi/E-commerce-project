import "../index.css";
import Gallery from "./Gallery";
import ProductInfo from "./productInfo";
import productData from "../data/data";
import { useState } from "react";

function Home({ handleAddToCart }) {
  const product = productData[0];
  const [photoVisible, setPhotoVisible] = useState(0);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  return (
    <main className="home">
      <div className="gallery-container">
        <Gallery
          photoVisible={photoVisible}
          setPhotoVisible={setPhotoVisible}
          images={product.images}
        />
        <div className="thumbnails">
          {product.thumbnails.map((thumbnail, i) => {
            return (
              <img
                key={"thumbnail" + i}
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
          <div className="flex price-info--discount">
            <p className="fw-bold fs-600">{product.priceAfterDiscount}</p>
            <p className="discount fs-400">{product.discount}</p>
          </div>
          <p className="full-price fw-bold">{product.price}</p>
        </div>
        <div className="add-to-cart-btns">
          <div className="plus-minus-btns">
          <button className="minus plus-minus"
            onClick={() =>
              setNumberOfProducts(
                numberOfProducts === 0 ? 0 : numberOfProducts - 1
              )
            }
          >
            <span className="sr-only">minus</span>
          </button>
          <p>{numberOfProducts}</p>
          <button className="plus plus-minus" onClick={() => setNumberOfProducts(numberOfProducts + 1)}>
           <span className="sr-only">plus</span>
          </button>
          </div>
          <button
            className="add-to-cart fw-bold fs-200"
            onClick={() => {
              handleAddToCart(product, numberOfProducts);
              setNumberOfProducts(0);
            }}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white"
                fill-rule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
