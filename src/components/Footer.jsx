import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">About</h2>
          <p className="text-gray-400 leading-relaxed">
            African Countries WebApp is a complete reference for all African countries including their flags, currencies, and locations. Perfect for learning or travel reference.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Countries</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-gray-400">Email: rapidmaan1@gmail.com</p>
          <p className="text-gray-400">Phone: +252616646974</p>
          <div className="flex space-x-3 mt-3">
            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500">
              F
            </span>
            <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-400">
              I
            </span>
            <span className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-300">
              T
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} African Countries WebApp. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
