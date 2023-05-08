import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import avatar from '../images/image-avatar.png'

const Header = () => {
  return (
    <header className="flex">
      <div className="flex">
        <img src={logo} alt="logo"/>
        <NavBar />
      </div>
      <div className="flex">
        <button>cart</button>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header
