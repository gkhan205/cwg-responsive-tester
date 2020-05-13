import React from "react";

const Footer = () => (
  <footer className="fixed-bottom">
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <p className="m-auto">
          © {new Date().getFullYear()},
          <span>
            Created with <span className="footer-love">&hearts;</span> by
          </span>
          <a
            href="https://www.codewithghazi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code With Ghazi
          </a>
        </p>
      </div>
    </nav>
  </footer>
);

export default Footer;
