import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rayane ISSIFOU. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="https://www.linkedin.com/in/rayaneissifou" className="text-blue-400 hover:text-blue-500 mx-4">
            LinkedIn
          </a>
          <a href="https://github.com/Rayster7" className="text-blue-400 hover:text-blue-500 mx-4">
            GitHub
          </a>
          <a href="mailto:rayane.issifou@gmail.com" className="text-blue-400 hover:text-blue-500 mx-4">
            Email
          </a>
          <a href="https://www.fiverr.com/rayaneissifou?public_mode=true" className="text-blue-400 hover:text-blue-500 mx-4">
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
