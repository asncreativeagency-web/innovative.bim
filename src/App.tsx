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

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'slideshow', 'services', 'projects', 'about', 'team', 'testimonials', 'case-studies', 'faq', 'pricing', 'resources', 'blog', 'contact']
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
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <SmoothCursor />
      
      <main>
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>
        
        <section id="slideshow" className="min-h-screen">
          <SlideshowSection />
        </section>
        
        <section id="services" className="min-h-screen">
          <ServicesSection />
        </section>
        
        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>
        
        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>
        
        <section id="team" className="min-h-screen">
          <TeamSection />
        </section>
        
        <section id="testimonials" className="min-h-screen">
          <TestimonialsSection />
        </section>
        
        <section id="case-studies" className="min-h-screen">
          <CaseStudiesSection />
        </section>
        
        <section id="faq" className="min-h-screen">
          <FAQSection />
        </section>
        
        <section id="pricing" className="min-h-screen">
          <PricingSection />
        </section>
        
        <section id="resources" className="min-h-screen">
          <ResourcesSection />
        </section>
        
        <section id="blog" className="min-h-screen">
          <BlogSection />
        </section>
        
        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

export default App
