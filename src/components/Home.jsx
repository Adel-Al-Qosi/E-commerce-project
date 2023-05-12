import "../index.css";
import Gallery from "./Gallery";

function Home() {
  return (
    <main className="home">
      <div className="gallery-container">
        <Gallery />
        <div className="home--2"> 2 </div>
      </div>
      <div className="info-container">
        <div className="home--3"> 3 </div>
        <div className="home--4"> 4 </div>
      </div>
    </main>
  );
}

export default Home;
