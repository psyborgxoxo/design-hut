import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const heroSlides = [
   {
    image: "https://www.boffi.com/wp-content/uploads/2025/02/COVE-3.jpg",
    title: "Modern Living",
    subtitle: "Minimalist Design"
  },
  {
    image: "https://images.unsplash.com/photo-1722649957265-372809976610?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Living",
    subtitle: "Minimalist Design"
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000",
    title: "Contemporary",
    subtitle: "Urban Spaces"
  },
  {
    image: "https://www.boffi.com/wp-content/uploads/2025/02/HIDE-PRO_OPEN.jpg",
    title: "Luxury Interiors",
    subtitle: "Premium Finishes"
  },
    {
    image: "https://www.boffi.com/wp-content/uploads/2025/02/K2_Outdoor_Copertina.jpg",
    title: "Luxury Interiors",
    subtitle: "Premium Finishes"
  }

];

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef<number | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = window.setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 8000);
  };

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        gsap.to(slide, {
          opacity: index === currentSlide ? 1 : 0,
          scale: index === currentSlide ? 1 : 1.05,
          duration: 1.8,
          ease: 'power3.inOut',
        });
      }
    });

    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30, stagger: 0.2 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 }
      );
    }

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
      );
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startSlideTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startSlideTimer();
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(60vh, 100vh, 100vh)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Content */}
      {heroSlides.map((slide: Slide, index: number) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className="absolute inset-0 opacity-0"
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        </div>
      ))}

      {/* Text Content */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-10"
        ref={textRef}
      >
        <p className="text-neutral-300 text-[10px] sm:text-xs md:text-sm font-montserrat uppercase tracking-[0.15em] mb-3 sm:mb-6 text-center">
          {heroSlides[currentSlide].title} · {heroSlides[currentSlide].subtitle}
        </p>

        
        {/* <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[180px] font-light uppercase tracking-wider leading-none text-center">
          Exquisite
        </h1> */}


        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[180px] font-light uppercase tracking-wider leading-none text-center
                relative inline-block
                 bg-gradient-to-br from-neutral-200 via-white to-neutral-800
                 bg-clip-text text-transparent
                drop-shadow-lg
                 animate-shine">
         Exquisite
        </h1>
      </div>

      {/* Navigation Buttons - Hidden on Mobile */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-neutral-100 p-3 transition-colors z-20 active:scale-90"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-neutral-100 p-3 transition-colors z-20 active:scale-90"
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {/* <div className="absolute bottom-16 sm:bottom-20 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {heroSlides.map((_, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'bg-neutral-300 w-6 sm:w-8' 
                : 'bg-neutral-500/40 w-2 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* CTA Section */}
      <div className="absolute bottom-0 left-0 right-0 sm:bottom-12 sm:left-6 sm:right-auto p-4 sm:p-0 sm:max-w-sm z-20" ref={ctaRef}>
        <p className="text-neutral-300 text-xs sm:text-sm font-montserrat mb-3 sm:mb-6 leading-relaxed tracking-wide">
          Bengaluru's atelier for bespoke interiors, crafting spaces of unparalleled sophistication.
        </p>
        <button className="text-neutral-300 text-xs sm:text-sm font-montserrat uppercase tracking-[0.15em] hover:text-neutral-100 transition-colors group flex items-center gap-2 sm:gap-3">
          Discover Our Craft
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&family=Montserrat:wght@300;400&display=swap');
        
        * {
          box-sizing: border-box;
        }

        :root {
          --primary-text: #d1d5db;
          --secondary-text: #9ca3af;
          --accent: #d4af37;
        }

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        /* Unified text color across all elements */
        .text-neutral-300 {
          color: var(--primary-text);
        }

        .text-neutral-400 {
          color: var(--secondary-text);
        }

        .text-neutral-100 {
          color: #f3f4f6;
        }

        .bg-neutral-500 {
          background-color: #6b7280;
        }

        .hover\\:text-neutral-100:hover {
          color: #f3f4f6;
        }

        /* Mobile-first responsive typography */
        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
          h1 {
            word-break: break-word;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Button improvements for touch devices */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSlider;



// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import gsap from 'gsap';

// const heroSlides = [
//   {
//     image: "https://www.boffi.com/wp-content/uploads/2025/02/COVE-3.jpg",
//     title: "Modern Living",
//     subtitle: "Minimalist Design"
//   },
//   {
//     image: "https://images.unsplash.com/photo-1722649957265-372809976610?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Modern Living",
//     subtitle: "Minimalist Design"
//   },
//   {
//     image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000",
//     title: "Contemporary",
//     subtitle: "Urban Spaces"
//   },
//   {
//     image: "https://www.boffi.com/wp-content/uploads/2025/02/HIDE-PRO_OPEN.jpg",
//     title: "Luxury Interiors",
//     subtitle: "Premium Finishes"
//   },
//   {
//     image: "https://www.boffi.com/wp-content/uploads/2025/02/K2_Outdoor_Copertina.jpg",
//     title: "Luxury Interiors",
//     subtitle: "Premium Finishes"
//   }

// ];

// interface Slide {
//   image: string;
//   title: string;
//   subtitle: string;
// }

// function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const slideInterval = useRef<number | null>(null);
//   const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const textRef = useRef<HTMLDivElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   const startSlideTimer = () => {
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//     }
//     slideInterval.current = window.setInterval(() => {
//       if (!isPaused) {
//         setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//       }
//     }, 8000);
//   };

//   useEffect(() => {
//     startSlideTimer();
//     return () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };
//   }, [isPaused]);

//   useEffect(() => {
//     slideRefs.current.forEach((slide, index) => {
//       if (slide) {
//         gsap.to(slide, {
//           opacity: index === currentSlide ? 1 : 0,
//           scale: index === currentSlide ? 1 : 1.05,
//           duration: 1.8,
//           ease: 'power3.inOut',
//         });
//       }
//     });

//     if (textRef.current) {
//       gsap.fromTo(
//         textRef.current.children,
//         { opacity: 0, y: 30, stagger: 0.2 },
//         { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 }
//       );
//     }

//     if (ctaRef.current) {
//       gsap.fromTo(
//         ctaRef.current,
//         { opacity: 0, x: -20 },
//         { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
//       );
//     }
//   }, [currentSlide]);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//     startSlideTimer();
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     startSlideTimer();
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//     startSlideTimer();
//   };

//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section
//       className="relative w-full bg-black overflow-hidden"
//       style={{ minHeight: 'clamp(60vh, 100vh, 100vh)' }}
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* Slider Content */}
//       {heroSlides.map((slide: Slide, index: number) => (
//         <div
//           key={index}
//           ref={(el) => (slideRefs.current[index] = el)}
//           className="absolute inset-0 opacity-0"
//         >
//           <img
//             src={slide.image}
//             alt={`Slide ${index + 1}`}
//             className="absolute inset-0 w-full h-full object-cover opacity-60"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
//         </div>
//       ))}

//       {/* Text Content */}
//       <div
//         className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-10"
//         ref={textRef}
//       >
//         <p className="text-neutral-300 text-[10px] sm:text-xs md:text-sm font-montserrat uppercase tracking-[0.15em] mb-3 sm:mb-6 text-center">
//           {heroSlides[currentSlide].title} · {heroSlides[currentSlide].subtitle}
//         </p>
//         {/* <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[180px] font-light uppercase tracking-wider leading-none text-center">
//           Exquisite
//         </h1> */}

//         <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[180px] font-light uppercase tracking-wider leading-none text-center
//                 relative inline-block
//                 bg-gradient-to-br from-neutral-200 via-white to-neutral-800
//                 bg-clip-text text-transparent
//                 drop-shadow-lg
//                 animate-shine">
//           Exquisite
//         </h1>


//       </div>

//       {/* Navigation Buttons - Hidden on Mobile */}
//       {!isMobile && (
//         <>
//           <button
//             onClick={prevSlide}
//             className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-neutral-100 p-3 transition-colors z-20 active:scale-90"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="h-8 w-8" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-neutral-100 p-3 transition-colors z-20 active:scale-90"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="h-8 w-8" />
//           </button>
//         </>
//       )}

//       {/* Pagination Dots */}
//       {/* <div className="absolute bottom-16 sm:bottom-20 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
//         {heroSlides.map((_, index: number) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-2 rounded-full transition-all duration-500 ${
//               currentSlide === index 
//                 ? 'bg-neutral-300 w-6 sm:w-8' 
//                 : 'bg-neutral-500/40 w-2 hover:bg-neutral-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div> */}

//       {/* CTA Section */}
//       <div className="absolute bottom-0 left-0 right-0 sm:bottom-12 sm:left-6 sm:right-auto p-4 sm:p-0 sm:max-w-sm z-20" ref={ctaRef}>
//         <p className="text-neutral-300 text-xs sm:text-sm font-montserrat mb-3 sm:mb-6 leading-relaxed tracking-wide">
//           Bengaluru's atelier for bespoke interiors, crafting spaces of unparalleled sophistication.
//         </p>
//         <button className="text-neutral-300 text-xs sm:text-sm font-montserrat uppercase tracking-[0.15em] hover:text-neutral-100 transition-colors group flex items-center gap-2 sm:gap-3">
//           Discover Our Craft
//           <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
//         </button>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&family=Montserrat:wght@300;400&display=swap');
        
//         * {
//           box-sizing: border-box;
//         }

//         :root {
//           --primary-text: #d1d5db;
//           --secondary-text: #9ca3af;
//           --accent: #d4af37;
//         }

//         .font-playfair {
//           font-family: 'Playfair Display', serif;
//         }

//         .font-montserrat {
//           font-family: 'Montserrat', sans-serif;
//         }

//         /* Unified text color across all elements */
//         .text-neutral-300 {
//           color: var(--primary-text);
//         }

//         .text-neutral-400 {
//           color: var(--secondary-text);
//         }

//         .text-neutral-100 {
//           color: #f3f4f6;
//         }

//         .bg-neutral-500 {
//           background-color: #6b7280;
//         }

//         .hover\\:text-neutral-100:hover {
//           color: #f3f4f6;
//         }

//         /* Mobile-first responsive typography */
//         @media (max-width: 640px) {
//           body {
//             font-size: 14px;
//           }
//           h1 {
//             word-break: break-word;
//           }
//         }

//         /* Smooth scrolling */
//         html {
//           scroll-behavior: smooth;
//         }

        

//         /* Button improvements for touch devices */
//         @media (hover: none) and (pointer: coarse) {
//           button {
//             min-height: 44px;
//             min-width: 44px;
//           }
//         }
//         @keyframes shine {
//         0%   { background-position: 200% 0; }
//         100% { background-position: -200% 0; }
//         }
//         .animate-shine {
//         background-size: 200% 100%;
//         animation: shine 6s linear forwards;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default HeroSlider;

