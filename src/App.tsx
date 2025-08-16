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
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'
import { SmoothCursor } from './components/ui/smooth-cursor'
import TechnologiesSection from './components/TechnologiesSection'

const sections = ['home', 'slideshow', 'services', 'projects', 'about', 'technologies', 'team', 'testimonials', 'case-studies', 'faq', 'blog', 'contact']

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

  // Mobile cursor removal effect
  useEffect(() => {
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
             window.innerWidth <= 1024;
    }

    if (isMobile()) {
      // Force remove cursor on mobile
      const removeCursor = () => {
        // Remove cursor from document elements
        document.body.style.cursor = 'none';
        document.documentElement.style.cursor = 'none';
        
        // Force cursor removal with highest priority
        document.body.style.setProperty('cursor', 'none', 'important');
        document.documentElement.style.setProperty('cursor', 'none', 'important');
        
        // Remove cursor from all elements - only do this occasionally to reduce lag
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          if (el instanceof HTMLElement) {
            // Remove cursor property
            el.style.cursor = 'none';
            
            // Force remove with !important
            el.style.setProperty('cursor', 'none', 'important');
            el.style.setProperty('-webkit-cursor', 'none', 'important');
            el.style.setProperty('-moz-cursor', 'none', 'important');
            el.style.setProperty('-ms-cursor', 'none', 'important');
            
            // Also remove any CSS classes that might set cursor
            if (el.className && el.className.includes('cursor-')) {
              el.className = el.className.replace(/cursor-\w+/g, '');
            }
          }
        });
        
        // Add a global style tag to override everything
        let globalStyle = document.getElementById('mobile-cursor-removal');
        if (!globalStyle) {
          globalStyle = document.createElement('style');
          globalStyle.id = 'mobile-cursor-removal';
          globalStyle.textContent = `
            * {
              cursor: none !important;
              -webkit-cursor: none !important;
              -moz-cursor: none !important;
              -ms-cursor: none !important;
            }
          `;
          document.head.appendChild(globalStyle);
        }
      };
      
      // Initial removal
      removeCursor();
      
      // Less frequent removal to reduce lag - every 500ms instead of 50ms
      const interval = setInterval(removeCursor, 500);
      
      // Monitor for new elements and remove cursor - less aggressive
      const observer = new MutationObserver((mutations) => {
        // Only process mutations occasionally to reduce lag
        if (Math.random() < 0.3) { // 30% chance to process mutations
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node instanceof HTMLElement) {
                node.style.cursor = 'none';
                node.style.setProperty('cursor', 'none', 'important');
                node.style.setProperty('-webkit-cursor', 'none', 'important');
                node.style.setProperty('-moz-cursor', 'none', 'important');
                node.style.setProperty('-ms-cursor', 'none', 'important');
              }
            });
          });
        }
      });
      
      observer.observe(document.body, { childList: true, subtree: true });
      
      // Remove cursor on key events only, not on every mouse/touch event
      const removeCursorOnKeyEvent = () => removeCursor();
      document.addEventListener('keydown', removeCursorOnKeyEvent);
      document.addEventListener('keyup', removeCursorOnKeyEvent);
      
      // Remove cursor on window focus/blur
      window.addEventListener('focus', removeCursor);
      window.addEventListener('blur', removeCursor);
      
      return () => {
        clearInterval(interval);
        observer.disconnect();
        document.removeEventListener('keydown', removeCursorOnKeyEvent);
        document.removeEventListener('keyup', removeCursorOnKeyEvent);
        window.removeEventListener('focus', removeCursor);
        window.removeEventListener('blur', removeCursor);
        
        // Remove global style
        const globalStyle = document.getElementById('mobile-cursor-removal');
        if (globalStyle) {
          globalStyle.remove();
        }
      };
    }
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
        
        <section id="technologies" className="min-h-screen">
          <TechnologiesSection />
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
