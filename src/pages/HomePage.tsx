import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default HomePage;