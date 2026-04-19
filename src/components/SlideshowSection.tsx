import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SlideshowSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const mouseStartX = useRef<number>(0)
  const mouseEndX = useRef<number>(0)
  const isDragging = useRef<boolean>(false)

  const slides = [
    {
      id: 1,
      title: 'Architectural Master Planning',
      subtitle: 'Urban Scale BIM Integration',
      description: 'Comprehensive 3D BIM modeling for large-scale urban developments and commercial flagships.',
      image: '/Projects/main-1.png',
      category: 'Architecture'
    },
    {
      id: 2,
      title: 'Structural LOD Detailing',
      subtitle: 'Engineering Precision',
      description: 'Advanced structural modeling at LOD 400-500, focusing on steel detailing and connection precision.',
      image: '/Projects/lod-beam.png',
      category: 'Structural'
    },
    {
      id: 3,
      title: 'MEP System Coordination',
      subtitle: 'Multi-Disciplinary Integration',
      description: 'Zero-clash coordination between complex mechanical, electrical, and plumbing infrastructure.',
      image: '/Projects/coord-1.png',
      category: 'Coordination'
    },
    {
      id: 4,
      title: 'Industrial Kitchen Design',
      subtitle: 'Specialized Food Service BIM',
      description: 'Specialized coordination for industrial-grade kitchen equipment and facility layouts.',
      image: '/Projects/kitchen-1.png',
      category: 'Food Service'
    },
    {
      id: 5,
      title: 'Scan-to-BIM Technical',
      subtitle: 'As-Built Documentation',
      description: 'Processing high-density point cloud surveys into precise, construction-ready 3D BIM models.',
      image: '/Projects/pointcloud-2.png',
      category: 'Technical'
    },
    {
      id: 6,
      title: 'Spatial Design & Layout',
      subtitle: 'Functional Optimization',
      description: 'BIM-driven spatial planning and interior coordination for optimized building performance.',
      image: '/Projects/sd-1.png',
      category: 'Spatial Design'
    },
    {
      id: 7,
      title: 'Fenestration Detail LOD',
      subtitle: 'High-Fidelity Facade Engineering',
      description: 'Precise architectural detailing for complex window systems and envelope interfaces.',
      image: '/Projects/lod-window.png',
      category: 'Architecture'
    },
    {
      id: 8,
      title: 'Structural Cross-Analysis',
      subtitle: 'Framework Validation',
      description: 'Detailed structural validation within a multi-disciplinary BIM environment.',
      image: '/Projects/struct-1.png',
      category: 'Structural'
    },
    {
      id: 9,
      title: 'Facility Coordination',
      subtitle: 'System Persistence',
      description: 'Long-term BIM management and coordination for complex institutional facilities.',
      image: '/Projects/coord-2.png',
      category: 'Coordination'
    },
    {
      id: 10,
      title: 'Architectural Envelope',
      subtitle: 'Parametric Design Study',
      description: 'Advanced parametric study of complex architectural envelopes and facade systems.',
      image: '/Projects/arch-1.png',
      category: 'Architecture'
    },
    {
      id: 11,
      title: 'Industrial MEP Hub',
      subtitle: 'Process System Integration',
      description: 'Coordination of specialized industrial process piping and heavy mechanical systems.',
      image: '/Projects/struct-2.png', // Reusing high-qual render
      category: 'Engineering'
    },
    {
      id: 12,
      title: 'Specialized Kitchen LOD',
      subtitle: 'Equipment Fidelity',
      description: 'High-LOD modeling of specialized food production and storage equipment.',
      image: '/Projects/lod-kitchen-3.png',
      category: 'Food Service'
    },
    {
      id: 13,
      title: 'Scan Analysis Phase 1',
      subtitle: 'Point Cloud Processing',
      description: 'Initial processing and alignment of site-captured point cloud data.',
      image: '/Projects/pointcloud-1.png',
      category: 'Technical'
    },
    {
      id: 14,
      title: 'Architectural Detail View',
      subtitle: 'Interior Performance',
      description: 'Detailed analysis of interior architectural elements and material transitions.',
      image: '/Projects/arch-2.png',
      category: 'Architecture'
    },
    {
      id: 15,
      title: 'Kitchen Flow Strategy',
      subtitle: 'Operational BIM',
      description: 'BIM-driven operational analysis for large-scale commercial kitchens.',
      image: '/Projects/kitchen-2.png',
      category: 'Food Service'
    },
    {
      id: 16,
      title: 'SD Logic Analysis',
      subtitle: 'Spatial Distribution',
      description: 'Analysis of complex spatial distribution logic within institutional floor plans.',
      image: '/Projects/sd-2.png',
      category: 'Spatial Design'
    },
    {
      id: 17,
      title: 'Hero Technical Cutout',
      subtitle: 'Visual Synthesis',
      description: 'High-fidelity technical visualization showcasing the synthesis of BIM disciplines.',
      image: '/Projects/hero-cutout.png',
      category: 'Visualization'
    }
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Auto-play and swipe logic... (keeping existing logic for brevity)
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }, [slides.length])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [startAutoPlay, stopAutoPlay])

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), [slides.length])
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), [slides.length])
  const goToSlide = useCallback((index: number) => setCurrentSlide(index), [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => touchStartX.current = e.touches[0].clientX, [])
  const handleTouchMove = useCallback((e: React.TouchEvent) => touchEndX.current = e.touches[0].clientX, [])
  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide()
  }, [nextSlide, prevSlide])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    mouseStartX.current = e.clientX
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return
    mouseEndX.current = e.clientX
  }, [])

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return
    const diff = mouseStartX.current - mouseEndX.current
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide()
    isDragging.current = false
  }, [nextSlide, prevSlide])

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 overflow-hidden bg-[#050810]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl aspect-[4/5] sm:aspect-[16/9] shadow-2xl">
          
          {/* Progress Bar for Auto-play */}
          <div className="absolute top-0 left-0 w-full h-1 z-40 bg-white/5">
            <motion.div 
              key={currentSlide}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            />
          </div>
          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-blue-600/40 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto border border-white/10 group/btn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/btn:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-blue-600/40 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto border border-white/10 group/btn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Counter (Technical style) */}
          <div className="absolute top-8 right-8 z-40 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 font-mono text-[10px] text-gray-400">
            <span className="text-blue-500 font-black">{String(currentSlide + 1).padStart(2, '0')}</span> / {slides.length}
          </div>

          {/* Slides */}
          <div 
            className="relative h-full select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {slides.map((slide, index) => {
              const isActive = index === currentSlide
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    isActive ? 'scale-100 opacity-100 visible' : 'scale-110 opacity-0 invisible translate-y-4'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
                >
                  <motion.div 
                    style={{ y: imageY }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover scale-125" // Scale up to allow for parallax movement
                    />
                  </motion.div>
                  
                  {/* Content Panel Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex items-center">
                    <motion.div 
                      style={{ y: contentY }}
                      className="max-w-xl pl-6 sm:pl-16 lg:pl-24 pr-8 pt-10 sm:pt-0"
                    >
                      <div className={`transition-all duration-700 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="inline-block px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-black rounded shadow-lg uppercase tracking-widest border border-white/20 font-mono">
                            {slide.category}
                          </span>
                          <span className="text-[8px] sm:text-[9px] text-gray-500 font-mono uppercase tracking-widest">ARC_ID: {slide.id + 1000}</span>
                        </div>
                        
                        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-[1.1] tracking-tighter italic">
                          {slide.title}
                        </h3>
                        <p className="text-lg sm:text-2xl text-blue-400 font-bold mb-4 sm:mb-6 tracking-tight">
                          {slide.subtitle}
                        </p>
                        <p className="text-sm sm:text-lg text-gray-300 leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                          {slide.description}
                        </p>

                        {/* Technical Accent Line */}
                        <div className="mt-8 sm:mt-10 h-1 w-12 sm:w-16 bg-blue-500 rounded-full opacity-50" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Indicators Line */}
          <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 sm:space-x-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full h-1 sm:h-1.5 ${
                  index === currentSlide ? 'w-8 sm:w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-2 sm:w-4 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Global Floating Action Overlay */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
            Supporting Global Contractors & Consultants
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             {/* Dynamic Tech Badges can go here */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SlideshowSection 