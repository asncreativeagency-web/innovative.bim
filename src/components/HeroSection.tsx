import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ArcanaButton from './ArcanaButton'

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [currentBg, setCurrentBg] = useState(0)
  
  const { scrollY } = useScroll()
  
  // Only use opacity for parallax-like fade effect, but keep position stationary
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  const backgrounds = [
    '/hero-bg-arch.png',
    '/hero-bg-struct.png',
    '/hero-bg-coord.png',
    '/hero-bg-kitchen.png',
    '/hero-main.png',
    '/hero-foreground.png'
  ]

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 7000)

    const animateIn = () => {
      if (headlineRef.current) {
        headlineRef.current.style.transform = 'translateY(0)'
        headlineRef.current.style.opacity = '1'
      }
      if (subheadlineRef.current) {
        subheadlineRef.current.style.transform = 'translateY(0)'
        subheadlineRef.current.style.opacity = '1'
      }
      if (ctaRef.current) {
        ctaRef.current.style.transform = 'translateY(0)'
        ctaRef.current.style.opacity = '1'
      }
    }

    const timer = setTimeout(animateIn, 200)

    return () => {
      clearInterval(bgInterval)
      clearTimeout(timer)
    }
  }, [backgrounds.length])

  return (
    <div 
      id="hero-section" 
      className="relative min-h-screen overflow-hidden bg-[#0A0F1C]"
    >
      {/* Background Layer - Static position */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-0"
      >
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentBg ? 'opacity-80' : 'opacity-0'
            }`}
          >
            <img 
              src={bg} 
              alt="BIM Presentation" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Left-Anchored Atmospheric Gradient (Clear on right for image visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/40 via-transparent to-[#0A0F1C]/60" />
      </motion.div>

      {/* Main Content - Stationary */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col justify-center pt-24 pb-12"
      >
        <div className="max-w-5xl">
          {/* Primary Headline - High Contrast & Precision with subtle shadow for legibility */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[1.05] tracking-tight mb-10 transform translate-y-12 opacity-0 transition-all duration-1000 ease-out drop-shadow-2xl"
            style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 0 40px rgba(0,0,0,0.5)' }}
          >
            CONSTRUCTION <br />
            <span className="text-blue-600">READY</span> MODELS
          </h1>

          {/* Subtext - Professional & Direct */}
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16 px-1 border-l-2 border-blue-600/20 py-2">
            <p
              ref={subheadlineRef}
              className="text-lg md:text-xl font-medium text-gray-400 leading-relaxed max-w-3xl transform translate-y-12 opacity-0 transition-all duration-1000 delay-300"
            >
              Delivering high-fidelity, construction-ready BIM coordination (LOD 100-500) for Architectural, Structural, and Food Service sectors. Engineered for seamless execution on site.
            </p>
          </div>

          {/* Action Row - Clean & Impactful */}
          <div 
            ref={ctaRef}
            className="flex flex-wrap gap-8 transform translate-y-12 opacity-0 transition-all duration-1000 delay-500"
          >
            <ArcanaButton 
              primary
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Proposal
            </ArcanaButton>

            <ArcanaButton 
              icon={false}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Showcase
            </ArcanaButton>
          </div>
        </div>

        {/* Bottom Technical Indicators */}
        <div className="absolute bottom-16 right-6 sm:right-10 lg:right-16 flex items-center space-x-12">
          {/* Slideshow Progress (Technical style) */}
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Projection Phase:</span>
            <div className="flex space-x-3">
              {backgrounds.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBg(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-500 ${
                    index === currentBg ? 'bg-blue-600 scale-125' : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="hidden sm:block h-12 w-[1px] bg-white/10" />
          
          <div className="hidden sm:block text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
            Precision Engineering &bull; 2026
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection