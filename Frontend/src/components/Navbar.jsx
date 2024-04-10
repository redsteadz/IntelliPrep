import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-transparent">
        <Link to="/">
          <img
            src="https://github.com/Noman-Ahmed-Khan/Hosted-images/blob/main/IntelliPrep%20Logo(2).png?raw=true"
            alt="INTELLIPREP LOGO"
          />
        </Link>
        <div>
          <ul id="buttons">
            <li>
              <Link to="/signup">
                <button>SIGN IN</button>
              </Link>
            </li>
            {/* <li><a href="index.html" class="dash">|</a></li> */}
            <li>
              <Link to="/signup">
                <button>LOG IN</button>
              </Link>
            </li>
          </ul>
        </div>
        <div id="toggle">
          <i></i>
        </div>
      </nav>
    </>
  );
}

// export default Navbar;
