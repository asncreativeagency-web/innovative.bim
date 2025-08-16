import React, { useEffect, useRef } from 'react'

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (headlineRef.current) {
        headlineRef.current.style.transform = 'translateY(0)'
        headlineRef.current.style.opacity = '1'
      }
    }, 200)

    const timer2 = setTimeout(() => {
      if (subheadlineRef.current) {
        subheadlineRef.current.style.transform = 'translateY(0)'
        subheadlineRef.current.style.opacity = '1'
      }
    }, 600)

    const timer3 = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in-up')
      }
    }, 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div 
      id="hero-section" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/60" />

      {/* Main Content - Centered */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl mx-auto text-center pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black transform translate-y-8 opacity-0 transition-all duration-1000 ease-out leading-tight tracking-tight mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2"
          style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif" }}
        >
          <span className="text-white">Innovative </span>
          <span className="gradient-text-animated">BIM </span>
          <span className="text-white">Services</span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-100 transform translate-y-8 opacity-0 transition-all duration-1000 ease-out leading-relaxed max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mb-4 sm:mb-6 md:mb-8 lg:mb-12 px-3 sm:px-4"
          style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
        >
          Revolutionizing the construction industry with cutting-edge, AI-powered BIM solutions.
          We deliver precision, efficiency, and innovation in every project.
        </p>

        {/* CTA Button */}
        <div ref={ctaRef} className="transform translate-y-8 opacity-0 transition-all duration-1000 ease-out px-3 sm:px-4 mb-6 sm:mb-8 md:mb-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 hover-lift touch-manipulation w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
          >
            Get Started Today
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-1.5 sm:ml-2 md:ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-3 sm:px-4">
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 text-center">
          <div className="animate-fade-in-up stagger-1">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif" }}>500+</div>
            <div className="text-xs sm:text-sm text-gray-200 font-semibold tracking-wide" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>Projects Completed</div>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif" }}>98%</div>
            <div className="text-xs sm:text-sm text-gray-200 font-semibold tracking-wide" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>Client Satisfaction</div>
          </div>
          <div className="animate-fade-in-up stagger-3">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif" }}>24/7</div>
            <div className="text-xs sm:text-sm text-gray-200 font-semibold tracking-wide" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>Support Available</div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default HeroSection 