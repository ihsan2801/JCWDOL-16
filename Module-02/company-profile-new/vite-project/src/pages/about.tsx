import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <section id="about" className="w-full bg-gray-100 py-16">
       
        {/* About Content */}
        <div className="container mx-auto py-12 px-6 md:px-0 flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src="/about-us-2.jpg" alt="Company Building" className="rounded-lg shadow-lg" />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              Veritas Digital Technology is a leading digital technology school dedicated to empowering individuals with skills and knowledge for the future. Our goal is to provide the best learning experience.
            </p>
            <p className="text-gray-700">
              Since our establishment, we have trained hundreds of professionals ready to make an impact in the tech industry.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Goals</h2>
            <div className="flex flex-col md:flex-row justify-around items-start">
              <div className="mb-8 md:mb-0 md:w-1/3">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To educate and empower individuals with the necessary skills to succeed in the digital era.</p>
              </div>
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">To become the leading technology school recognized for our innovative teaching methods and student success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">History</h2>
            <p className="text-gray-700 text-lg text-justify px-6">
              Veritas Digital Technology was founded in 2010 with the aim of bridging the gap between traditional education and the rapidly evolving technology landscape. Our founders, experienced professionals in the field, recognized the need for a more adaptive and hands-on approach to education that equips students with real-world skills. Over the years, we have expanded our programs, offering courses in software development, data science, and digital marketing. Our commitment to innovation and excellence has allowed us to help countless individuals achieve their dreams in the tech industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
