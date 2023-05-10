import { NavLink } from "react-router-dom";
import "../index.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const NavBar = () => {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  const hideNavBar = () => {
    navRef.current.classList.remove('responsive-nav')
  }

  return (
    <>
      <nav ref={navRef} className="navbar">
        <ul className="flex column">
          <li className="order-1">
            <NavLink to="/" onClick={hideNavBar}>Collections</NavLink>
          </li>
          <li className="order-1">
            <NavLink to="/Men" onClick={hideNavBar}>Men</NavLink>
          </li>
          <li className="order-1">
            <NavLink to="/Women" onClick={hideNavBar}>Women</NavLink>
          </li>
          <li className="order-1">
            <NavLink to="/About" onClick={hideNavBar}>About</NavLink>
          </li>
          <li className="order-1">
            <NavLink to="/Contact" onClick={hideNavBar}>Contact</NavLink>
          </li>
        </ul>
        
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </>
  );
};

export default NavBar;
