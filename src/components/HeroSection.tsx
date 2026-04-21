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

  const heroImage = '/hero-main.png'

  useEffect(() => {
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
      clearTimeout(timer)
    }
  }, [])

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
        <div className="absolute inset-0 opacity-80">
          <img 
            src={heroImage} 
            alt="BIM Presentation" 
            className="w-full h-full object-cover animate-hero-bg"
          />
        </div>
        
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
        
        {/* Balanced Atmospheric Gradient for Centered Text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/60 via-[#0A0F1C]/40 to-[#0A0F1C]" />
        <div className="absolute inset-0 bg-[#0A0F1C]/40 backdrop-blur-[1px]" />
      </motion.div>

      {/* Main Content - Stationary & Centered */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 min-h-[100dvh] flex flex-col justify-center items-center text-center pt-20 pb-10"
      >
        <div className="max-w-5xl flex flex-col items-center">
          {/* Primary Headline - High Contrast & Precision with subtle shadow for legibility */}
          <h1
            ref={headlineRef}
            className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.1] tracking-tighter sm:tracking-tight mb-6 sm:mb-8 transform translate-y-12 opacity-0 transition-all duration-1000 ease-out drop-shadow-2xl"
            style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 0 40px rgba(0,0,0,0.5)' }}
          >
            Construction-Ready <br />
            <span className="text-blue-500">BIM Modeling & Coordination</span>
          </h1>

          <div className="flex flex-col items-center gap-3 mb-8 sm:mb-10 px-6 py-4 border-y border-blue-600/20 bg-blue-600/5 backdrop-blur-[2px] rounded-xl w-full">
            <p
              ref={subheadlineRef}
              className="text-sm sm:text-base md:text-lg font-medium text-gray-300 sm:text-gray-400 leading-relaxed max-w-3xl transform translate-y-12 opacity-0 transition-all duration-1000 delay-300 drop-shadow-sm"
            >
              Delivering LOD 100–500 BIM models with full coordination, clash resolution, and IFC documentation. Supporting contractors and consultants with accurate, build-ready models.
            </p>
            <p className="font-brand text-[10px] sm:text-xs tracking-[0.25em] text-blue-500/80 uppercase font-semibold">
              Architecture & Structure | Coordination | Scan-to-BIM | Food Service
            </p>
          </div>

          {/* Action Row - Clean & Impactful */}
          <div 
            ref={ctaRef}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 transform translate-y-12 opacity-0 transition-all duration-1000 delay-500"
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
              View Our Work
            </ArcanaButton>
          </div>

          <p className="mt-6 text-xs sm:text-sm italic text-gray-400 animate-pulse border-b border-blue-500/0 hover:border-blue-500/20 transition-all inline-block pb-1">
            We don’t just model — we deliver coordinated, construction-ready BIM.
          </p>
        </div>

      </motion.div>
    </div>
  )
}

export default HeroSection