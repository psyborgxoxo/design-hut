// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import { heroSlides } from '../data/heroSlides';
// import gsap from 'gsap';

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

//   return (
//     <section
//       className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
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

//       <div className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12" ref={textRef}>
//         <p className="text-neutral-400 text-xs font-montserrat uppercase tracking-[0.2em] mb-6">
//           {heroSlides[currentSlide].title} · {heroSlides[currentSlide].subtitle}
//         </p>
//         <h1 className="text-white text-[180px] font-light uppercase tracking-wider leading-none">
//           Exquisite
//         </h1>
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-gold p-3 transition-colors z-20"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="h-8 w-8" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-gold p-3 transition-colors z-20"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="h-8 w-8" />
//       </button>

//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
//         {heroSlides.map((_, index: number) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-gold w-8' : 'bg-neutral-500/40 hover:bg-neutral-400'
//               }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       <div className="absolute bottom-12 sm:bottom-16 left-6 sm:left-12 z-20" ref={ctaRef}>
//         <p className="text-neutral-400 text-sm font-montserrat max-w-sm mb-6 leading-[1.6] tracking-wide">
//           Bengaluru’s atelier for bespoke interiors, crafting spaces of unparalleled sophistication.
//         </p>
//         <button className="text-white text-xs font-montserrat uppercase tracking-[0.2em] hover:text-gold transition-colors group flex items-center">
//           Discover Our Craft
//           <ArrowRight className="h-4 w-4 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
//         </button>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&family=Montserrat:wght@300;400&display=swap');
//         :root {
//           --gold: #d4af37;
//         }
//         .font-playfair {
//           font-family: 'Playfair Display', serif;
//         }
//         .font-montserrat {
//           font-family: 'Montserrat', sans-serif;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default HeroSlider;


import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

// Mock hero slides data
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
    title: "Modern Living",
    subtitle: "Minimalist Design"
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000",
    title: "Contemporary",
    subtitle: "Urban Spaces"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000",
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

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
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
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12" ref={textRef}>
        <p className="text-neutral-400 text-xs font-montserrat uppercase tracking-[0.2em] mb-6">
          {heroSlides[currentSlide].title} · {heroSlides[currentSlide].subtitle}
        </p>
        <h1 className="text-white text-[180px] font-light uppercase tracking-wider leading-none">
          Exquisite
        </h1>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-gold p-3 transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-gold p-3 transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'bg-green w-8' : 'bg-neutral-500/40 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="absolute bottom-12 sm:bottom-16 left-6 sm:left-12 z-20" ref={ctaRef}>
        <p className="text-neutral-400 text-sm font-montserrat max-w-sm mb-6 leading-[1.6] tracking-wide">
          Bengaluru's atelier for bespoke interiors, crafting spaces of unparalleled sophistication.
        </p>
        <button className="text-white text-xs font-montserrat uppercase tracking-[0.2em] hover:text-gold transition-colors group flex items-center">
          Discover Our Craft
          <ArrowRight className="h-4 w-4 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&family=Montserrat:wght@300;400&display=swap');
        :root {
          --gold: #d4af37;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        .text-gold {
          color: var(--gold);
        }
        .bg-gold {
          background-color: var(--gold);
        }
        .hover\\:text-gold:hover {
          color: var(--gold);
        }
        .hover\\:bg-gold:hover {
          background-color: var(--gold);
        }
        .bg-gold\\/90 {
          background-color: rgba(212, 175, 55, 0.9);
        }
        .bg-gold\\/20 {
          background-color: rgba(212, 175, 55, 0.2);
        }
        .bg-gold\\/10 {
          background-color: rgba(212, 175, 55, 0.1);
        }
        .ring-gold\\/50 {
          --tw-ring-color: rgba(212, 175, 55, 0.5);
        }
        .bg-green {
          background-color: #10b981;
        }
        .hover\\:bg-white:hover {
          background-color: white;
        }
        .bg-green\\/90 {
          background-color: rgba(16, 185, 129, 0.9);
        }
        .bg-green\\/20 {
          background-color: rgba(16, 185, 129, 0.2);
        }
        .bg-green\\/10 {
          background-color: rgba(16, 185, 129, 0.1);
        }
        .ring-green\\/50 {
          --tw-ring-color: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </section>
  );
}

export default HeroSlider;