
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">React CRUD</h1>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            HOME
          </Link>
          <Link to="/create-user" className="hover:text-gray-300">
            CREATE USER
          </Link>
          <Link to="/show-user" className="hover:text-gray-300">
            SHOW USER
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/create-user"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
            onClick={() => setIsOpen(false)}
          >
            CREATE USER
          </Link>
          <Link
            to="/show-user"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
            onClick={() => setIsOpen(false)}
          >
            SHOW USER
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
