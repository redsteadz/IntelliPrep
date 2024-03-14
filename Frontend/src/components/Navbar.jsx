import React, { useState } from "react";
import "./NavbarStyles.css";

function LogIn() {
  alert("Clicked Log In");
}

function SignIn() {
  alert("Clicked Sign In");
}

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <button >
          <img
            src="https://github.com/Noman-Ahmed-Khan/Hosted-images/blob/main/IntelliPrep%20Logo(2).png?raw=true"
            alt="INTELLIPREP LOGO"
          />
        </button>
        <div>
          <ul id="buttons" className={clicked ? "#buttons active" : "#buttons"}>
            <li>
              <button onClick={SignIn}>SIGN IN</button>
            </li>
            {/* <li><a href="index.html" class="dash">|</a></li> */}
            <li>
              <button onClick={LogIn}>LOG IN</button>
            </li>
          </ul>
        </div>
        <div id="toggle" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
