import React, { useState, useEffect } from 'react'

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
    { id: 'slideshow', label: 'Showcase' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'faq', label: 'FAQ' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'resources', label: 'Resources' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  // Group navigation items for better organization
  const primaryNav = navItems.slice(0, 5) // Home, Showcase, Services, Projects, About
  const secondaryNav = navItems.slice(5, 8) // Team, Reviews, Case Studies
  const tertiaryNav = navItems.slice(8, 12) // FAQ, Pricing, Resources, Blog
  const contactNav = navItems.slice(12) // Contact

  return (
    <nav className={`fixed top-4 left-16 right-16 z-50 transition-all duration-700 rounded-3xl ${
      isScrolled ? 'bg-gray-900/10 backdrop-blur-2xl shadow-2xl shadow-black/30 border border-white/20' : 'bg-gray-900/5 backdrop-blur-xl border border-white/10'
    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-6xl mx-auto px-1 sm:px-2 lg:px-3">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="BIM Arcana Logo"
                className="h-28 w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-1">
              {/* Primary Navigation */}
              <div className="flex items-center space-x-6">
                {primaryNav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === item.id
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-blue-300'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                      activeSection === item.id
                        ? 'bg-blue-500/20 shadow-lg shadow-blue-500/25 scale-105'
                        : 'bg-transparent group-hover:bg-blue-500/10 group-hover:scale-105'
                    }`} />
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Separator */}
              <div className="w-px h-6 bg-white/20 mx-2"></div>

              {/* Secondary Navigation */}
              <div className="flex items-center space-x-4">
                {secondaryNav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-2 py-2 rounded-lg text-xs font-medium transition-all duration-300 relative group ${
                      activeSection === item.id
                        ? 'text-blue-400'
                        : 'text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                      activeSection === item.id
                        ? 'bg-blue-500/20 shadow-lg shadow-blue-500/25 scale-105'
                        : 'bg-transparent group-hover:bg-blue-500/10 group-hover:scale-105'
                    }`} />
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Separator */}
              <div className="w-px h-6 bg-white/20 mx-2"></div>

              {/* Tertiary Navigation */}
              <div className="flex items-center space-x-3">
                {tertiaryNav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-2 py-2 rounded-lg text-xs font-medium transition-all duration-300 relative group ${
                      activeSection === item.id
                        ? 'text-blue-400'
                        : 'text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                      activeSection === item.id
                        ? 'bg-blue-500/20 shadow-lg shadow-blue-500/25 scale-105'
                        : 'bg-transparent group-hover:bg-blue-500/10 group-hover:scale-105'
                    }`} />
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Separator */}
              <div className="w-px h-6 bg-white/20 mx-2"></div>

              {/* Contact Navigation */}
              <div className="flex items-center">
                {contactNav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 ${
                      activeSection === item.id
                        ? 'from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/40'
                        : 'hover:from-blue-600 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/40'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-300 p-2 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-gray-800/10 backdrop-blur-2xl border border-white/20 mt-2 rounded-2xl shadow-2xl shadow-black/30">
            <div className="px-4 py-6 space-y-4">
              {/* Primary Navigation */}
              <div>
                <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">Main</h3>
                <div className="space-y-2">
                  {primaryNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-blue-400 bg-blue-500/20'
                          : 'text-gray-300 hover:text-blue-300 hover:bg-blue-500/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Secondary Navigation */}
              <div>
                <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">Company</h3>
                <div className="space-y-2">
                  {secondaryNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-blue-400 bg-blue-500/20'
                          : 'text-gray-300 hover:text-blue-300 hover:bg-blue-500/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tertiary Navigation */}
              <div>
                <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">Resources</h3>
                <div className="space-y-2">
                  {tertiaryNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-blue-400 bg-blue-500/20'
                          : 'text-gray-300 hover:text-blue-300 hover:bg-blue-500/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Navigation */}
              <div>
                <div className="space-y-2">
                  {contactNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-400 text-white ${
                        activeSection === item.id
                          ? 'from-blue-600 to-cyan-500'
                          : 'hover:from-blue-600 hover:to-cyan-500'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation