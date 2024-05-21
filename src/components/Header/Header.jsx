import React from "react";
import { IoIosMenu } from "react-icons/io";
import logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="top-line">
      <a className="logo" href="/#">
        <span className="logo__img-wrapper">
          <img className="logo__img" src={logo} alt="" />
        </span>
        <span className="logo__text">AutoLux</span>
      </a>
      <div className="top-line__decoration"></div>
      <div className="top-line__contacts">
        Phone: <span className="top-line__number">555-22-33</span>
        <span className="top-line__separator"></span>
        <span className="top-line__address">
          Address:<span className="top-line__text">Avenu str.35</span>
        </span>
      </div>
      <div className="top-line__decoration"></div>
      <div className="menu-button-container">
        <a href="/#" className="menu-button">
          <IoIosMenu size={30} />
        </a>
      </div>
    </div>
  );
};

export default Header;
