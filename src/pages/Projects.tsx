

// import React, { useEffect, useRef } from 'react';
// import { ArrowLeft, Star, Clock, CheckCircle, ArrowRight, Camera } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     id: "italian-kitchen",
//     title: "Tuscan-Inspired Kitchen",
//     category: "Kitchen Design",
//     location: "Villa Bella, Whitefield",
//     timeline: "12 weeks",
//     budget: "Premium",
//     mainImage: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1600",
//     gallery: [
//       "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1556910096-6f5e72db6803?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1552155235-a68a6c02d512?auto=format&fit=crop&q=80&w=1600"
//     ],
//     features: [
//       "Hand-crafted Tuscan cabinetry",
//       "Calacatta marble countertops",
//       "Professional-grade appliances",
//       "Custom copper range hood",
//       "Terracotta floor tiles",
//       "Antique bronze fixtures"
//     ],
//     materials: [
//       "Italian marble",
//       "Solid oak wood",
//       "Handmade terracotta",
//       "Brushed copper",
//       "Venetian plaster"
//     ],
//     testimonial: {
//       name: "Priya Sharma",
//       role: "Homeowner",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
//       quote: "Design Hut transformed our kitchen into a stunning Tuscan retreat. The attention to detail and quality of materials exceeded our expectations."
//     },
//     description: "A masterful blend of traditional Tuscan design elements with modern functionality. This kitchen features hand-selected Calacatta marble countertops, custom-built wooden cabinetry, and professional-grade stainless steel appliances. The space is enhanced by warm ambient lighting and authentic Italian design touches."
//   },
//   {
//     id: "mediterranean-outdoor",
//     title: "Mediterranean Oasis",
//     category: "Outdoor Design",
//     location: "The Preserve, Bangalore",
//     timeline: "16 weeks",
//     budget: "Luxury",
//     mainImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600",
//     gallery: [
//       "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1600"
//     ],
//     features: [
//       "Natural stone flooring",
//       "Custom water feature",
//       "Pergola with climbing vines",
//       "Outdoor pizza oven",
//       "Ambient landscape lighting",
//       "Weather-resistant furniture"
//     ],
//     materials: [
//       "Travertine stone",
//       "Teak wood",
//       "Weather-resistant fabrics",
//       "Mediterranean plants",
//       "LED lighting systems"
//     ],
//     testimonial: {
//       name: "Rahul Mehta",
//       role: "Property Owner",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
//       quote: "Our outdoor space has become our favorite part of the home. The attention to detail in the design and execution is remarkable."
//     },
//     description: "A stunning transformation of an outdoor space into a Mediterranean retreat. This project features natural stone flooring, a custom-designed water feature, and strategic landscape lighting. The space includes a covered dining area, outdoor kitchen with pizza oven, and multiple intimate seating areas surrounded by lush greenery."
//   }
// ];

// export default function Projects() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate project cards on scroll
//       gsap.from(".project-card", {
//         y: 50,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.4,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".projects-container",
//           start: "top 80%",
//           toggleActions: "play none none reverse"
//         }
//       });

//       // Animate features on scroll
//       gsap.from(".feature-item", {
//         x: -30,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.15,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".features-list",
//           start: "top 85%",
//           toggleActions: "play none none reverse"
//         }
//       });

//       // Animate gallery images
//       gsap.from(".gallery-item", {
//         scale: 0.9,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.25,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".gallery-grid",
//           start: "top 80%",
//           toggleActions: "play none none reverse"
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="min-h-screen bg-neutral-50 font-sans pt-20" ref={containerRef}>
//       {/* Header Navigation */}
//       <div className="fixed top-0 left-0 right-0 bg-neutral-50/95 backdrop-blur-md z-50 border-b border-neutral-200">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <Link
//             to="/"
//             className="inline-flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             <span className="text-sm uppercase tracking-widest">Back to Home</span>
//           </Link>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Page Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight text-neutral-900">
//             Our Project
//           </h1>
//           <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
//             Explore our curated portfolio of exceptional interior and exterior spaces, crafted with precision and elegance.
//           </p>
//         </div>

