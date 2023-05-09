import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { useState } from "react";
import "../index.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <header className="flex header">
      <div className="flex">
        <div className="hamburger">
          <button value={open} onClick={(e) => {
            e.preventDefault()
            setOpen(!open)
          }} className={"hamburger-button"}><span className="sr-only">menu</span></button>
        </div>
        <img className="logo" src={logo} alt="logo" />
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
