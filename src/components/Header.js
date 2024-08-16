import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <Link className="text-5xl font-bold no-underline" to="/">
        <div className='inline'>
          Rayane Issifou
        </div>
      </Link>
        <button
          className="block lg:hidden px-2 py-1 border border-gray-600 rounded-md"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => document.getElementById('navbarNav').classList.toggle('hidden')}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div id="navbarNav" className="hidden lg:flex space-x-4">
          <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium" to="/gd-services">Graphic Design</Link>
          <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium" to="/wd-services">Web Development</Link>
          <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