//         {/* Projects Container */}
//         <div className="projects-container space-y-24">
//           {projects.map((project, index) => (
//             <div key={project.id} className="project-card">
//               {/* Project Header */}
//               <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
//                 <div className="order-2 lg:order-1">
//                   <span className="block text-sm uppercase tracking-widest text-neutral-500 mb-4">
//                     {project.category}
//                   </span>
//                   <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight text-neutral-900">
//                     {project.title}
//                   </h2>
//                   <p className="text-neutral-600 mb-8 leading-relaxed text-base sm:text-lg">
//                     {project.description}
//                   </p>
//                   <div className="grid grid-cols-2 gap-6 mb-8">
//                     <div>
//                       <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">Timeline</p>
//                       <div className="flex items-center space-x-2">
//                         <Clock className="h-4 w-4 text-neutral-700" />
//                         <span className="text-base font-medium text-neutral-900">{project.timeline}</span>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">Location</p>
//                       <span className="text-base font-medium text-neutral-900">{project.location}</span>
//                     </div>
//                   </div>
//                   <Link
//                     to={`/project/${project.id}`}
//                     className="inline-flex items-center space-x-2 text-neutral-900 hover:text-neutral-700 transition-colors duration-300 uppercase tracking-widest text-sm"
//                   >
//                     <span>Explore Project</span>
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//                 <div className="relative order-1 lg:order-2">
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={project.mainImage}
//                       alt={`${project.title} main view`}
//                       className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
//                     />
//                   </div>
//                   {/* Testimonial Card */}
//                   <div className="absolute -bottom-12 left-0 lg:-left-12 bg-neutral-50 p-6 shadow-lg max-w-md">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <img
//                         src={project.testimonial.image}
//                         alt={project.testimonial.name}
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <div>
//                         <div className="flex mb-1">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} className="h-3 w-3 text-amber-500 fill-current" />
//                           ))}
//                         </div>
//                         <p className="text-sm font-medium text-neutral-900">{project.testimonial.name}</p>
//                         <p className="text-xs text-neutral-500">{project.testimonial.role}</p>
//                       </div>
//                     </div>
//                     <blockquote className="text-neutral-600 text-sm leading-relaxed">
//                       "{project.testimonial.quote}"
//                     </blockquote>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Details */}
//               <div className="grid lg:grid-cols-3 gap-6 mb-16">
//                 <div className="bg-neutral-100 p-6">
//                   <h3 className="font-serif text-xl sm:text-2xl mb-6 tracking-tight text-neutral-900">Key Features</h3>
//                   <ul className="features-list space-y-3">
//                     {project.features.map((feature, i) => (
//                       <li key={i} className="feature-item flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-neutral-700" />
//                         <span className="text-neutral-600 text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="bg-neutral-100 p-6">
//                   <h3 className="font-serif text-xl sm:text-2xl mb-6 tracking-tight text-neutral-900">Materials Used</h3>
//                   <ul className="features-list space-y-3">
//                     {project.materials.map((material, i) => (
//                       <li key={i} className="feature-item flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-neutral-700" />
//                         <span className="text-neutral-600 text-sm">{material}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="bg-emerald-950 p-6 text-neutral-50">
//                   <h3 className="font-serif text-xl sm:text-2xl mb-6 tracking-tight">Project Overview</h3>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Budget Range</p>
//                       <p className="text-base font-light">{project.budget}</p>
//                     </div>
//                     <div>
//                       <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Timeline</p>
//                       <p className="text-base font-light">{project.timeline}</p>
//                     </div>
//                     <div>
//                       <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Location</p>
//                       <p className="text-base font-light">{project.location}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Gallery */}
//               <div className="gallery-grid">
//                 <h3 className="font-serif text-2xl sm:text-3xl mb-6 tracking-tight text-neutral-900">Gallery</h3>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {project.gallery.map((image, i) => (
//                     <div key={i} className="gallery-item relative overflow-hidden">
//                       <img
//                         src={image}
//                         alt={`${project.title} detail view ${i + 1}`}
//                         className="w-full h-[300px] sm:h-[350px] object-cover"
//                       />
//                       <div className="absolute inset-0 bg-neutral-900/50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                         <button className="text-neutral-50 text-sm uppercase tracking-widest flex items-center space-x-2">
//                           <Camera className="h-4 w-4" />
//                           <span>View Image</span>
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {index < projects.length - 1 && (
//                 <div className="border-t border-neutral-200 my-16" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Star, Clock, CheckCircle, ArrowRight, Camera, Play, Award, Users, Calendar } from 'lucide-react';
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
      rootMargin: '0px 0px -50px 0px'
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
      <div className="min-h-screen bg-white font-sans" ref={containerRef}>


        {/* Hero Section */}
        <section className="pt-20 pb-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full mb-8">
                <Award className="h-4 w-4 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-emerald-700">Award-Winning Projects</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-6 leading-none">
                Our Featured
                <span className="block font-serif italic text-emerald-600">Projects</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-12">
                Discover our meticulously crafted spaces where luxury meets functionality,
                each project telling a unique story of design excellence.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>15+ Awards Won</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Container */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {projects.map((project, index) => (
                <article key={project.id} className="animate-on-scroll">
                  {/* Project Hero */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
                    {/* Content */}
                    <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''} flex flex-col justify-center`}>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="text-neutral-400 text-sm">{project.year}</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-tight">
                          {project.title}
                        </h2>

                        <p className="text-lg text-neutral-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 gap-8 py-6">
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">Timeline</p>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-emerald-600" />
                              <span className="text-lg font-medium text-neutral-900">{project.timeline}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">Budget</p>
                            <span className="text-lg font-medium text-neutral-900">{project.budget}</span>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">Location</p>
                            <span className="text-base text-neutral-700">{project.location}</span>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-wider font-medium">Area</p>
                            <span className="text-base text-neutral-700">{project.area}</span>
                          </div>
                        </div>

                        <button className="inline-flex items-center space-x-3 bg-neutral-900 text-white px-8 py-4 hover:bg-emerald-600 transition-all duration-300 group">
                          <span className="font-medium tracking-wide">Explore Project</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                      <div className="relative overflow-hidden group cursor-pointer" onClick={() => openLightbox(project.mainImage)}>
                        <img
                          src={project.mainImage}
                          alt={`${project.title} main view`}
                          className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                            <Camera className="h-6 w-6 text-neutral-900" />
                          </div>
                        </div>
                      </div>

                      {/* Floating Testimonial */}
                      <div className="absolute -bottom-8 left-8 right-8 lg:-left-8 lg:right-auto lg:max-w-md bg-white p-8 shadow-2xl border border-neutral-100">
                        <div className="flex items-start space-x-4 mb-4">
                          <img
                            src={project.testimonial.image}
                            alt={project.testimonial.name}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex mb-2">
                              {[...Array(project.testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                              ))}
                            </div>
                            <p className="font-semibold text-neutral-900">{project.testimonial.name}</p>
                            <p className="text-sm text-neutral-500">{project.testimonial.role}</p>
                          </div>
                        </div>
                        <blockquote className="text-neutral-700 leading-relaxed italic">
                          "{project.testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid lg:grid-cols-12 gap-8 mb-20">
                    {/* Features & Materials */}
                    <div className="lg:col-span-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-neutral-50 p-8 rounded-lg">
                          <h3 className="text-2xl font-light mb-6 text-neutral-900">Key Features</h3>
                          <ul className="space-y-4">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start space-x-3 group">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-neutral-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-emerald-50 p-8 rounded-lg">
                          <h3 className="text-2xl font-light mb-6 text-neutral-900">Premium Materials</h3>
                          <ul className="space-y-4">
                            {project.materials.map((material, i) => (
                              <li key={i} className="flex items-start space-x-3 group">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-neutral-700">{material}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Awards & Recognition */}
                    <div className="lg:col-span-4">
                      <div className="bg-neutral-900 p-8 rounded-lg text-white h-full">
                        <h3 className="text-2xl font-light mb-6">Awards & Recognition</h3>
                        <div className="space-y-6">
                          {project.awards.map((award, i) => (
                            <div key={i} className="flex items-start space-x-3">
                              <Award className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                              <span className="text-neutral-200 leading-relaxed">{award}</span>
                            </div>
                          ))}

                          <div className="pt-6 border-t border-neutral-700 space-y-4">
                            <div>
                              <p className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Investment</p>
                              <p className="text-xl font-light text-emerald-400">{project.budget}</p>
                            </div>
                            <div>
                              <p className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Completion</p>
                              <p className="text-lg font-light">{project.year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Gallery */}
                  <div className="animate-on-scroll">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-3xl font-light text-neutral-900">Project Gallery</h3>
                      <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors">
                        <Play className="h-4 w-4" />
                        <span className="text-sm font-medium">View Virtual Tour</span>
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.gallery.map((image, i) => (
                        <div
                          key={i}
                          className="relative overflow-hidden group cursor-pointer rounded-lg"
                          onClick={() => openLightbox(image)}
                        >
                          <img
                            src={image}
                            alt={`${project.title} detail view ${i + 1}`}
                            className="w-full h-[280px] object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                              <Camera className="h-5 w-5 text-neutral-900" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Separator */}
                  {index < projects.length - 1 && (
                    <div className="flex items-center justify-center pt-20">
                      <div className="w-px h-20 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-neutral-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life with our expertise and passion for exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-emerald-600 text-white px-8 py-4 hover:bg-emerald-700 transition-colors font-medium tracking-wide">
                Start Your Project
              </button>
              <button className="border border-neutral-700 text-white px-8 py-4 hover:bg-neutral-800 transition-colors font-medium tracking-wide">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
        <Footer />

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