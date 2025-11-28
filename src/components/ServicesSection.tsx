import React, { useEffect, useRef } from 'react';
import { Layout, Ruler, Lightbulb } from 'lucide-react';

function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = cardRefs.current.filter(Boolean);
            cards.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }, index * 150);
              }
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -25% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Layout className="h-7 w-7 md:h-8 md:w-8" />,
      title: 'Space Planning',
      body: 'Strategic space optimization through 3D modeling and ergonomic principles to craft flowing, functional environments.',
      stat: '30% more usable space',
    },
    {
      icon: <Ruler className="h-7 w-7 md:h-8 md:w-8" />,
      title: 'Custom Solutions',
      body: 'Bespoke furniture and fixtures designed with sustainable materials and contemporary craftsmanship.',
      stat: '15+ custom pieces in 2024',
    },
    {
      icon: <Lightbulb className="h-7 w-7 md:h-8 md:w-8" />,
      title: 'Design Consultation',
      body: 'Expert guidance on material selection, colour psychology, and spatial harmony for your perfect aesthetic.',
      stat: '98% client satisfaction',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-16 md:py-28 bg-[#f5f5f5]">
      {/* Subtle background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-emerald-950 font-medium tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 md:mt-6 text-emerald-950 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Comprehensive interior design solutions tailored to your vision, balancing
            functionality with timeless elegance.
          </p>
        </header>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group bg-emerald-950 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 
                         hover:bg-emerald-800 hover:border-white/20 transition-all duration-500"
              style={{
                opacity: 0,
                transform: 'translateY(60px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="mb-4 md:mb-5 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-2 md:mb-3">{s.title}</h3>
              <p className="text-white mb-4 md:mb-5 text-sm md:text-base leading-relaxed">{s.body}</p>
              <div className="text-xs md:text-sm font-medium text-white border-t border-white/10 pt-4">
                <span className="text-white">Recent success:</span>
                <p className="mt-1">{s.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;