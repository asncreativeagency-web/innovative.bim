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
        
        {/* Advanced Technical Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Static Technical Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          {/* Moving Scanline Effect */}
          <motion.div 
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-1 bg-blue-500/10 blur-sm z-10"
          />

          {/* Grain/Noise Texture */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        {/* Left-Anchored Atmospheric Gradient (Clear on right for image visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/40 via-transparent to-[#0A0F1C]/60" />
      </motion.div>

      {/* Main Content - Stationary */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 min-h-screen flex flex-col justify-center pt-24 pb-12"
      >
        <div className="max-w-5xl">
          {/* Primary Headline - High Contrast & Precision with subtle shadow for legibility */}
          <h1
            ref={headlineRef}
            className="text-[2.2rem] sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[1.05] tracking-tighter sm:tracking-tight mb-8 sm:mb-10 transform translate-y-12 opacity-0 transition-all duration-1000 ease-out drop-shadow-2xl"
            style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 0 40px rgba(0,0,0,0.5)' }}
          >
            CONSTRUCTION <br />
            <span className="text-blue-500">READY</span> MODELS
          </h1>

          {/* Subtext - Professional & Direct */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-12 items-start mb-10 sm:mb-16 px-4 sm:px-1 border-l-2 border-blue-600/30 py-2 bg-blue-600/5 backdrop-blur-[2px] rounded-r-lg">
            <p
              ref={subheadlineRef}
              className="text-base sm:text-lg md:text-xl font-medium text-gray-300 sm:text-gray-400 leading-relaxed max-w-3xl transform translate-y-12 opacity-0 transition-all duration-1000 delay-300 drop-shadow-sm"
            >
              Delivering high-fidelity, construction-ready BIM coordination (LOD 100-500) for Architectural, Structural, and Food Service sectors. Engineered for seamless execution on site.
            </p>
          </div>

          {/* Action Row - Clean & Impactful */}
          <div 
            ref={ctaRef}
            className="flex flex-wrap gap-4 sm:gap-8 transform translate-y-12 opacity-0 transition-all duration-1000 delay-500"
          >
            <ArcanaButton 
              primary
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Proposal
            </ArcanaButton>

            <ArcanaButton 
              icon={false}
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Showcase
            </ArcanaButton>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default HeroSection