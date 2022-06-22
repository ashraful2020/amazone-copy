import React from 'react'
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          srcSet=""
        />
      </Link>
      <div className="header-search">
        <input className="search-input" type="text" />
        <FaSearch className="search-icon"></FaSearch>
      </div>
      <div className="header-nav">
        <div className="header-info">
          <span>Guest plz</span>
          <span>sign in </span>
        </div>
        <div className="header-info">
          <span>return </span>
          <span>& order</span>
        </div>
        <div className="header-info">
          <span>Your</span>
          <span>payment</span>
        </div>
        <Link to="/checkout">
        <div className="header-cart-icon">
          <FaCartPlus /> <span>0</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header