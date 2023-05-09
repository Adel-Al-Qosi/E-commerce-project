import { NavLink } from "react-router-dom";
import '../index.css'

const NavBar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default NavBar;
