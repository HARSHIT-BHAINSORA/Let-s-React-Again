import "./Header.css";
import { LOGO_IMG } from "../utils/constant";
import { useContext, useState } from "react";
import { CardContext } from "./Context";

const Header = () => {
  const [user, setUser] = useState("Login");
  const { itemCnt } = useContext(CardContext);
  return (
    <div className="Navbar-component">
      <div className="logo-component">
        <img className="logo-image" src={LOGO_IMG} />
      </div>
      <div className="Navbar-links">
        <ul className="links-elements">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
