import React, { useEffect, useRef } from 'react'
import { useParallax, useMultiLayerParallax } from '../hooks/use-parallax'
import { useScrollAnimation } from '../hooks/use-scroll-animations'

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Parallax effects for different elements
  const backgroundParallax = useParallax({ speed: 0.3, direction: 'up' })
  const contentParallax = useParallax({ speed: 0.5, direction: 'up' })
  const statsParallax = useParallax({ speed: 0.8, direction: 'up' })
  const videoParallax = useParallax({ speed: 0.2, direction: 'up' })

  // Scroll-triggered animations
  const headlineAnimation = useScrollAnimation({ 
    animationType: 'slideUp', 
    delay: 200, 
    duration: 800 
  })
  const subheadlineAnimation = useScrollAnimation({ 
    animationType: 'slideUp', 
    delay: 400, 
    duration: 800 
  })
  const ctaAnimation = useScrollAnimation({ 
    animationType: 'scaleIn', 
    delay: 600, 
    duration: 800 
  })
  const statsAnimation = useScrollAnimation({ 
    animationType: 'fadeIn', 
    delay: 800, 
    duration: 600 
  })

  return (
    <div 
      id="hero-section" 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Background Video with Parallax */}
      <div 
        ref={videoParallax.elementRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 w-full h-full"
        style={videoParallax.getTransformStyle()}
      >
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

      {/* Brand color overlay with Parallax */}
      <div 
        ref={backgroundParallax.elementRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/60"
        style={backgroundParallax.getTransformStyle()}
      />

      {/* Main Content Grid with Parallax */}
      <div 
        ref={contentParallax.elementRef as React.RefObject<HTMLDivElement>}
        className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={contentParallax.getTransformStyle()}
      >
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6 pt-20">
          {/* Headline */}
          <h1
            ref={headlineAnimation.elementRef as React.RefObject<HTMLHeadingElement>}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            style={{ 
              fontFamily: "'Poppins', 'Inter', sans-serif",
              ...headlineAnimation.getAnimationStyle()
            }}
          >
            <span className="text-white">Innovative </span>
            <span className="gradient-text-animated">BIM </span>
            <span className="text-white">Services</span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineAnimation.elementRef as React.RefObject<HTMLParagraphElement>}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 leading-relaxed max-w-2xl"
            style={{ 
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              ...subheadlineAnimation.getAnimationStyle()
            }}
          >
            Revolutionizing the construction industry with cutting-edge, AI-powered BIM solutions.
            We deliver precision, efficiency, and innovation in every project.
          </p>

          {/* CTA Button */}
          <div 
            ref={ctaAnimation.elementRef as React.RefObject<HTMLDivElement>}
            style={ctaAnimation.getAnimationStyle()}
          >
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 hover-lift"
              style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column - Visual Content */}
        <div className="relative flex items-center justify-center pt-20">
          {/* Right column content removed */}
        </div>
      </div>

      {/* Statistics Section with Parallax */}
      <div 
        ref={statsParallax.elementRef as React.RefObject<HTMLDivElement>}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={statsParallax.getTransformStyle()}
      >
        <div 
          ref={statsAnimation.elementRef as React.RefObject<HTMLDivElement>}
          className="flex space-x-12 text-center"
          style={statsAnimation.getAnimationStyle()}
        >
          <div className="animate-fade-in-up stagger-1">
            <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>500+</div>
            <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>Projects Completed</div>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>98%</div>
            <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>Client Satisfaction</div>
          </div>
          <div className="animate-fade-in-up stagger-3">
            <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>24/7</div>
            <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>Support Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 