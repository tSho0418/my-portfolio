import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-sky-300 text-white py-3 px-4 md:py-6 md:px-20 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-4xl font-serif">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            Portfolio
          </Link>
        </div>
        <ul className="hidden md:flex font-serif space-x-12 items-center">
          <li>
            <Link
              href="/"
              className="md:text-3xl hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#About"
              className="md:text-3xl hover:opacity-80 transition-opacity"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="md:text-3xl hover:opacity-80 transition-opacity"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Qualifications"
              className="md:text-3xl hover:opacity-80 transition-opacity"
            >
              Qualifications
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
