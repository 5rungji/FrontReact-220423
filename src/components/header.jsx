import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [isOpen, setMenu] = useState(true);

  const toggleNav = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  return (
    <div id="header">
      <div class="space"></div>
      <div class="header">
        <div class="main_menu">
          <Link to="/">
            <img
              class="logo"
              src={require('../imgs/logo.png')}
              onClick={!isOpen && 'nav'}
              alt="logo"
            />
          </Link>
          <ul className={isOpen ? 'nav' : 'hide_nav'}>
            <li onClick={!isOpen && 'nav'}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={!isOpen && 'nav'}>
              <Link to="/brand">Brand</Link>
            </li>
            <li onClick={!isOpen && 'nav'}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li onClick={!isOpen && 'nav'}>
              <Link to="/project">Project</Link>
            </li>
            <li onClick={!isOpen && 'nav'}>
              <a
                href="http://xn--hz2b272b.kr/front/index/f_main.asp"
                target="_blank"
              >
                Shop
              </a>
            </li>
          </ul>
          <span className="tab" onClick={() => toggleNav()}>
            <FaBars className={isOpen ? 'hide_nav' : 'nav_button'} />
            <FaTimes className={isOpen ? 'nav_button' : 'hide_nav'} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
