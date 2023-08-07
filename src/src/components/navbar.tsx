import React, { useState } from 'react';
import { NavLink } from '../constants/types';
import { Link } from 'react-scroll';
import profile from '../assets/logz.png';

interface NavbarProps {
  navlinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navlinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto max-w-screen-xl px-4 flex items-center justify-between p-4"
    >
      <Link to="home" className="inline-flex h-20 w-20 items-center justify-center rounded-lg">
        <img src={profile} alt="Subract Logo" width={500} height={500} />
      </Link>
      <button
        className="lg:hidden focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle Mobile Menu"
      >
        <svg
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      <ul
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } lg:flex items-center gap-2 text-sm font-medium text-gray-500`}
      >
        {navlinks.map((navlink) => (
          <div className="py-4 px-4 border border-green-500" key={navlink.id}>
            <li className="lg:hidden">
              <Link
                to={navlink.url}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="rounded-lg px-3 py-2 text-green-500 cursor-pointer block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navlink.label}
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                to={navlink.url}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="rounded-lg px-3 py-2 text-green-500 cursor-pointer"
              >
                {navlink.label}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
