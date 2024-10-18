import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="h-[100vh] py-20 bg-[#2c2c2e]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#ffd700] mb-20">
           About Me 
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-4">
          <h3 className="text-2xl font-bold text-white">About Me</h3>
          <div className="mt-4 space-y-2">
            <p className="text-white">
              Name: <span className="text-[#ffeaaa]">Ihsan Fairuz Hendriawan</span>
            </p>
            <p className="text-white">
              Email: <span className="text-[#ffeaaa]">ihsan19002@mail.unpad.ac.id</span>
            </p>
            <p className="text-white">
              Phone: <span className="text-[#ffeaaa]">+6281 333 650 292</span>
            </p>
            <p className="text-white">
              Address: <span className="text-[#ffeaaa]">Jakarta, Indonesia</span>
            </p>
            <p className="text-white">
              Freelance: <span className="text-[#ffeaaa]">Available</span>
            </p>
          </div>

          <div className="mt-6">
            <a
              href="/contact"
              download
              className="bg-green-500 text-white py-2 px-6 rounded-full transition duration-300 hover:bg-green-600"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/img/wslogo.png"
            alt="wslogo"
            className="w-56 h-56 rounded-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
