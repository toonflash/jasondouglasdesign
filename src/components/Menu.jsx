// Menu.js
import React from 'react';
import { Link } from "react-scroll";

const Menu = ({ open, scrollDown, section1, section2, section3, section4, section5, section6, section7, section8 }) => {
  return (
  <nav open={open} className={`menu ${open ? " is-visible" : ""}`}>
    <ul className="menuList">
      <li className="menuList__link" >
        <Link 
          activeClass="active"
          smooth
          // offset={-80}
          duration={0}
          delay={0}
          spy
          to="section2"
          onClick={() => scrollDown(section2)}
        >
          Intro
        </Link>
      </li>
      <li className="menuList__link" >
        <Link
          activeClass="active"
          smooth
          // offset={-80}
          duration={0}
          delay={0}
          spy
          to="section3"
          onClick={() => scrollDown(section3)}
        >
          Web Development
        </Link>
      </li>
      <li className="menuList__link" >
        <Link
          activeClass="active"
          smooth
          // offset={-80}
          duration={0}
          delay={0}
          spy
          to="section4"
          onClick={() => scrollDown(section4)}
        >
          Web Work 
        </Link>
      </li>
      <li className="menuList__link" >
        <Link
          activeClass="active"
          smooth
          // offset={-80}
          duration={0}
          delay={0}
          spy
          to="section5"
          onClick={() => scrollDown(section5)}
        >
          Graphic Work
        </Link>
      </li>
      <li className="menuList__link" >
        <Link
          activeClass="active"
          smooth
          // offset={-80}
          duration={0}
          delay={0}
          spy
          to="section6"
          onClick={() => scrollDown(section6)}
        >
          The Things
        </Link>
      </li>
      <li className="menuList__link" >
        <Link
          activeClass="active"
          smooth
          // offset={-80}
          duration={0}
          delay={0}
          spy
          to="section7"
          onClick={() => scrollDown(section7)}
        >
          About Me
        </Link>
      </li>
      <li className="menuList__link" >
        <Link
          activeClass="active"
          smooth
          // offset={-80}
          duration={0}
          delay={0}
          spy
          to="section8"
          onClick={() => scrollDown(section8)}
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  )
}
export default Menu;