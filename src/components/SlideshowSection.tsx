import React, { useState, useEffect, useCallback, useRef } from 'react'

const SlideshowSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const mouseStartX = useRef<number>(0)
  const mouseEndX = useRef<number>(0)
  const isDragging = useRef<boolean>(false)

  const slides = [
    {
      id: 1,
      title: 'BIM 3D Model Excellence',
      subtitle: 'Advanced Architectural Visualization',
      description: 'Comprehensive 3D BIM models showcasing architectural precision and design innovation.',
      image: '/Slideshow Photos/01-BIM Mdel 3D View.jpg',
      category: '3D Modeling'
    },
    {
      id: 2,
      title: 'Structural BIM Innovation',
      subtitle: 'Engineering Excellence in 3D',
      description: 'Detailed structural BIM models demonstrating advanced engineering solutions and coordination.',
      image: '/Slideshow Photos/02-BIM Mdel 3D View.jpg',
      category: 'Structural Design'
    },
    {
      id: 3,
      title: 'Comprehensive BIM Coordination',
      subtitle: 'Multi-Disciplinary Integration',
      description: 'Integrated BIM models showing seamless coordination between architectural, structural, and MEP systems.',
      image: '/Slideshow Photos/03-BIM Mdel 3D View.jpg',
      category: 'BIM Coordination'
    },
    {
      id: 4,
      title: 'Detailed BIM Visualization',
      subtitle: 'High-Resolution 3D Models',
      description: 'High-quality BIM visualizations with detailed geometry and realistic material representation.',
      image: '/Slideshow Photos/04-BIM Mdel 3D View.jpg',
      category: 'Visualization'
    },
    {
      id: 5,
      title: '3D Plan View Mastery',
      subtitle: 'Comprehensive Floor Planning',
      description: 'Advanced 3D plan views demonstrating spatial relationships and functional layouts.',
      image: '/Slideshow Photos/05-3D Plan View.jpg',
      category: 'Planning'
    },
    {
      id: 6,
      title: 'Detailed Plan Analysis',
      subtitle: 'Precision in Every Detail',
      description: 'Detailed 3D plan views with comprehensive analysis and optimization capabilities.',
      image: '/Slideshow Photos/06-3D Plan View.jpg',
      category: 'Analysis'
    },
    {
      id: 7,
      title: 'Kitchen Design Innovation',
      subtitle: 'Functional Space Optimization',
      description: 'Specialized 3D kitchen views showcasing ergonomic design and efficient space utilization.',
      image: '/Slideshow Photos/07-3D Kitchen View.jpg',
      category: 'Interior Design'
    },
    {
      id: 8,
      title: 'Technical Drawing Excellence',
      subtitle: 'Professional Documentation',
      description: 'High-quality technical drawings and plans with precise measurements and specifications.',
      image: '/Slideshow Photos/08-Sheet view-plan.jpg',
      category: 'Documentation'
    },
    {
      id: 9,
      title: 'Section View Precision',
      subtitle: 'Detailed Cross-Sections',
      description: 'Comprehensive section views revealing internal structure and construction details.',
      image: '/Slideshow Photos/09-Sheet view-Section.png',
      category: 'Technical Drawing'
    },
    {
      id: 10,
      title: 'Section Analysis',
      subtitle: 'Structural Understanding',
      description: 'Detailed section views providing insights into building construction and material assembly.',
      image: '/Slideshow Photos/10-Sheet view-Section.jpg',
      category: 'Analysis'
    },
    {
      id: 11,
      title: 'Elevation Mastery',
      subtitle: 'Architectural Facades',
      description: 'Professional elevation drawings showcasing building exteriors and architectural details.',
      image: '/Slideshow Photos/11-Sheet view-Elevataion.jpg',
      category: 'Architecture'
    },
    {
      id: 12,
      title: 'Elevation Analysis',
      subtitle: 'Detailed Facade Study',
      description: 'Comprehensive elevation analysis with detailed architectural elements and material specifications.',
      image: '/Slideshow Photos/12-Sheet view-elevation.jpg',
      category: 'Architecture'
    }
  ]

  // Auto-play functionality
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

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Touch/swipe functionality for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }, [nextSlide, prevSlide])

  // Mouse drag functionality
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    mouseStartX.current = e.clientX
    e.preventDefault()
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return
    mouseEndX.current = e.clientX
  }, [])

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return
    
    const dragThreshold = 50
    const diff = mouseStartX.current - mouseEndX.current

    if (Math.abs(diff) > dragThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    
    isDragging.current = false
  }, [nextSlide, prevSlide])

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false
  }, [])



  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 sm:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Our <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
          Explore our comprehensive portfolio of BIM projects showcasing architectural excellence and technical innovation
        </p>
      </div>

      {/* Slideshow Container - Full Width */}
      <div className="relative mb-8 sm:mb-12">
        <div 
          ref={containerRef}
          className="relative overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/10 h-[300px] md:h-[500px] lg:h-[600px] min-h-[250px] md:min-h-[450px] lg:min-h-[550px] cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                {/* Slide Image */}
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover sm:object-contain md:object-cover lg:object-cover"
                  />
                  
                  {/* Slide Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 xl:p-10">
                      <div className="mb-2 sm:mb-3 lg:mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-500/80 text-white text-xs sm:text-sm font-medium rounded-full">
                          {slide.category}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 mb-2 sm:mb-3">
                        {slide.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 touch-manipulation"
              aria-label="Previous slide"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 touch-manipulation"
              aria-label="Next slide"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>


          {/* Dot Indicators */}
          <div className="flex justify-center space-x-1.5 sm:space-x-2 md:space-x-3 mt-2 sm:mt-3 md:mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-400 scale-125' : 'bg-gray-400 hover:bg-gray-300'
                } touch-manipulation`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>


      {/* CTA Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <button 
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 touch-manipulation w-full sm:w-auto justify-center"
        >
          Explore Our Work
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>


    </div>
  )
}

export default SlideshowSection 