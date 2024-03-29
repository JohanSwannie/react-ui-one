import { Link, NavLink } from "react-router-dom";
import logo from "../assets/swannies.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Swannies logo"
          title="Swannie Laundromat | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
        <NavLink to="/categories" className={getClass}>
          Categories
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
        <NavLink to="/toilet" className={getClass}>
          Toilet
        </NavLink>
        <NavLink to="/bollos" className={getClass}>
          Unknown Page
        </NavLink>
      </nav>
    </header>
  );
}
