// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/loga.png"; // ✅ Your logo path

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   const isTransparent = !isScrolled && location.pathname === "/";

//   const navLinks = [
//     { name: "Services", to: "/#services" },
//     { name: "Projects", to: "/projects" },
//     { name: "Materials", to: "/construction" },
//     { name: "Contact", to: "/contact" },
//   ];

//   const handleSmoothScroll = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
//     to: string
//   ) => {
//     if (to.startsWith("/#")) {
//       e.preventDefault();
//       const element = document.getElementById(to.replace("/#", ""));
//       if (element) element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isTransparent
//           ? "py-6 bg-transparent"
//           : "py-4 bg-neutral-50/90 backdrop-blur-lg shadow-sm"
//         }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <nav className="flex items-center justify-between">
//           {/* ✅ LOGO */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src={logo}
//               alt="Design Hut Logo"
//               className={`object-contain transition-all duration-300 ${isScrolled ? "h-12 sm:h-14" : "h-14 sm:h-16"
//                 }`}
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map(({ name, to }) => (
//               <Link
//                 key={name}
//                 to={to}
//                 onClick={(e) => handleSmoothScroll(e, to)}
//                 className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${isTransparent ? "text-neutral-50" : "text-neutral-800"
//                   }`}
//               >
//                 {name}
//                 <span
//                   className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isTransparent
//                       ? "bg-neutral-900 group-hover:bg-neutral-50"
//                       : "bg-neutral-50 group-hover:bg-neutral-900"
//                     }`}
//                 ></span>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className={`md:hidden focus:outline-none ${isTransparent ? "text-neutral-50" : "text-neutral-900"
//               }`}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </nav>

//         {/* Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div
//             className={`md:hidden mt-4 flex flex-col space-y-2 pb-4 ${isTransparent ? "text-neutral-50" : "text-neutral-800"
//               }`}
//           >
//             {navLinks.map(({ name, to }) => (
//               <Link
//                 key={name}
//                 to={to}
//                 onClick={(e) => {
//                   handleSmoothScroll(e, to);
//                   setMenuOpen(false); // Close menu after clicking
//                 }}
//                 className="text-sm uppercase tracking-widest text-center py-2 border-b border-neutral-300 last:border-b-0"
//               >
//                 {name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/loga.png";

// import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollToPlugin);

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   const isTransparent = !isScrolled && location.pathname === "/";

//   const navLinks = [
//     { name: "Services", id: "services" },
//     { name: "Projects", id: "projects-section" },
//     { name: "Materials", to: "/construction" }, // normal navigation
//     { name: "Contact", id: "contact-section" },
//   ];

//   const handleNavClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     targetId?: string,
//     to?: string
//   ) => {
//     if (targetId) {
//       e.preventDefault();
//       const target = document.getElementById(targetId);

//       if (target) {
//         gsap.to(window, {
//           duration: 1,
//           scrollTo: { y: target, offsetY: 70 },
//           ease: "power3.out",
//         });
//       }
//     }

//     if (to) {
//       // route normally
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
//         isTransparent
//           ? "py-6 bg-transparent"
//           : "py-4 bg-neutral-50/90 backdrop-blur-lg shadow-sm"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <nav className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src={logo}
//               alt="Design Hut Logo"
//               className={`object-contain transition-all duration-300 ${
//                 isScrolled ? "h-10 sm:h-12" : "h-14 sm:h-16"
//               }`}
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map(({ name, id, to }) => (
//               <Link
//                 key={name}
//                 to={to || "#"}
//                 onClick={(e) => handleNavClick(e, id, to)}
//                 className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${
//                   isTransparent ? "text-neutral-50" : "text-neutral-800"
//                 }`}
//               >
//                 {name}
//                 <span
//                   className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
//                     isTransparent
//                       ? "bg-neutral-900 group-hover:bg-neutral-50"
//                       : "bg-neutral-50 group-hover:bg-neutral-900"
//                   }`}
//                 ></span>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className={`md:hidden focus:outline-none ${
//               isTransparent ? "text-neutral-50" : "text-neutral-900"
//             }`}
//           >
//             {menuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </nav>

//         {/* Mobile Dropdown */}
//         {menuOpen && (
//           <div
//             className={`md:hidden mt-4 flex flex-col space-y-2 pb-4 ${
//               isTransparent ? "text-neutral-50" : "text-neutral-800"
//             }`}
//           >
//             {navLinks.map(({ name, id, to }) => (
//               <Link
//                 key={name}
//                 to={to || "#"}
//                 onClick={(e) => {
//                   handleNavClick(e, id, to);
//                   setMenuOpen(false);
//                 }}
//                 className="text-sm uppercase tracking-widest text-center py-2 border-b border-neutral-300 last:border-b-0"
//               >
//                 {name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/loga.png";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isTransparent = !isScrolled && location.pathname === "/";

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects-section" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId?: string
  ) => {
    if (targetId) {
      e.preventDefault();
      const target = document.getElementById(targetId);

      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: 70 },
          ease: "power3.out",
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isTransparent
          ? "py-6 bg-transparent"
          : "py-4 bg-neutral-50/90 backdrop-blur-lg shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Design Hut Logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-10 sm:h-12" : "h-14 sm:h-16"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, id }) => (
              <Link
                key={name}
                to="#"
                onClick={(e) => handleNavClick(e, id)}
                className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${
                  isTransparent ? "text-neutral-50" : "text-neutral-800"
                }`}
              >
                {name}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isTransparent
                      ? "bg-neutral-900 group-hover:bg-neutral-50"
                      : "bg-neutral-50 group-hover:bg-neutral-900"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden focus:outline-none ${
              isTransparent ? "text-neutral-50" : "text-neutral-900"
            }`}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className={`md:hidden mt-4 flex flex-col space-y-2 pb-4 ${
              isTransparent ? "text-neutral-50" : "text-neutral-800"
            }`}
          >
            {navLinks.map(({ name, id }) => (
              <Link
                key={name}
                to="#"
                onClick={(e) => {
                  handleNavClick(e, id);
                  setMenuOpen(false);
                }}
                className="text-sm uppercase tracking-widest text-center py-2 border-b border-neutral-300 last:border-b-0"
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;