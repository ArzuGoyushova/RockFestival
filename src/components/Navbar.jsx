import React, { useEffect, useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import { navLinks } from '../constants';
import close from "../assets/icons/close.svg";
import menu from "../assets/icons/menu.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="header">
      <nav className={`navbar bg-black ${isScrolled ? 'scrolled' : ''}`} >
        <div className="container">
          <Link to="/header" className="navbar-brand col-6 col-md-2 font-monument text-white text-wrap">Rock Music Festival</Link>
          <div className='menu-links'>
            <ul className='list-unstyled d-none d-sm-flex justify-content-end align-items-center flex-grow-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className="nav-link text-white me-4">
                  <a className='nav-link' href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul></div>
          <div className='d-sm-none d-flex flex-grow-1 justify-content-end align-items-center'>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-28 h-28 object-fit-contain"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div id="sidebar" className={`${toggle ? "d-flex" : "d-none"
              } p-6 absolute top-200 end-0 mx-4 my-2 rounded-xl justify-content-end`}>
            <div className='menu-links'>
            <ul className='list-unstyled d-flex flex-column justify-content-end align-items-center flex-grow-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className="nav-link text-white me-4">
                  <a className='nav-link' href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul></div>
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
}
