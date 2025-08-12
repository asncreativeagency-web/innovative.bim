import React, { useState, useEffect } from 'react'

const SlideshowSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'BIM Excellence',
      subtitle: 'Advanced 3D Modeling & Coordination',
      image: '/slide-1.jpg'
    },
    {
      id: 2,
      title: 'Structural Innovation',
      subtitle: 'Cutting-Edge Engineering Solutions',
      image: '/slide-2.jpg'
    },
    {
      id: 3,
      title: 'Digital Transformation',
      subtitle: 'Revolutionizing Construction Industry',
      image: '/slide-3.jpg'
    },
    {
      id: 4,
      title: 'Smart Infrastructure',
      subtitle: 'Future-Ready Building Systems',
      image: '/slide-4.jpg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

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
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Slide Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 text-blue-200">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Slide Counter */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 scale-125 shadow-lg shadow-blue-500/25'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105">
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