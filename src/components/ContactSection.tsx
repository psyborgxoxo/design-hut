// import React, { useEffect, useRef } from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';

// function ContactSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const contactInfoRef = useRef<HTMLDivElement>(null);
//   const formRef = useRef<HTMLDivElement>(null);

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

//             // Then animate contact info
//             if (contactInfoRef.current) {
//               setTimeout(() => {
//                 if (contactInfoRef.current) {
//                   contactInfoRef.current.style.opacity = '1';
//                   contactInfoRef.current.style.transform = 'translateX(0)';
//                 }
//               }, 300);
//             }

//             // Finally animate form
//             if (formRef.current) {
//               setTimeout(() => {
//                 if (formRef.current) {
//                   formRef.current.style.opacity = '1';
//                   formRef.current.style.transform = 'translateX(0)';
//                 }
//               }, 500);
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
//     <section id="contact" ref={sectionRef} className="py-16 md:py-20 bg-emerald-950">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto">
//           {/* Header */}
//           <div
//             ref={headerRef}
//             className="text-center mb-12 md:mb-16"
//             style={{
//               opacity: 0,
//               transform: 'translateY(30px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
//             }}
//           >
//             <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-50 mb-4">
//               Let's Collaborate
//             </h2>
//             <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
//               Transform your space with us. Reach out to start your design journey.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Contact Info */}
//             <div
//               ref={contactInfoRef}
//               className="flex flex-col justify-center space-y-6 md:col-span-1"
//               style={{
//                 opacity: 0,
//                 transform: 'translateX(-30px)',
//                 transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
//               }}
//             >
//               <div className="flex items-start space-x-4">
//                 <Phone className="h-5 w-5 text-neutral-300" aria-hidden="true" />
//                 <div>
//                   <p className="text-neutral-50 text-xs sm:text-sm uppercase tracking-widest">Phone</p>
//                   <div className="flex flex-col space-y-2">
//                     <a
//                       href="tel:+918050596670"
//                       className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base"
//                       aria-label="Call us at +91-80505-96670"
//                     >
//                       +91-80505-96670
//                     </a>
//                     <a
//                       href="tel:+918618853106"
//                       className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base"
//                       aria-label="Call us at +91-86188-53106"
//                     >
//                       +91-86188-53106
//                     </a>
//                     <a
//                       href="tel:+916360642212"
//                       className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base"
//                       aria-label="Call us at +91-63606-42212"
//                     >
//                       +91-63606-42212
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Mail className="h-5 w-5 text-neutral-300" aria-hidden="true" />
//                 <div>
//                   <p className="text-neutral-50 text-xs sm:text-sm uppercase tracking-widest">Email</p>
//                   <a
//                     href="mailto:ddsgroups.in@gmail.com"
//                     className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base"
//                     aria-label="Email us at ddsgroups.in@gmail.com"
//                   >
//                     ddsgroups.in@gmail.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <MapPin className="h-5 w-5 text-neutral-300" aria-hidden="true" />
//                 <div>
//                   <p className="text-neutral-50 text-xs sm:text-sm uppercase tracking-widest">Location</p>
//                   <p className="text-neutral-200 text-sm sm:text-base">Bengaluru, Karnataka</p>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div
//               ref={formRef}
//               className="md:col-span-2 bg-neutral-50 p-6 md:p-8 rounded-xl space-y-6 shadow-lg hover:shadow-xl transition-all duration-300"
//               style={{
//                 opacity: 0,
//                 transform: 'translateX(30px)',
//                 transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
//               }}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-xs sm:text-sm text-neutral-700 mb-2 uppercase tracking-widest"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Your Name"
//                     required
//                     className="w-full px-3 py-2 bg-transparent border-b border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors text-sm sm:text-base text-neutral-900 placeholder-neutral-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-xs sm:text-sm text-neutral-700 mb-2 uppercase tracking-widest"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="your.email@example.com"
//                     required
//                     className="w-full px-3 py-2 bg-transparent border-b border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors text-sm sm:text-base text-neutral-900 placeholder-neutral-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-xs sm:text-sm text-neutral-700 mb-2 uppercase tracking-widest"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   placeholder="Tell us about your vision..."
//                   rows={4}
//                   required
//                   className="w-full px-3 py-2 bg-transparent border-b border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors text-sm sm:text-base text-neutral-900 placeholder-neutral-500 resize-none"
//                 ></textarea>
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="group w-full text-neutral-50 bg-emerald-950 px-6 py-4 rounded-xl flex items-center justify-center 
//                            transition-all duration-300 hover:bg-emerald-900 hover:shadow-lg hover:-translate-y-0.5 
//                            text-xs sm:text-sm uppercase tracking-widest font-medium border border-emerald-800/30"
//                 aria-label="Send message"
//               >
//                 Send Message
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;

