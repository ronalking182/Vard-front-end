import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-500 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">VARD</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          <Link to="/dashboard" className="text to-black hover:text-blue-300">Dashboard</Link>
          <Link to="/about" className="text-white hover:text-blue-300">About</Link>
          <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <Link to="/" className="block text-white py-2">Home</Link>
        <Link to="/dashboard" className="block text-white py-2">Dashboard</Link>
        <Link to="/about" className="block text-white py-2">About</Link>
        <Link to="/contact" className="block text-white py-2">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
