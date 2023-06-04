import { useState } from 'react';
import './nav.css'
import { AiOutlineHome,AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {

    const [activeNav,setActiveNav] = useState('#')

    return (
      <>
        <nav>
          <a className={activeNav === "#" ? "active" : ""} href="#">
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#active")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#service"
            onClick={() => setActiveNav("#service")}
            className={activeNav === "#service" ? "active" : ""}
          >
            <RiServiceLine />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </nav>
      </>
    );
};

export default Nav;