import { React, useState } from "react";
import "./header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header-menu-wrapper">
      <div className={`mobile-menu only-mobile ${showMenu ? "overlay" : ""}`}>
        <div className="mobile-nav">
          <div className="mobile-nav-item">CRED pay</div>
          <div className="mobile-nav-item">credit score check</div>
        </div>
      </div>

      <div className="max-width flex header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="cred logo"
          className="header-logo"
        />

        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--emphatic ${
              showMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
          <div className="header-nav-item">CRED pay</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
