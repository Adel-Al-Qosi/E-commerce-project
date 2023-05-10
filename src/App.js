import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart"; // Import the Cart component

import { useState } from "react";


function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <Router>
      <Header isCartVisible={isCartVisible} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {isCartVisible && <Cart isVisible={isCartVisible} />}
    </Router>
  );
}


const Root = () => {
  return (
    <App />
  );
};

export default Root;
