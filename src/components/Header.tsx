import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !isScrolled && location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isTransparent ? 'py-6 bg-transparent' : 'py-4 bg-neutral-50/90 backdrop-blur-lg'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* <Link
            to="/"
            className={`font-serif text-base sm:text-lg tracking-tight uppercase ${
              isTransparent ? 'text-neutral-50' : 'text-neutral-900'
            }`}
          >
            Design Hut Studio
          </Link> */}

          <Link
            to="/"
            className="font-logo text-xl tracking-wider font-light uppercase"
          >
            <span className="font-normal">Design</span> Hut Studio
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="/#services"
              className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${isTransparent ? 'text-neutral-50' : 'text-neutral-800'
                }`}
            >
              Services
              <span
                className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isTransparent ? 'bg-neutral-900 group-hover:bg-neutral-50' : 'bg-neutral-50 group-hover:bg-neutral-900'
                  }`}
              ></span>
            </a>
            <Link
              to="/projects"
              className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${isTransparent ? 'text-neutral-50' : 'text-neutral-800'
                }`}
            >
              Projects
              <span
                className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isTransparent ? 'bg-neutral-900 group-hover:bg-neutral-50' : 'bg-neutral-50 group-hover:bg-neutral-900'
                  }`}
              ></span>
            </Link>
            <Link
              to="/construction"
              className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${isTransparent ? 'text-neutral-50' : 'text-neutral-800'
                }`}
            >
              Materials
              <span
                className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isTransparent ? 'bg-neutral-900 group-hover:bg-neutral-50' : 'bg-neutral-50 group-hover:bg-neutral-900'
                  }`}
              ></span>
            </Link>
            <Link
              to="/contact"
              className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${isTransparent ? 'text-neutral-50' : 'text-neutral-800'
                }`}
              aria-label="Contact"
            >
              Contact
              <span
                className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isTransparent ? 'bg-neutral-900 group-hover:bg-neutral-50' : 'bg-neutral-50 group-hover:bg-neutral-900'
                  }`}
              ></span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

