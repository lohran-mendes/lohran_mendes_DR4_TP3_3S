import { NavLink } from "react-router";
import "./styles.css";

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegacao principal">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `navbar-link${isActive ? " navbar-link-active" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Booking"
        className={({ isActive }) =>
          `navbar-link${isActive ? " navbar-link-active" : ""}`
        }
      >
        Booking
      </NavLink>
      <NavLink
        to="/Dashboard"
        className={({ isActive }) =>
          `navbar-link${isActive ? " navbar-link-active" : ""}`
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
}