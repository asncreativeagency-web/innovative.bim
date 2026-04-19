import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArcanaButton from './ArcanaButton'

interface NavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check if scrolled down
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Fade out when scrolling down, fade in when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  // Single navigation group for simplicity as requested in the visuals
  const primaryNav = navItems.slice(0, 5) // Home, Services, Workflow, Projects, About
  const contactNav = navItems.slice(5) // Contact

  return (
    <nav className={`fixed top-2 sm:top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 rounded-3xl w-auto min-w-max max-w-[98vw] ${isScrolled ? 'bg-gray-900/40 backdrop-blur-2xl shadow-2xl shadow-black/30 border border-white/20' : 'bg-gray-900/20 backdrop-blur-xl border border-white/10'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="pl-0 pr-4 sm:pr-6">
        <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16 gap-x-2 sm:gap-x-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div
              className="flex items-center cursor-pointer touch-manipulation"
              onClick={() => {
                console.log('Logo clicked! Navigating to home section...');
                onNavigate('home');
              }}
            >
              <img
                src="/logo.png"
                alt="BIM Arcana Logo"
                className="h-16 w-auto sm:h-24 lg:h-36 object-contain touch-manipulation cursor-pointer brightness-110 sm:brightness-100"
                style={{
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
          </div>

          {/* Mobile Navigation Quick Links - Hidden on very small screens, visible on tablets/mid-size */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 xl:hidden">
            <button
              onClick={() => onNavigate('services')}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 touch-manipulation cursor-pointer ${activeSection === 'services'
                ? 'text-blue-400 bg-blue-500/20'
                : 'text-gray-300 hover:text-blue-300 hover:bg-blue-500/10'
                }`}
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 touch-manipulation cursor-pointer ${activeSection === 'about'
                ? 'text-blue-400 bg-blue-500/20'
                : 'text-gray-300 hover:text-blue-300 hover:bg-blue-500/10'
                }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-400 text-white touch-manipulation cursor-pointer ${activeSection === 'contact'
                ? 'from-blue-600 to-cyan-500'
                : 'hover:from-blue-600 hover:to-cyan-500'
                }`}
            >
              Contact
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-2">
            {primaryNav.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-2 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group touch-manipulation ${activeSection === item.id
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-blue-300'
                  }`}
              >
                <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${activeSection === item.id
                  ? 'bg-blue-500/20 shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-transparent group-hover:bg-blue-500/10 group-hover:scale-105'
                  }`} />
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop Separator & Contact */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="w-px h-6 bg-white/20"></div>
            {contactNav.map((item) => (
              <ArcanaButton
                key={item.id}
                icon={false}
                onClick={() => onNavigate(item.id)}
                className="!px-4 !py-1.5 !text-[10px] uppercase tracking-widest font-black"
              >
                {item.label}
              </ArcanaButton>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-12 h-12 flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors duration-300 touch-manipulation cursor-pointer group"
              aria-label="Toggle mobile menu"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-blue-500/10 rounded-xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 scale-110 blur-md' : 'opacity-0 scale-90'}`} />

              <div className="relative w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-3/4 bg-current rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="h-0.5 bg-current rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="xl:hidden bg-gray-900/95 backdrop-blur-2xl border border-white/20 mt-2 rounded-2xl shadow-2xl shadow-black/30 max-h-[85vh] overflow-y-auto"
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {/* Primary Navigation */}
                <div>
                  <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-4 px-2 opacity-70">Navigation</h3>
                  <div className="space-y-1">
                    {primaryNav.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 touch-manipulation flex items-center justify-between group ${activeSection === item.id
                          ? 'text-white bg-blue-600/40 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>


                {/* Contact Navigation */}
                <div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {contactNav.map((item) => (
                      <ArcanaButton
                        key={item.id}
                        icon={false}
                        onClick={() => {
                          onNavigate(item.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className="w-full !py-4 !text-sm !font-black !tracking-widest uppercase !rounded-xl shadow-lg shadow-blue-500/10"
                      >
                        {item.label}
                      </ArcanaButton>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation