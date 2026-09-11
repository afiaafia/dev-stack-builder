import { useState } from 'react';
import logoText from '../assets/logo-text.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 md:flex md:items-center md:justify-between md:py-4">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-2xl text-gray-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center justify-center md:justify-start"
        >
          <img src={logoText} alt="Dev Stack" className="h-8 w-auto sm:h-9" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-pink-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 sm:gap-3 md:static md:translate-y-0">
          <button
            type="button"
            onClick={closeMenu}
            className="text-xs font-medium text-gray-700 transition hover:text-pink-600 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={closeMenu}
            className="gradient-primary rounded-full px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 sm:px-5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-gray-700 transition hover:text-pink-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
