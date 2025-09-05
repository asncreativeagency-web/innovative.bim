import React, { useState, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import SlideshowSection from './components/SlideshowSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import FAQSection from './components/FAQSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { Toaster } from './components/ui/sonner'

const sections = ['home', 'slideshow', 'services', 'projects', 'about', 'team', 'case-studies', 'faq', 'blog', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
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
          
          ticking = false
        })
        ticking = true
      }
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
      <FloatingWhatsApp />
      <Toaster />
      
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
        
        <section id="case-studies" className="min-h-screen">
          <CaseStudiesSection />
        </section>
        
        <section id="faq" className="min-h-screen">
          <FAQSection />
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
