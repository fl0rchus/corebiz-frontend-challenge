import React, { useContext } from "react";
import Bars from "../../assets/bars.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";
import SearchIcon from "../../assets/search-icon.svg";
import CorebizLogo from "../../assets/corebiz-logo.svg";
import User from "../../assets/user.svg";
import { quantityContext } from "../../App.js";

const Navbar = () => {
  const { quantity } = useContext(quantityContext);

  return (
    <nav className="navbar">
      <div className="navbar__bars">
        <img src={Bars} className="bars" />
      </div>

      <div className="navbar__logo-div">
        <a href="#" target="_blank">
          <img src={CorebizLogo} alt="Corebiz" className="navbar__logo" />
        </a>
      </div>

      <div className="navbar__search flexbox-fix">
        <input
          type="text"
          placeholder="O que está procurando?"
          className="search-bar__input"
        />
        <img src={SearchIcon} alt="Search" />
      </div>

      <div className="navbar__user flexbox-fix">
        <img src={User} alt="User icon" className="user__icon" />
        <p className="user__name">Minha Conta</p>
      </div>

      <div className="navbar__shopping-cart flexbox-fix">
        <img
          src={ShoppingCart}
          alt="Shopping Cart"
          className="shopping-cart__icon"
        />
        <span className="shopping-cart__pill">{quantity}</span>
      </div>
    </nav>
  );
};

export default Navbar;
