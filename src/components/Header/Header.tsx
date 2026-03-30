import "./styles.css";
import { Navbar } from "../Navbar/Navbar";

export function Header() {
  return (
    <header className="header-component">
      <h1 className="header-title">Expresso Horizon</h1>
      <Navbar />
    </header>
  );
}