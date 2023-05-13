import "../index.css";
import Gallery from "./Gallery";
import ProductInfo from './productInfo'
import productData from "../data/data";

function Home() {
  const product = productData[0]
  return (
    <main className="home">
      <div className="gallery-container">
        <Gallery images={product.images} />
        <div className="thumbnails"> 2 </div>
      </div>
      <div className="info-container">
        <div className="info">
        <ProductInfo 
        name={product.name}
        company={product.company}
        price={product.price}
        discount={product.discount}
        priceAfterDiscound={product.priceAfterDiscount}
        description={product.description}
        />
        </div>
        <div className="add-to-cart-btns"> 4 </div>
      </div>
    </main>
  );
}

export default Home;
