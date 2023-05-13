import "../index.css";
import Gallery from "./Gallery";
import ProductInfo from './productInfo'

function Home() {
  return (
    <main className="home">
      <div className="gallery-container">
        <Gallery />
        <div className="thumbnails"> 2 </div>
      </div>
      <div className="info-container">
        <div className="info">
        <ProductInfo />
        </div>
        <div className="add-to-cart-btns"> 4 </div>
      </div>
    </main>
  );
}

export default Home;
