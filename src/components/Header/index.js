import React from "react";

const Header = () => (
  <header>
    <nav className="navbar sticky-top navbar-white bg-white border-bottom mb-3">
      <div className="d-flex justify-content-between w-100">
        <p className="navbar-brand">Responsiveness Testing Tool</p>

        <div className="ml-auto mt-2">
          <a
            className="donate-button"
            href="https://www.paypal.me/codewithghazi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a Coffee
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
