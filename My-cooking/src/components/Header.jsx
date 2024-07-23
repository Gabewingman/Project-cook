import React from "react";
import "../components/Header.css";
import Picture1 from "../assets/Filipino Food Pixel Art.jpg";

const Header = () => {
  return (
    <>
      <header className="headerName">
        <a href="/">
          <img src={Picture1} alt="logo" width="50px" />
        </a>

        <nav className="topNav">
          <a className="Home" href="/">
            Home
          </a>
          <a className="Menu" href="/menu">
            Menu
          </a>
          <a className="Contact" href="/contact">
            Contact Us
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
