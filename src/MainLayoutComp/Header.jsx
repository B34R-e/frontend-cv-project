import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img
          className="header-logo-image"
          src={require("../images/mainLogo.png")}
          alt=""
        />
        <span className="header-logo-slogan">
          Jobfit:Precision Screening for Perfect Matches
        </span>
      </div>
      <div className="header-nav">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  );
}

export default Header;
