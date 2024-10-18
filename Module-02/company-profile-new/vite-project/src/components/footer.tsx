import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type FooterProps = {
  toggleModal: () => void;
};

const Footer: React.FC<FooterProps> = ({ toggleModal }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Veritas</h3>
          <p>Empowering Future Innovators</p>
        </div>

        {/* Company Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-bold mb-2">Company</h4>
          <ul>
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-bold mb-2">Resources</h4>
          <ul>
            <li>
              <button className="hover:text-gray-400" onClick={toggleModal}>
                Contact Us
              </button>
            </li>
            <li><Link to="/testimonials" className="hover:text-gray-400">Testimonials</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-500">&copy; 2024 Veritas Digital Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
