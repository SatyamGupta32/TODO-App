import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-800 text-white py-5 text-center">
        <div className="flex justify-between flex-wrap p-5">
          <div className="flex-1 p-5 min-w-[200px]">
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-500">Task</span>Manager
            </h1>
            <p className="mt-2">
              This is a sample responsive website. I think you have the best UI
              experience here for sure.
            </p>
          </div>
          <div className="flex-1 p-5 min-w-[200px]">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <ul>
              <li className="my-1">
                <a href="#" className="text-white hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li className="my-1">
                <a href="#" className="text-white hover:text-yellow-500">
                  About
                </a>
              </li>
              <li className="my-1">
                <a href="#" className="text-white hover:text-yellow-500">
                  Services
                </a>
              </li>
              <li className="my-1">
                <a href="#" className="text-white hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 p-5 min-w-[200px] text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <ul>
              <li className="my-1 flex items-center">
                <span className="w-full"> +91 9997580015</span>
              </li>
              <li className="my-1 flex items-center">
                <span className="w-full"> satyamg501@.com</span>
              </li>
              <li className="my-1 flex items-center">
                <span className="w-full">
                  Knowledge Park III, Greater Noida, Gautam-Budh Nagar
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-700 text-gray-400 py-3 mt-5">
          &copy; 2024 MyWebsite | Designed by Satyam Gupta&trade;
        </div>
      </div>
    </div>
  );
};

export default Footer;
