import React from "react";
import {Link} from "react-router-dom";

import hamburger from "../../images/hamburger.png";
import home from "../../images/home.png";
import checkout from "../../images/checkout.png";

const Footer = () => {
  return(
    <footer className="footer">
      <Link to="/" className="footer-icon-home">
        <img className="footer-icon" src={home} alt="home"/>
        <p>Home</p>
      </Link>
      <Link to="/order" className="footer-icon-order">
        <img className="footer-icon" src={hamburger} alt="home"/>
        <p>Order</p>
      </Link>
      <Link to="/checkout" className="footer-icon-checkout">
        <img className="footer-icon" src={checkout} alt="checkout"/>
        <p>Checkout</p>
      </Link>
    </footer>
  );
}

export default Footer;
