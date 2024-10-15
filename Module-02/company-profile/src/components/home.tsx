import React from "react";


const Hero: React.FC = () => {
  return (
    <div>
      {/* Section Hero */}
      <section
        id="home"
        className="w-full h-[100vh] flex items-center justify-center bg-cover bg-center relative bg-[#414142]"
        style={{
          backgroundImage: `url('meetingphoto2.jpeg')`,
          filter: 'brightness(90%)', 
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Konten Hero */}
        <div className="relative z-10 text-center">
          <h3 className="text-[90px] mb-[20px] text-white">
            <span className="text-white">Veritas Digital Technology</span>
          </h3>
          <p className="text-white text-[23px] font-medium mb-[50px]">
            Transforming Digital Education
          </p>
          <p className="text-white text-[18px] font-light mb-[50px]">
            We are committed to bringing the best technology education and making a real impact in the digital world.
          </p>
          <a
            href="#About"
            className="bg-blue-500 text-white py-3 px-6 rounded transition duration-300 hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
      </section>

    
    </div>
  );
};

export default Hero;
