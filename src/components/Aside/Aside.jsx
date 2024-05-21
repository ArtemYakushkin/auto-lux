import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import "./Aside.css";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__decoration"></div>
      <div className="aside__soc">
        <div className="aside__soc-items">
          <a
            className="aside__soc-item"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={15} />
          </a>
          <a
            className="aside__soc-item"
            href="https://uk-ua.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            className="aside__soc-item"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter size={15} />
          </a>
          <a
            className="aside__soc-item"
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok size={15} />
          </a>
        </div>
      </div>
      <div className="aside__share">
        <IoIosShareAlt size={30} />
      </div>
    </aside>
  );
};

export default Aside;
