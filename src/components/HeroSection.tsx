import React, { useEffect, useRef } from 'react'

const HeroSection: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.classList.add('animate-logo-reveal')
      }
    }, 500)

    const timer2 = setTimeout(() => {
      if (headlineRef.current) {
        headlineRef.current.classList.add('animate-headline-reveal')
      }
    }, 1000)

    const timer3 = setTimeout(() => {
      if (subheadlineRef.current) {
        subheadlineRef.current.classList.add('animate-subheadline-reveal')
      }
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      {/* Navigation Spacer */}
      <div className="h-24"></div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold transform translate-y-0 transition-all duration-1000 ease-out leading-tight"
          >
            <span className="text-white">Innovative </span>
            <span className="text-blue-400">BIM </span>
            <span className="text-white">Services</span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 transform translate-y-0 transition-all duration-1000 ease-out leading-relaxed max-w-xl"
          >
            Revolutionizing the construction industry with cutting-edge, AI-powered BIM solutions.
            We deliver precision, efficiency, and innovation in every project.
          </p>

          {/* CTA Button */}
          <div className="transform translate-y-0 transition-all duration-1000 ease-out">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25">
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-gray-300 text-xs font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">98%</div>
              <div className="text-gray-300 text-xs font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-300 text-xs font-medium">Support Available</div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 animate-pulse" />
            
            {/* Main Icon */}
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-blue-500/25">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-blue-300 text-xl font-semibold mb-2">BIM Excellence</p>
              <p className="text-gray-400 text-base">Building the Future</p>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 left-8 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000" />
            <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default HeroSection 