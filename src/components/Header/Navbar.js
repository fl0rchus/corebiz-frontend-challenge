import React from "react";
import Bars from "../../assets/bars.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";
import SearchIcon from "../../assets/search-icon.svg";
import CorebizLogo from "../../assets/corebiz-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__first-row">
        <img src={Bars} />
        <a href="#" target="_blank">
          <img src={CorebizLogo} alt="Corebiz" className="navbar-logo" />
        </a>
        <div className="shopping-cart">
          <img
            src={ShoppingCart}
            alt="Shopping Cart"
            className="shopping-cart_icon"
          />
          <span className="pill">1</span>
        </div>
      </div>
      <div className="navbar__second-row">
        <div className="search-bar">
          <input
            type="text"
            placeholder="O que está procurando?"
            id="search-input"
          />
          <img src={SearchIcon} alt="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
