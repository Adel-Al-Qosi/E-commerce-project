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

  const handleAddToCart = (product, num) => {
    for (let i = 0; i < num; i++) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, product])
    }
  };

  const handleRemoveFromCart = (index) => {
    setCartProducts((prevCartProducts) => {
      const updatedCart = [...prevCartProducts];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
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
          
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>
        {isCartVisible && (
          <Cart
          handleClearCart={handleClearCart}
          handleRemoveFromCart={handleRemoveFromCart}
          cartProducts={cartProducts} isVisible={isCartVisible} />
        )}
      </Router>
    </div>
  );
}

const Root = () => {
  return <App />;
};

export default Root;
