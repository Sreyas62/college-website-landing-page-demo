'use client'
import React, { useRef } from "react";
import "./styles.css";
import {ImLinkedin,ImTwitter} from 'react-icons/im';
import {AiFillInstagram} from 'react-icons/ai';
import Link from "next/link";


function NavBar() {
  const navLinksRef = useRef(null);

  function showMenu() {
    navLinksRef.current.style.right = "0";
  }

  function hideMenu() {
    navLinksRef.current.style.right = "-200px";
  }

  return (
    <nav id="home">
      <p className="code">College code - CHN</p>
      <div className="nav-links" ref={navLinksRef}>
        <img className="imm" src="http://cdn.onlinewebfonts.com/svg/img_143760.png" alt="Close" onClick={hideMenu} />
        <ul>
          <li className="pgs">
            <Link href="/academics">Academics</Link>
          </li>
          <li className="pgs">
            <Link href="http://tharang.ihrd.ac.in/">IHRD Tharang</Link>
          </li>
           <li className="pgs">
            <Link href="/about">About</Link>
          </li>
          <li className="pgs">
            <Link href="#locate">Locate</Link>
          </li>
          <li className="pgs">
            <Link href="#contact">Contact</Link>
          </li>
        
          <li className="ics">
            
            <div><a href="https://www.linkedin.com/school/college-of-engineering-chengannur/"><ImLinkedin className="ico" size="20px"/></a></div>
          </li>
          <li className="ics">
            
            <div><a href="https://www.instagram.com/cec_chengannur/"><AiFillInstagram className="ico" size="23px"/></a></div>
          </li>
          <li className="ics">
            
            <div><a href="/"><ImTwitter className="ico" size="20px"/></a></div>
          </li>
        </ul>
      </div>
      <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" alt="Menu" onClick={showMenu} />
    </nav>
  );
}

export default NavBar;
