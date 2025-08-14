import React, { useState, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import SlideshowSection from './components/SlideshowSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import TestimonialsSection from './components/TestimonialsSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import FAQSection from './components/FAQSection'
import PricingSection from './components/PricingSection'
import ResourcesSection from './components/ResourcesSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'
import { SmoothCursor } from './components/ui/smooth-cursor'
import TechnologiesSection from './components/TechnologiesSection'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'slideshow', 'services', 'projects', 'about', 'technologies', 'team', 'testimonials', 'case-studies', 'faq', 'pricing', 'resources', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }

      // Simple parallax effect using CSS custom properties
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId)
    if (element) {
      console.log(`Element found, scrolling to:`, element);
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <SmoothCursor />
      
      <main>
        <section id="home" className="py-20">
          <HeroSection />
        </section>
        
        <section id="slideshow" className="py-20">
          <SlideshowSection />
        </section>
        
        <section id="services" className="py-20">
          <ServicesSection />
        </section>
        
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>
        
        <section id="about" className="py-20">
          <AboutSection />
        </section>
        
        <section id="technologies" className="py-20">
          <TechnologiesSection />
        </section>
        
        <section id="team" className="py-20">
          <TeamSection />
        </section>
        
        <section id="testimonials" className="py-20">
          <TestimonialsSection />
        </section>
        
        <section id="case-studies" className="py-20">
          <CaseStudiesSection />
        </section>
        
        <section id="faq" className="py-20">
          <FAQSection />
        </section>
        
        <section id="pricing" className="py-20">
          <PricingSection />
        </section>
        
        <section id="resources" className="py-20">
          <ResourcesSection />
        </section>
        
        <section id="blog" className="py-20">
          <BlogSection />
        </section>
        
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

export default App
