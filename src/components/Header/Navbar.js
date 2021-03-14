import React, { useContext } from "react";
import Bars from "../../assets/bars.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";
import SearchIcon from "../../assets/search-icon.svg";
import CorebizLogo from "../../assets/corebiz-logo.svg";
import { quantityContext } from "../../App.js";

const Navbar = () => {
  const { quantity } = useContext(quantityContext);

  return (
    <nav className="navbar">
      <div className="navbar__first-row">
        <img src={Bars} />
        <a href="#" target="_blank">
          <img src={CorebizLogo} alt="Corebiz" className="navbar__logo" />
        </a>
        <div className="shopping-cart">
          <img
            src={ShoppingCart}
            alt="Shopping Cart"
            className="shopping-cart__icon"
          />
          <span className="shopping-cart__pill">{quantity}</span>
        </div>
      </div>
      <div className="navbar__second-row">
        <div className="search-bar">
          <input
            type="text"
            placeholder="O que está procurando?"
            className="search-bar__input"
          />
          <img src={SearchIcon} alt="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
