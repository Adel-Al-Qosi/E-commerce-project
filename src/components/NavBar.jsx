import { NavLink } from "react-router-dom";
import '../index.css'

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <NavLink exact to="/">Collections</NavLink>
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
