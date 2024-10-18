import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalContact from '../pages/contact'; 

type NavbarProps = {
  toggleModal: () => void; 
};

const Navbar: React.FC<NavbarProps> = ({ toggleModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen] = useState(false); // State untuk modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#3f3f40] py-4 px-8 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <img
              src="public/veritaslogo.jpg"
              alt="veritas"
              className="max-w-[100px] max-h-[50px]"
            />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} bg-[#3f3f40]`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
              <li>
                <Link to="/" className="text-white font-medium" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white font-medium" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white font-medium" onClick={toggleMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-white font-medium" onClick={toggleMenu}>
                  Teams
                </Link>
              </li>
              <li>
                {/* Gunakan toggleModal untuk membuka modal saat "Contact" diklik */}
                <button className="text-white font-medium" onClick={toggleModal}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Modal Contact Us */}
      <ModalContact isVisible={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Navbar;
