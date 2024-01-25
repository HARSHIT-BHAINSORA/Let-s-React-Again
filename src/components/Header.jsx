import "./Header.css";
import { LOGO_IMG } from "../utils/constant";
import { useContext, useState } from "react";
import { CardContext } from "./Context";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("Login");
  const { itemCnt } = useContext(CardContext);
  return (
    <div className="Navbar-component">
      <div className="logo-component">
        <Link to="/">
          <img className="logo-image" src={LOGO_IMG} />
        </Link>
      </div>
      <div className="Navbar-links">
        <ul className="links-elements">
          <li>
            <Link className="links-router" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links-router" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="links-router" to="/contact">
              Contact
            </Link>
          </li>
          <li>Cart ({itemCnt})</li>
          <button
            className="auth-btn"
            onClick={() =>
              user === "Login" ? setUser("Logout") : setUser("Login")
            }
          >
            {user}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
