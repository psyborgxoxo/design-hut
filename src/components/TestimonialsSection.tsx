import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "Design Hut Studio completely transformed our Bangalore home. The attention to detail and craftsmanship is extraordinary. Every corner reflects perfection and elegance.",
    type: "Past",
    project: "Residential Design",
  },
  {
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "They redesigned our office space in a way that truly boosted team morale. The work environment is now inspiring and productive. Our staff loves coming to work now.",
    type: "Current",
    project: "Office Space",
  },
  {
    name: "Vikram Reddy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "For our Kochi restaurant, they created exactly what we envisioned. The design is stunning and customers spend more time here now. The flow and ambiance are perfect.",
    type: "Past",
    project: "Restaurant Design",
  },
  {
    name: "Divya Nair",
    image: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "Our retail store got a complete makeover with their modern design approach. Customers spend more time browsing and our sales have increased noticeably. Outstanding work!",
    type: "Current",
    project: "Retail Design",
  },
];

function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header first
            if (headerRef.current) {
              setTimeout(() => {
                if (headerRef.current) {
                  headerRef.current.style.opacity = '1';
                  headerRef.current.style.transform = 'translateY(0)';
                }
              }, 100);
            }

            // Then animate testimonial cards with stagger
            cardRefs.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }, 300 + index * 250);
              }
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-16 md:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-20" ref={headerRef} style={{
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out'
        }}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-emerald-950 font-medium tracking-tight">
            Client Voices
          </h2>
          <p className="mt-4 md:mt-6 text-emerald-950 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Hear from our clients across Karnataka and South India about their experience with Design Hut Studio's bespoke design solutions.
          </p>
        </header>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-neutral-100 p-4 sm:p-6 rounded-lg transition-shadow duration-300 hover:shadow-lg"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out'
              }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-neutral-900">{testimonial.name}</h3>
                  <p className="text-[10px] sm:text-xs text-neutral-500">{testimonial.project}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-neutral-600 text-[10px] sm:text-sm mb-4 leading-relaxed">{testimonial.review}</p>
              <span className="text-[10px] sm:text-xs text-neutral-700 uppercase tracking-wider">
                {testimonial.type} Client
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;