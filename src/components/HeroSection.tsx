import React, { useEffect, useRef } from 'react'

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (headlineRef.current) {
        headlineRef.current.style.transform = 'translateY(0)'
        headlineRef.current.style.opacity = '1'
      }
    }, 200)

    const timer2 = setTimeout(() => {
      if (subheadlineRef.current) {
        subheadlineRef.current.style.transform = 'translateY(0)'
        subheadlineRef.current.style.opacity = '1'
      }
    }, 600)

    const timer3 = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in-up')
      }
    }, 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div 
      id="hero-section" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 parallax-bg parallax-slow">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6 pt-20">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-hero font-bold transform translate-y-8 opacity-0 transition-all duration-1000 ease-out leading-tight"
          >
            <span className="text-white">Innovative </span>
            <span className="gradient-text-animated">BIM </span>
            <span className="text-white">Services</span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-subheadline text-gray-300 transform translate-y-8 opacity-0 transition-all duration-1000 ease-out leading-relaxed max-w-xl"
          >
            Revolutionizing the construction industry with cutting-edge, AI-powered BIM solutions.
            We deliver precision, efficiency, and innovation in every project.
          </p>

          {/* CTA Button */}
          <div ref={ctaRef} className="transform translate-y-8 opacity-0 transition-all duration-1000 ease-out">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 hover-lift">
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column - Visual Content */}
        <div className="relative flex items-center justify-center pt-20">
          {/* Floating Card */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 text-center max-w-sm animate-float">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-float-delay-1">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">BIM Excellence</h3>
              <p className="text-gray-300">Building the Future</p>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-float-delay-2" />
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
            <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float-delay-1" />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-12 text-center">
          <div className="animate-fade-in-up stagger-1">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="animate-fade-in-up stagger-3">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 