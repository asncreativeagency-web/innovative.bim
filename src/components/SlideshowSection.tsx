import React, { useState, useEffect, useCallback, useRef } from 'react'

const SlideshowSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      id: 1,
      title: 'BIM Excellence',
      subtitle: 'Advanced 3D Modeling & Coordination',
      description: 'Precision engineering meets architectural innovation with our cutting-edge BIM solutions.',
      image: '/slide-1.jpg',
      category: '3D Modeling'
    },
    {
      id: 2,
      title: 'Structural Innovation',
      subtitle: 'Cutting-Edge Engineering Solutions',
      description: 'Revolutionary structural analysis and design optimization for complex projects.',
      image: '/slide-2.jpg',
      category: 'Engineering'
    },
    {
      id: 3,
      title: 'Digital Transformation',
      subtitle: 'Revolutionizing Construction Industry',
      description: 'AI-powered workflows that streamline project delivery and enhance collaboration.',
      image: '/slide-3.jpg',
      category: 'Digital Solutions'
    },
    {
      id: 4,
      title: 'Smart Infrastructure',
      subtitle: 'Future-Ready Building Systems',
      description: 'Next-generation infrastructure design with sustainability and efficiency at its core.',
      image: '/slide-4.jpg',
      category: 'Infrastructure'
    }
  ]

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    
    intervalRef.current = setInterval(() => {
      if (!isPaused && !isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 5000)
  }, [isPaused, isTransitioning, slides.length])

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

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide(index)
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [currentSlide, isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide, slides.length])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide, slides.length])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === ' ') {
      e.preventDefault()
      setIsPaused(prev => !prev)
    }
  }, [prevSlide, nextSlide])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Project Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we transform architectural visions into digital reality
          </p>
        </div>

        {/* Slideshow Container */}
        <div 
          ref={containerRef}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Slide */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 scale-95 -translate-x-full' 
                      : 'opacity-0 scale-95 translate-x-full'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Slide Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/30 text-blue-200 text-sm font-medium rounded-full mb-4 border border-blue-400/30">
                      {slide.category}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 text-blue-200">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 mb-4">
                      {slide.subtitle}
                    </p>
                    <p className="text-base text-gray-400 max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Slide Counter */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentSlide + 1} / {slides.length}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-white/20 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 ease-out"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-2 ring-blue-400 scale-110'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-20 h-12 object-cover"
                />
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Explore Our Work
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default SlideshowSection 