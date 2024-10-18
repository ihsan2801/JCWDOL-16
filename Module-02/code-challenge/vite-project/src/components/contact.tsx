import React from "react";
import { IoMailUnread } from "react-icons/io5";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="h-screen py-20 bg-[#14143b] flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-[#ffdd79] mb-40"> CONTACT </h2>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6 bg-[#2c2cdc] rounded-lg shadow-2xl">
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center mb-4 text-white">
            <div className="bg-blue-500 p-3 rounded-full mr-3">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-300">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="flex items-center mb-4 text-white">
            <div className="bg-blue-500 p-3 rounded-full mr-3">
              <IoMailUnread className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-300">ihsan19002@mail.unpad.ac.id</p>
            </div>
          </div>
          <div className="flex items-center mb-4 text-white">
            <div className="bg-blue-500 p-3 rounded-full mr-3">
              <FaPhone className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-300">+6281 333 650 292</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-11">
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="mb-4 p-2 rounded-lg bg-[#f0f0f0] text-gray-800"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="mb-4 p-2 rounded-lg bg-[#f0f0f0] text-gray-800"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="mb-4 p-2 rounded-lg bg-[#f0f0f0] text-gray-800"
            />
            <input
              type="text"
              placeholder="Subject"
              className="mb-4 p-2 rounded-lg bg-[#f0f0f0] text-gray-800"
            />
            <textarea
              placeholder="Write your message here"
              className="mb-4 p-2 rounded-lg bg-[#f0f0f0] text-gray-800"
            />
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;