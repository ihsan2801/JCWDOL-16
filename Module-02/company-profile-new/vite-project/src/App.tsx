import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './pages/about';
import Services from './pages/services';
import ModalContact from './pages/contact';
import Testimonials from './components/testimonials'; 
import Teams from './pages/teams';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Router>
      <div>
        {/* Navbar mengirim toggleModal */}
        <Navbar toggleModal={toggleModal} />

        {/* Routing ke halaman-halaman */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/testimonials" element={<Testimonials />} /> 
        </Routes>

        {/* Footer di App.tsx */}
        <Footer toggleModal={toggleModal} />

        {/* Modal Contact yang muncul saat toggle */}
        <ModalContact isVisible={isModalOpen} onClose={toggleModal} />
      </div>
    </Router>
  );
};

export default App;
