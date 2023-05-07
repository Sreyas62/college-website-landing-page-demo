'use client'
import React, { useRef } from "react";
import "./styles.css";
import {ImLinkedin,ImTwitter} from 'react-icons/im';
import {AiFillInstagram} from 'react-icons/ai';


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
            <ImLinkedin className="ico" size="18px"/>
            <a href="https://www.linkedin.com/school/college-of-engineering-chengannur/">LinkedIn</a>
          </li>
          <li>
            <AiFillInstagram className="ico" size="23px"/>
            <a href="https://www.instagram.com/cec_chengannur/">Instagram</a>
          </li>
          <li>
            <ImTwitter className="ico" size="20px"/>
            <a href="/">Twitter</a>
          </li>
        </ul>
      </div>
      <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" alt="Menu" onClick={showMenu} />
    </nav>
  );
}

export default NavBar;
