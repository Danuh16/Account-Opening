import React from "react";
import Logo from "./images/abanav.jpg"





const Header = () => {
    return(
      <nav className="nav-bar">
      <img src={Logo} alt="Logo"/>
      <ul>
        <li>
          <a href="/">Home </a>
        </li>
        <li>
          <a href="/About"> About </a>
        </li>
      </ul>
    </nav>  
    )
  }
export default Header;  