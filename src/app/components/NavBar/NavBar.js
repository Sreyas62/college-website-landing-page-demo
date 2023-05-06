'use client'
import React, { useRef } from "react";
import "./styles.css";


function NavBar() {
  const navLinksRef = useRef(null);

  function showMenu() {
    navLinksRef.current.style.right = "0";
  }

  function hideMenu() {
    navLinksRef.current.style.right = "-200px";
  }

  return (
    <nav>
      <p>College code - CHN</p>
      <div className="nav-links" ref={navLinksRef}>
        <img className="imm" src="http://cdn.onlinewebfonts.com/svg/img_143760.png" alt="Close" onClick={hideMenu} />
        <ul>
          <li>
            <a href="https://www.linkedin.com/school/college-of-engineering-chengannur/">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/cec_chengannur/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
        </ul>
      </div>
      <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" alt="Menu" onClick={showMenu} />
    </nav>
  );
}

export default NavBar;
