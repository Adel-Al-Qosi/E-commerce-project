import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

import { useState } from "react";


function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([])

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <Router>
      <Header isCartVisible={isCartVisible} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {isCartVisible && <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} isVisible={isCartVisible} />}
    </Router>
    </div>
  );
}


const Root = () => {
  return (
    <App />
  );
};

export default Root;
