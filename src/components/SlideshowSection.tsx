import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import ArcanaButton from './ArcanaButton'

const SlideshowSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const imageIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const slides = [
    {
      id: 1,
      title: 'Architectural BIM Modeling',
      description: 'Detailed LOD 300–400 architectural models developed for accurate design representation and construction readiness.',
      tags: ['LOD 300–400', 'Coordinated Model', 'IFC Ready'],
      images: ['/slideshow-images/01.Architecture-1.png', '/slideshow-images/01.Architecture-2.png'],
    },
    {
      id: 2,
      title: 'Structural BIM Modeling',
      description: 'Precise modeling of beams, columns, and structural systems aligned with construction requirements.',
      tags: ['LOD 300–400', 'Structural Systems', 'Construction Ready'],
      images: ['/slideshow-images/02.Structure-1.png', '/slideshow-images/02.Structure-2.png'],
    },
    {
      id: 3,
      title: 'BIM Coordination & Clash Resolution',
      description: 'Multi-discipline coordination ensuring clash-free, construction-ready models through issue identification and resolution.',
      tags: ['Clash Detection', 'Issue Resolution', 'Coordinated Model'],
      images: ['/slideshow-images/03.coordination-1.png', '/slideshow-images/03.coordination-2.png'],
    },
    {
      id: 4,
      title: 'IFC Drawings & Documentation',
      description: 'Extraction of accurate construction drawings including plans, sections, and elevations directly from coordinated BIM models.',
      tags: ['IFC Drawings', 'Shop Drawings', 'Sheet Production'],
      images: ['/slideshow-images/04. sd -1.png', '/slideshow-images/04. sd -2.png'],
    },
    {
      id: 5,
      title: 'Scan to BIM',
      description: 'Conversion of point cloud data into precise BIM models for renovation and as-built documentation.',
      tags: ['Point Cloud', 'As-Built Model', 'High Accuracy'],
      images: ['/slideshow-images/05.Point cloud 1.png', '/slideshow-images/05.Point cloud 2.png'],
    },
    {
      id: 6,
      title: 'Food Service BIM',
      description: 'Specialized BIM modeling for commercial kitchens including equipment layout and coordination.',
      tags: ['Equipment Layout', 'Fabrication Ready', 'Coordination'],
      images: ['/slideshow-images/06. kitchen 1.png', '/slideshow-images/06.kitchen 2.png'],
    }
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20])

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setCurrentImageIndex(0)
    }, 6000)

    imageIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 2)
    }, 3000)
  }, [slides.length])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current)
      imageIntervalRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [startAutoPlay, stopAutoPlay])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setCurrentImageIndex(0)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setCurrentImageIndex(0)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setCurrentImageIndex(0)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => touchStartX.current = e.touches[0].clientX, [])
  const handleTouchMove = useCallback((e: React.TouchEvent) => touchEndX.current = e.touches[0].clientX, [])
  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide()
  }, [nextSlide, prevSlide])

  const slide = slides[currentSlide]

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 overflow-hidden bg-[#050810]"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Representative <span className="text-blue-500">BIM Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Showcasing our BIM modeling, coordination, and construction documentation capabilities across architecture and structure, including specialized systems.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/10 bg-[#0A0F1C] shadow-2xl aspect-[4/5] sm:aspect-[16/9]">
          
          {/* Progress Indicators */}
          <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 flex flex-col space-y-2 sm:space-y-3 z-40">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide ? 'h-8 sm:h-10 w-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'h-2 sm:h-3 w-1 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 bottom-6 sm:bottom-12 right-6 sm:right-16 flex justify-end gap-3 sm:gap-4 z-40 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={prevSlide} className="w-9 h-9 sm:w-14 sm:h-14 bg-black/40 hover:bg-blue-600/60 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="w-9 h-9 sm:w-14 sm:h-14 bg-black/40 hover:bg-blue-600/60 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div 
            className="relative h-full select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image Layer - Always changes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-' + currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <motion.div 
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                >
                  <motion.img
                    style={{ y: imageY }}
                    src={slide.images[currentImageIndex]}
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content Layer - Only changes when text is different */}
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <div className="max-w-2xl pl-12 sm:pl-24 lg:pl-32 pr-6 sm:pr-8 pointer-events-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.title + slide.description}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <h3 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                      {slide.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[9px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest"
                        >
                          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ArcanaButton 
                      className="!py-3 sm:!py-4 !px-6 sm:!px-8 !text-sm sm:!text-base"
                      onClick={() => {
                        const element = document.getElementById('projects');
                        if (element) {
                          const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                    >
                      View Detailed Work
                    </ArcanaButton>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SlideshowSection