import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headerRef.current) {
              setTimeout(() => {
                if (headerRef.current) {
                  headerRef.current.style.opacity = '1';
                  headerRef.current.style.transform = 'translateY(0)';
                }
              }, 100);
            }

            if (contactInfoRef.current) {
              setTimeout(() => {
                if (contactInfoRef.current) {
                  contactInfoRef.current.style.opacity = '1';
                  contactInfoRef.current.style.transform = 'translateX(0)';
                }
              }, 300);
            }

            if (actionsRef.current) {
              setTimeout(() => {
                if (actionsRef.current) {
                  actionsRef.current.style.opacity = '1';
                  actionsRef.current.style.transform = 'translateX(0)';
                }
              }, 500);
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

  const handleWhatsApp = () => {
    const phoneNumber = '918050596670'; // Remove + and spaces
    const message = encodeURIComponent('Hello! I would like to discuss a design project.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const email = 'ddsgroups.in@gmail.com';
    const subject = encodeURIComponent('Design Inquiry');
    const body = encodeURIComponent('Hello,\n\nI would like to discuss a design project.\n\nBest regards,');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-20 bg-emerald-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-12 md:mb-16"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-50 mb-4">
              Let's Collaborate
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Transform your space with us. Reach out to start your design journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div
              ref={contactInfoRef}
              className="flex flex-col justify-center space-y-6 md:col-span-1"
              style={{
                opacity: 0,
                transform: 'translateX(-30px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-neutral-300 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-neutral-50 text-xs sm:text-sm uppercase tracking-widest mb-2">Phone</p>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="tel:+918050596670"
                      className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base"
                      aria-label="Call us at +91-80505-96670"
                    >
                      +91-80505-96670
                    </a>
                    <a
                      href="tel:+918618853106"
                      className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base"
                      aria-label="Call us at +91-86188-53106"
                    >
                      +91-86188-53106
                    </a>
                    <a
                      href="tel:+916360642212"
                      className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base"
                      aria-label="Call us at +91-63606-42212"
                    >
                      +91-63606-42212
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-neutral-300 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-neutral-50 text-xs sm:text-sm uppercase tracking-widest mb-2">Email</p>
                  <a
                    href="mailto:ddsgroups.in@gmail.com"
                    className="text-neutral-200 hover:text-neutral-50 transition-colors duration-300 text-sm sm:text-base break-all"
                    aria-label="Email us at ddsgroups.in@gmail.com"
                  >
                    ddsgroups.in@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-neutral-300 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-neutral-50 text-xs sm:text-sm uppercase tracking-widest mb-2">Location</p>
                  <p className="text-neutral-200 text-sm sm:text-base">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              ref={actionsRef}
              className="md:col-span-2 bg-emerald-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                opacity: 0,
                transform: 'translateX(30px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl sm:text-3xl font-serif text-emerald-950 mb-3">
                    Get in Touch
                  </h3>
                  <p className="text-emerald-800 text-sm sm:text-base max-w-md mx-auto">
                    Choose your preferred way to connect with us. We're here to bring your vision to life.
                  </p>
                </div>

                <div className="w-full max-w-md space-y-4">
                  {/* WhatsApp Button */}
                  <button
                    onClick={handleWhatsApp}
                    className="group w-full bg-emerald-950 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl 
                             flex items-center justify-center transition-all duration-300 
                             hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base font-medium"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5 mr-3" aria-hidden="true" />
                    <span className="uppercase tracking-widest">Chat on WhatsApp</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  {/* Email Button */}
                  <button
                    onClick={handleEmail}
                    className="group w-full bg-emerald-950 hover:bg-emerald-900 text-white px-6 py-4 rounded-xl 
                 flex items-center justify-center transition-all duration-300 
                 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base font-medium 
                 border border-emerald-800/30"
                    aria-label="Send us an email"
                  >
                    <Mail className="h-5 w-5 mr-3" aria-hidden="true" />
                    <span className="uppercase tracking-widest">Send Email</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  {/* Direct Call Button (Mobile Only) */}
                  <a
                    href="tel:+918050596670"
                    className="group w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-950 px-6 py-4 rounded-xl 
                             flex items-center justify-center transition-all duration-300 
                             hover:shadow-md hover:-translate-y-0.5 text-sm sm:text-base font-medium
                             md:hidden"
                    aria-label="Call us directly"
                  >
                    <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                    <span className="uppercase tracking-widest">Call Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                <p className="text-emerald-700 text-xs sm:text-sm text-center mt-6 px-4">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;