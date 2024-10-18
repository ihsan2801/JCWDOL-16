import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#3f3f40] py-4 px-8 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img
            src="/img/wslogo.png"
            alt="wslogo"
            className="max-w-[100px] max-h-[40px]"
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={`md:flex ${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static bg-[#3f3f40] w-full md:w-auto top-16 left-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="portfolio"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="service"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="blog"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social flex space-x-4">
          <a href="#" className="text-white hover:text-extra-color">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-extra-color">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-extra-color">
            <FaBehance />
          </a>
          <a href="#" className="text-white hover:text-extra-color">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;