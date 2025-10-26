import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Anderson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "Design Hut Studio transformed our home with unparalleled elegance, seamlessly blending aesthetics and functionality.",
    type: "Past",
    project: "Residential Design",
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "Their innovative office design elevated our workspace, enhancing both morale and productivity with exceptional creativity.",
    type: "Current",
    project: "Commercial Space",
  },
  {
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "The team's vision for our restaurant created a distinctive dining experience, optimizing flow and ambiance.",
    type: "Past",
    project: "Restaurant Design",
  },
  {
    name: "David Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop",
    rating: 5,
    review: "Design Hut's approach to our retail space combined modern elegance with practicality, attracting more customers.",
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
    <section id="testimonials" ref={containerRef} className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Keep exact same header */}
        <div 
          ref={headerRef}
          className="max-w-3xl mx-auto text-center mb-12"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out'
          }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight text-neutral-900">
            Client Voices
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Hear from our clients about their experience with Design Hut Studio's bespoke design solutions.
          </p>
        </div>
        
        {/* Keep exact same grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-neutral-100 p-6 rounded-lg transition-shadow duration-300 hover:shadow-lg"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out'
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">{testimonial.name}</h3>
                  <p className="text-xs text-neutral-500">{testimonial.project}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{testimonial.review}</p>
              <span className="text-xs text-neutral-700 uppercase tracking-wider">
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