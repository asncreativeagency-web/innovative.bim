import React, { useState, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import SlideshowSection from './components/SlideshowSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'

import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'
import WorkflowSection from './components/WorkflowSection'
import LODSection from './components/LODSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { Toaster } from './components/ui/sonner'

const sections = ['home', 'services', 'workflow', 'projects', 'lod', 'about', 'contact']

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
      const yOffset = -80; // Offset for fixed navigation header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white overflow-x-hidden relative">
      {/* Centralized Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0D1528] to-[#0A0F1C]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
        <FloatingWhatsApp />
        <Toaster />
        
        <main className="relative">
          {/* Section 1: Fixed in background */}
          <section id="home" className="fixed top-0 left-0 w-full h-screen z-0">
            <HeroSection />
          </section>

          {/* Section 2 and beyond: Scroll over Section 1 */}
          <div className="relative z-10 mt-[100vh] bg-[#0A0F1C] shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
            <SlideshowSection />
            
            <section id="services">
              <ServicesSection />
            </section>

            <section id="workflow">
              <WorkflowSection />
            </section>
            
            <section id="projects">
              <ProjectsSection />
            </section>

            <section id="lod">
              <LODSection />
            </section>
            
            <section id="about">
              <AboutSection />
            </section>
            
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        </main>
    </div>
    </div>
  )
}

export default App
