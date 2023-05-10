import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import "../index.css";
import { useState } from "react";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <header className="flex header">
      <div className="flex order">
        <img src={logo} alt="logo"/>
        <NavBar />
      </div>
      <div className="flex">
        <button className="cart" onClick={toggleCart}>
          <span className="sr-only">cart</span>
        </button>
        <img src={avatar} alt="avatar" />
      </div>
      {isCartVisible && (
        <div className="cart-container">
          <p>Your cart is empty.</p>
        </div>
      )}
    </header>
  );
};

export default Header;
