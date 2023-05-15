import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import "../index.css";

const Header = ({ isCartVisible, toggleCart}) => {
  return (
    <header className="flex header">
      <div className="flex order">
        <img src={logo} alt="logo" />
        <NavBar />
      </div>
      <div className="flex">
        {isCartVisible ? (
          <button className="cart" onClick={toggleCart}>
            <span className="sr-only">close cart</span>
          </button>
        ) : (
          <button className="cart" onClick={toggleCart}>
            <span className="sr-only">cart</span>
          </button>
        )}
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
