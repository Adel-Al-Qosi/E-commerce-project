import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import "../index.css";

const Header = () => {
  
  return (
    <header className="flex header">
      <div className="flex">
        <img src={logo} alt="logo"/>
        <NavBar />
      </div>
      <div className="flex">
        <button>
          <span className="sr-only">cart</span>
        </button>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
