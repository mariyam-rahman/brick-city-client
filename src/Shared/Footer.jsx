import logo from "../../public/assets/logo.png";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid  sm:grid-cols-4 gap-5 items-center text-justify">
          <div>
            <h2 className="text-2xl font-bold  pt-0">Brick City</h2>
            <p className="text-gray-400 text-justify">
              BRICK CITY is a premier LEGO toy store dedicated to providing
              high-quality LEGO products to LEGO enthusiasts of all ages. We
              offer a wide range of LEGO sets, including popular themes like
              City, Star Wars, Harry Potter, and more.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              Phone: 123-456-7890 <br />
              Email: info@example.com
            </p>
            <p className="text-gray-400">
              Address Line 1 <br />
              Address Line 2 <br />
              City, State Zip Code
            </p>
          </div>
          <div className>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-gray-400">
              Address Line 1 <br />
              Address Line 2 <br />
              City, State Zip Code
            </p>
            <p className="text-gray-400">
              Phone: 123-456-7890 <br />
              Email: info@example.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-gray-400 hover:text-gray-200 transition duration-300" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-gray-400 hover:text-gray-200 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-gray-400 hover:text-gray-200 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Brick City. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
