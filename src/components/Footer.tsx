import React from 'react';
import { Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-16 bg-emerald-950 text-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h2 className="font-logo text-2xl tracking-wider font-light uppercase mb-4">
              <span className="font-normal">Design</span> Hut Studio
            </h2>
            <p className="text-gray-400">
              Bringing your vision to life through exceptional design and creativity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/designhutstudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/916360642212" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 Design Hut Studios. All rights reserved.</p>
            <p>Curated By ST3GN0.C0</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;