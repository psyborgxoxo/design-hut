// import React, { useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';

// function ProjectsSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLAnchorElement>(null);

//   useEffect(() => {
//     // Simple intersection observer for scroll animations
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Animate header first
//             if (headerRef.current) {
//               setTimeout(() => {
//                 if (headerRef.current) {
//                   headerRef.current.style.opacity = '1';
//                   headerRef.current.style.transform = 'translateY(0)';
//                 }
//               }, 100);
//             }

//             // Then animate project cards
//             projectRefs.current.forEach((project, index) => {
//               if (project) {
//                 setTimeout(() => {
//                   project.style.opacity = '1';
//                   project.style.transform = 'translateY(0)';
//                 }, 300 + index * 200);
//               }
//             });

//             // Finally animate button
//             if (buttonRef.current) {
//               setTimeout(() => {
//                 if (buttonRef.current) {
//                   buttonRef.current.style.opacity = '1';
//                   buttonRef.current.style.transform = 'translateY(0)';
//                 }
//               }, 700);
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: '0px 0px -25% 0px'
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="projects" ref={sectionRef} className="py-24">
//       <div className="container mx-auto px-6">
//         {/* Keep exact same header structure */}
//         <div
//           ref={headerRef}
//           className="max-w-3xl mx-auto text-center mb-16"
//           style={{
//             opacity: 0,
//             transform: 'translateY(30px)',
//             transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
//           }}
//         >
//           <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight text-neutral-900">
//             Featured Projects
//           </h2>
//           <p className="text-gray-600">
//             Discover our portfolio of thoughtfully designed spaces that showcase our commitment to excellence and innovation.
//           </p>
//         </div>

//         {/* Keep exact same grid layout */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <div
//             ref={(el) => (projectRefs.current[0] = el)}
//             className="relative overflow-hidden"
//             style={{
//               opacity: 0,
//               transform: 'translateY(50px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
//             }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
//               alt="Modern living room"
//               className="w-full h-[400px] object-cover"
//             />
//             <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
//               <h3 className="font-serif text-white text-2xl">
//                 Modern Minimalist Living
//               </h3>
//             </div>
//           </div>
//           <div
//             ref={(el) => (projectRefs.current[1] = el)}
//             className="relative overflow-hidden"
//             style={{
//               opacity: 0,
//               transform: 'translateY(50px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
//             }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
//               alt="Contemporary bedroom"
//               className="w-full h-[400px] object-cover"
//             />
//             <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
//               <h3 className="font-serif text-white text-2xl">
//                 Urban Sanctuary
//               </h3>
//             </div>
//           </div>
//         </div>

//         {/* Improved button to match site style */}
//         <div className="text-center">
//           <a
//             ref={buttonRef}
//             href="/projects"
//             className="inline-flex items-center space-x-2 bg-emerald-950 text-white px-8 py-4 rounded-xl font-medium
//                        hover:bg-emerald-900 hover:shadow-lg hover:-translate-y-0.5 
//                        transition-all duration-300 group border border-emerald-800/30"
//             style={{
//               opacity: 0,
//               transform: 'translateY(20px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
//             }}
//           >
//             <span>View All Projects</span>
//             <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection;


import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Camera,
  Play,
  Award,
  Users,
  Calendar,
} from 'lucide-react';
import Footer from '../components/Footer';


