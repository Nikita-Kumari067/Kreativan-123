import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

export default function Navbar() {
  return (
    <div className="flex justify-around items-center h-16 bg-blue-400">
      <div className="h-16 flex items-center">
        <Link to="/">
          <img src="./images/logo.png" alt="my logo" className="h-12" />
        </Link>
      </div>

      <div className="items-center gap-3 hidden md:flex">
        <div className="comp-1">
          <Link to="/" className="text-sm">
            Home
          </Link>
        </div>
        <div className="comp-2">
          <Link to="/about" className="text-sm">
            About Us
          </Link>
        </div>
        <div className="comp-3">
          <Link to="/product" className="text-sm">
            Products
          </Link>
        </div>
        <div className="comp-4">
          <Link to="/contact" className="text-sm">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3 xl">
        <div>
          <Link to="/login" className="text-sm">
            Login
          </Link>
        </div>
        <div>
          <Link to="/">
            <i className="fa-solid fa-cart-plus"></i>
          </Link>
        </div>
        <div>
          <Link to="/">
            <CiHeart />
          </Link>
        </div>
      </div>
    </div>
  );
}
