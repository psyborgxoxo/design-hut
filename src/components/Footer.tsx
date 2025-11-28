import React from 'react';
import { Instagram, Link } from 'lucide-react';
import logo from "../assets/loga.png";


function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-emerald-950 text-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Studio Info */}
          <div>
            {/* <a href="/" className="mb-6 hover:opacity-80 transition-opacity">
              <img
                src={logo}
                alt="Design Hut Logo"
                className="h-24 sm:h-32 object-contain" // Increase the size here
              />
            </a> */}

            <a href="/" className="mb-6 sm:hover:opacity-80 transition-opacity flex justify-center sm:block">
              <img
                src={logo}
                alt="Design Hut Logo"
                className="h-32 sm:h-40 object-contain"
              />
            </a>
            {/* <p className="text-gray-400 text-sm sm:text-base">
              Bringing your vision to life through exceptional design and creativity.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/designhutstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://wa.me/916360642212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
            <p>© 2024 Design Hut Studios. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Curated By ST3GN0</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


// import React from 'react';
// import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
// import logo from "../assets/loga.png";

// function Footer() {
//   return (
//     <footer className="bg-emerald-950 text-white">
//       {/* Main Footer Content */}
//       <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
//         {/* Top Section - Logo and Brand */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//           {/* Brand Column */}
//           <div className="md:col-span-1 flex flex-col items-center md:items-start">
//             <a href="/" className="mb-6 hover:opacity-80 transition-opacity">
//               <img
//                 src={logo}
//                 alt="Design Hut Logo"
//                 className="h-24 sm:h-32 object-contain" // Increase the size here
//               />
//             </a>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Crafting bespoke interiors that blend elegance with functionality.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="md:col-span-1">
//             <h3 className="text-lg font-semibold mb-6 text-neutral-100">Navigation</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#services" className="text-gray-400 hover:text-emerald-300 transition-colors text-sm">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="text-gray-400 hover:text-emerald-300 transition-colors text-sm">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#testimonials" className="text-gray-400 hover:text-emerald-300 transition-colors text-sm">
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="text-gray-400 hover:text-emerald-300 transition-colors text-sm">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="md:col-span-1">
//             <h3 className="text-lg font-semibold mb-6 text-neutral-100">Contact</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start space-x-3">
//                 <Phone className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
//                 <a href="tel:+918050596670" className="text-gray-400 hover:text-emerald-300 transition-colors text-sm">
//                   +91 8050596670
//                 </a>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <Mail className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
//                 <a href="mailto:souravshetty10@gmail.com" className="text-gray-400 hover:text-emerald-300 transition-colors text-sm">
//                   souravshetty10@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
//                 <span className="text-gray-400 text-sm">Bengaluru, Karnataka</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div className="md:col-span-1">
//             <h3 className="text-lg font-semibold mb-6 text-neutral-100">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://www.instagram.com/designhutstudio/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-emerald-900 hover:bg-emerald-800 p-3 rounded-lg transition-colors duration-300"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://wa.me/916360642212"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-emerald-900 hover:bg-emerald-800 p-3 rounded-lg transition-colors duration-300"
//                 aria-label="WhatsApp"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-emerald-900/50 my-8"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm space-y-4 md:space-y-0">
//           <p>© 2024 Design Hut Studio. All rights reserved.</p>
//           <p className="text-emerald-400 font-medium">Designed with precision • Built with passion</p>
//           <p>Curated by ST3GN0</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;