const projects = [
  {
    id: "italian-kitchen",
    title: "Tuscan-Inspired Kitchen",
    category: "Kitchen Design",
    location: "Villa Bella, Whitefield",
    timeline: "12 weeks",
    budget: "₹8-12 Lakhs",
    year: "2024",
    area: "450 sq ft",
    mainImage: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1556910096-6f5e72db6803?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1552155235-a68a6c02d512?auto=format&fit=crop&q=80&w=1600"
    ],
    features: [
      "Hand-crafted Tuscan cabinetry",
      "Calacatta marble countertops",
      "Professional-grade appliances",
      "Custom copper range hood",
      "Terracotta floor tiles",
      "Antique bronze fixtures"
    ],
    materials: [
      "Italian marble",
      "Solid oak wood",
      "Handmade terracotta",
      "Brushed copper",
      "Venetian plaster"
    ],
    testimonial: {
      name: "Priya Sharma",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      quote: "Design Hut transformed our kitchen into a stunning Tuscan retreat. The attention to detail and quality of materials exceeded our expectations."
    },
    description: "A masterful blend of traditional Tuscan design elements with modern functionality. This kitchen features hand-selected Calacatta marble countertops, custom-built wooden cabinetry, and professional-grade stainless steel appliances.",
    tags: ["Luxury", "Traditional", "Custom Work"],
    awards: ["Best Kitchen Design 2024", "Interior Excellence Award"]
  },
  {
    id: "mediterranean-outdoor",
    title: "Mediterranean Oasis",
    category: "Outdoor Design",
    location: "The Preserve, Bangalore",
    timeline: "16 weeks",
    budget: "₹15-20 Lakhs",
    year: "2024",
    area: "800 sq ft",
    mainImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1600"
    ],
    features: [
      "Natural stone flooring",
      "Custom water feature",
      "Pergola with climbing vines",
      "Outdoor pizza oven",
      "Ambient landscape lighting",
      "Weather-resistant furniture"
    ],
    materials: [
      "Travertine stone",
      "Teak wood",
      "Weather-resistant fabrics",
      "Mediterranean plants",
      "LED lighting systems"
    ],
    testimonial: {
      name: "Rahul Mehta",
      role: "Property Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      quote: "Our outdoor space has become our favorite part of the home. The attention to detail in the design and execution is remarkable."
    },
    description: "A stunning transformation of an outdoor space into a Mediterranean retreat. This project features natural stone flooring, a custom-designed water feature, and strategic landscape lighting.",
    tags: ["Outdoor Living", "Mediterranean", "Luxury"],
    awards: ["Outstanding Outdoor Design", "Landscape Excellence"]
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    // Enhanced scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section
        id="projects-section"
        className="pb-16 sm:pb-20"
      ></section>
      <div className="min-h-screen bg-white font-sans" ref={containerRef}>
        {/* Hero Section */}
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-200 rounded-full mb-6">
            <Award className="h-4 w-4 text-emerald-950 mr-2" />
            <span className="text-sm font-medium text-emerald-700">Award-Winning Projects</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-emerald-950 font-medium tracking-tight">
            Our Featured Projects
          </h2>
          <p className="mt-4 md:mt-6 text-emerald-950 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Discover our meticulously crafted spaces where luxury meets functionality,
            each project telling a unique story of design excellence.
          </p>
        </header>

        {/* Projects Container */}
        <section className="pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24 sm:space-y-32">
              {projects.map((project, index) => (
                <article key={project.id} className="animate-on-scroll">
                  {/* Project Hero */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20">
                    {/* Content */}
                    <div
                      className={`sm:col-span-5 ${index % 2 === 1 ? 'sm:order-2' : ''
                        } flex flex-col justify-center`}
                    >
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center space-x-4">
                          <span className="px-3 py-1 bg-emerald-200 text-emerald-950 text-xs font-medium rounded-full uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="text-neutral-400 text-sm">{project.year}</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-emerald-950 leading-tight">
                          {project.title}
                        </h2>

                        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">
                              Timeline
                            </p>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-emerald-900" />
                              <span className="text-lg font-medium text-emerald-900">
                                {project.timeline}
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">
                              Budget
                            </p>
                            <span className="text-lg font-medium text-emerald-900">
                              {project.budget}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">
                              Location
                            </p>
                            <span className="text-base text-neutral-700">{project.location}</span>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">
                              Area
                            </p>
                            <span className="text-base text-neutral-700">{project.area}</span>
                          </div>
                        </div>

                        {/* <button className="inline-flex items-center space-x-3 bg-emerald-950 text-white px-6 py-3 hover:bg-emerald-600 transition-all duration-300 group">
                          <span className="font-medium tracking-wide">Explore Project</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button> */}

                        <button
                          className="group w-full bg-emerald-950 hover:bg-emerald-800 text-white px-6 py-4 rounded-xl 
                             flex items-center justify-center transition-all duration-300 
                             hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base font-medium 
                             border border-emerald-800/30"
                        >
                          <span className="font-medium tracking-wide">Explore Project</span>
                        </button>

                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`sm:col-span-7 ${index % 2 === 1 ? 'sm:order-1' : ''
                        } relative`}
                    >
                      <div className="relative overflow-hidden group cursor-pointer" onClick={() => openLightbox(project.mainImage)}>
                        <img
                          src={project.mainImage}
                          alt={`${project.title} main view`}
                          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                            <Camera className="h-5 w-5 text-neutral-900" />
                          </div>
                        </div>
                      </div>

                      {/* Floating Testimonial */}
                      <div className="absolute -bottom-8 left-6 right-6 sm:-left-6 sm:right-auto sm:max-w-md bg-white p-6 shadow-2xl border border-neutral-100">
                        <div className="flex items-start space-x-4 mb-4">
                          <img
                            src={project.testimonial.image}
                            alt={project.testimonial.name}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex mb-2">
                              {[...Array(project.testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 text-amber-500 fill-current"
                                />
                              ))}
                            </div>
                            <p className="font-semibold text-neutral-900">
                              {project.testimonial.name}
                            </p>
                            <p className="text-sm text-neutral-500">
                              {project.testimonial.role}
                            </p>
                          </div>
                        </div>
                        <blockquote className="text-neutral-700 leading-relaxed italic">
                          "{project.testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mb-16 sm:mb-20">
                    {/* Features & Materials */}
                    <div className="sm:col-span-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-neutral-50 p-6 sm:p-8 rounded-lg">
                          <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6 text-neutral-900">
                            Key Features
                          </h3>
                          <ul className="space-y-3 sm:space-y-4">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3 group"
                              >
                                <CheckCircle
                                  className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-900 mt-0.5 group-hover:scale-110 transition-transform"
                                />
                                <span className="text-neutral-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-emerald-50 p-6 sm:p-8 rounded-lg">
                          <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6 text-neutral-900">
                            Premium Materials
                          </h3>
                          <ul className="space-y-3 sm:space-y-4">
                            {project.materials.map((material, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3 group"
                              >
                                <CheckCircle
                                  className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-900 mt-0.5 group-hover:scale-110 transition-transform"
                                />
                                <span className="text-neutral-700">{material}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Awards & Recognition */}
                    <div className="sm:col-span-4">
                      <div className="bg-emerald-950 p-6 sm:p-8 rounded-lg text-white h-full">
                        <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">
                          Awards & Recognition
                        </h3>
                        <div className="space-y-4 sm:space-y-6">
                          {project.awards.map((award, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-3"
                            >
                              <Award
                                className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-1 flex-shrink-0"
                              />
                              <span className="text-neutral-200 leading-relaxed">
                                {award}
                              </span>
                            </div>
                          ))}

                          <div className="pt-4 sm:pt-6 border-t border-neutral-700 space-y-4">
                            <div>
                              <p className="text-neutral-400 text-sm uppercase tracking-wider mb-1">
                                Investment
                              </p>
                              <p className="text-lg sm:text-xl font-light text-emerald-400">
                                {project.budget}
                              </p>
                            </div>
                            <div>
                              <p className="text-neutral-400 text-sm uppercase tracking-wider mb-1">
                                Completion
                              </p>
                              <p className="text-lg sm:text-xl font-light">
                                {project.year}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Gallery */}
                  <div className="animate-on-scroll">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl sm:text-3xl font-light text-neutral-900">
                        Project Gallery
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {project.gallery.map((image, i) => (
                        <div
                          key={i}
                          className="relative overflow-hidden group cursor-pointer rounded-lg"
                          onClick={() => openLightbox(image)}
                        >
                          <img
                            src={image}
                            alt={`${project.title} detail view ${i + 1}`}
                            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full">
                              <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-900" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Separator */}
                  {index < projects.length - 1 && (
                    <div className="flex items-center justify-center pt-12 sm:pt-16">
                      <div className="w-px h-20 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-full">
            <img
              src={selectedImage}
              alt="Project detail"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
      `}</style>
    </>
  );
}