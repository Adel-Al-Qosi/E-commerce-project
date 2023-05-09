import { NavLink } from "react-router-dom";
import "../index.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const NavBar = () => {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  return (
    <>
      <nav ref={navRef} className="navbar">
        <ul className="flex">
          <li>
            <NavLink to="/">Collections</NavLink>
          </li>
          <li>
            <NavLink to="/Men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/Women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
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
