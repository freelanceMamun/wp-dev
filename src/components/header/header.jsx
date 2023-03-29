import React from 'react';
import '../../scss/Header/sidebar.css';
import { Link } from 'react-router-dom';
import { BiLayer, BiLogOut } from 'react-icons/bi';
import {
  MdKeyboardArrowRight,
  MdOutlineHome,
  MdOutlineSearch,
  MdPerson,
  MdPostAdd,
  MdOutlinePersonPin,
  MdHeadsetMic,
} from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import { UseContent } from '../../context/Context';
import { toast } from 'react-toastify';

function ColorSchemesExample() {
  const { navToggle, setNavToggle, user, LogOut } = UseContent();

  const navitage = useNavigate();

  const showNavbar = () => {
    setNavToggle(!navToggle);
  };

  const LoginOutfun = async () => {
    try {
      await LogOut();
      navitage('/');
    } catch (error) {
      toast.warning(error.message);
    }
  };
  return (
    <>
      <nav className={`sidebar  ${navToggle ? 'active' : ''} `}>
        <header>
          <div className="image-text">
            <span className="image">WD</span>

            <div className="text logo-text">
              <span className="name">Mamun</span>
              <span className="profession">Front-end developer</span>
            </div>
          </div>

          <MdKeyboardArrowRight
            onClick={showNavbar}
            className="bx bx-chevron-right toggle"
          ></MdKeyboardArrowRight>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <MdOutlineSearch className="icon"></MdOutlineSearch>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="" onClick={showNavbar}>
                <Link to="/">
                  <MdOutlineHome className="icon"></MdOutlineHome>
                  <span className="text nav-text">Home</span>
                </Link>
              </li>

              <li className="" onClick={showNavbar}>
                <Link to="/about">
                  <MdPerson className="icon"></MdPerson>
                  <span className="text nav-text">About Me</span>
                </Link>
              </li>

              <li className="" onClick={showNavbar}>
                <Link to="/blog">
                  <MdPostAdd className="icon"></MdPostAdd>
                  <span className="text nav-text">Blog</span>
                </Link>
              </li>

              <li className="" onClick={showNavbar}>
                <Link to="/resume">
                  <MdOutlinePersonPin className="icon"></MdOutlinePersonPin>
                  <span className="text nav-text">Resume</span>
                </Link>
              </li>

              <li className="" onClick={showNavbar}>
                <Link to="/project">
                  <BiLayer className="icon"></BiLayer>
                  <span className="text nav-text">Project</span>
                </Link>
              </li>

              <li className="" onClick={showNavbar}>
                <Link to="/contact">
                  <MdHeadsetMic className="icon"></MdHeadsetMic>
                  <span className="text nav-text">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            {user ? (
              <li className="" onClick={LoginOutfun}>
                <Link href="#">
                  <BiLogOut className="icon"></BiLogOut>
                  <span className="text nav-text">Logout</span>
                </Link>
              </li>
            ) : (
              <li className="">
                <Link to={'/login'}>
                  <BiLogOut className="icon"></BiLogOut>
                  <span className="text nav-text">Login</span>
                </Link>
              </li>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
