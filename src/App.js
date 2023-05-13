import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleAddToCart = (product) => {
    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== productId)
    );
  };

  const handleClearCart = () => {
    setCartProducts([]);
  };

  return (
    <div>
      <Router>
        <Header
          isCartVisible={isCartVisible}
          toggleCart={toggleCart}
          cartProducts={cartProducts}
          handleClearCart={handleClearCart}
        />
        <Routes>
          <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        </Routes>
        {isCartVisible && (
          <Cart
            cartProducts={cartProducts}
            handleRemoveFromCart={handleRemoveFromCart}
            handleClearCart={handleClearCart}
            isVisible={isCartVisible}
          />
        )}
      </Router>
    </div>
  );
}

const Root = () => {
  return <App />;
};

export default Root;
