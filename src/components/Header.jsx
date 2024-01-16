import "./Header.css";
import { LOGO_IMG } from "../utils/constant";

const Header = () => (
  <div className="Navbar-component">
    <div className="logo-component">
      <img className="logo-image" src={LOGO_IMG} />
    </div>
    <div className="Navbar-links">
      <ul className="links-elements">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
