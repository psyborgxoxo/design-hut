import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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

            // Then animate project cards
            projectRefs.current.forEach((project, index) => {
              if (project) {
                setTimeout(() => {
                  project.style.opacity = '1';
                  project.style.transform = 'translateY(0)';
                }, 300 + index * 200);
              }
            });

            // Finally animate button
            if (buttonRef.current) {
              setTimeout(() => {
                if (buttonRef.current) {
                  buttonRef.current.style.opacity = '1';
                  buttonRef.current.style.transform = 'translateY(0)';
                }
              }, 700);
            }
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

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        {/* Keep exact same header structure */}
        <div
          ref={headerRef}
          className="max-w-3xl mx-auto text-center mb-16"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight text-neutral-900">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            Discover our portfolio of thoughtfully designed spaces that showcase our commitment to excellence and innovation.
          </p>
        </div>

        {/* Keep exact same grid layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            ref={(el) => (projectRefs.current[0] = el)}
            className="relative overflow-hidden"
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              alt="Modern living room"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="font-serif text-white text-2xl">
                Modern Minimalist Living
              </h3>
            </div>
          </div>
          <div
            ref={(el) => (projectRefs.current[1] = el)}
            className="relative overflow-hidden"
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
              alt="Contemporary bedroom"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="font-serif text-white text-2xl">
                Urban Sanctuary
              </h3>
            </div>
          </div>
        </div>

        {/* Improved button to match site style */}
        <div className="text-center">
          <a
            ref={buttonRef}
            href="/projects"
            className="inline-flex items-center space-x-2 bg-emerald-950 text-white px-8 py-4 rounded-xl font-medium
                       hover:bg-emerald-900 hover:shadow-lg hover:-translate-y-0.5 
                       transition-all duration-300 group border border-emerald-800/30"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;