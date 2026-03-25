import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 shadow-sm text-black">
      <Container>
        {/* Navbar */}
        <div className="flex justify-between items-center w-full">
          
          {/* Logo + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Dropdown */}
            <div className="dropdown sm:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li><a href="#">Home</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Title */}
            <a href="#" className="text-xl lg:text-2xl font-medium">
              CS — Ticket System
            </a>
          </div>

          {/*  Navigation + Button */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Navigation Menu */}
            <ul className="menu menu-horizontal px-1 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            {/* Action Button */}
            <button className="btn btn-active btn-secondary border-none bg-gradient-to-r from-purple-900 to-purple-500 text-sm font-light flex items-center gap-1">
              <span>+</span> New Ticket
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
