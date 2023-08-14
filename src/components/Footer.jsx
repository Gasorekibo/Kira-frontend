import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsTelegram,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 mt-9">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="mt-2">
              <li>Email: KiraServices@gmail.com</li>
              <li>Phone: 11234</li>
              <li>Address: Kigali-Rwanda</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex mt-2 gap-8">
              <BsFacebook />
              <BsInstagram />
              <BsTelegram />
              <BsLinkedin />
            </div>
          </div>
          <div className="flex content-end items-center mx-auto">
            <h1 className=" w-full text-3xl font-bold text-[#068FFF] pl-8">
              Kira Services
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
