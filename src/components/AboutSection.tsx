import React, { useEffect, useRef } from 'react'
import { useParallax } from '../hooks/use-parallax'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/use-scroll-animations'

const AboutSection: React.FC = () => {
  const workflowRef = useRef<HTMLDivElement>(null)

  // Parallax effects for different elements
  const backgroundParallax = useParallax({ speed: 0.3, direction: 'up' })
  const headerParallax = useParallax({ speed: 0.5, direction: 'up' })
  const contentParallax = useParallax({ speed: 0.4, direction: 'up' })
  const statsParallax = useParallax({ speed: 0.6, direction: 'up' })

  // Scroll-triggered animations
  const headerAnimation = useScrollAnimation({ 
    animationType: 'slideUp', 
    delay: 100, 
    duration: 800 
  })
  const contentAnimation = useScrollAnimation({ 
    animationType: 'fadeIn', 
    delay: 200, 
    duration: 800 
  })
  const workflowAnimation = useStaggeredAnimation(7, 200)
  const statsAnimation = useStaggeredAnimation(4, 150)

  const workflowSteps = [
    { id: 1, title: 'Client Inputs', description: 'Requirements gathering and project scope definition', icon: '📋' },
    { id: 2, title: 'Review', description: 'Analysis and feasibility assessment', icon: '🔍' },
    { id: 3, title: 'Planning', description: 'Strategic planning and resource allocation', icon: '📊' },
    { id: 4, title: 'Production', description: 'BIM modeling and development', icon: '🏗️' },
    { id: 5, title: 'Quality Check', description: 'Comprehensive review and validation', icon: '✅' },
    { id: 6, title: 'Output', description: 'Final deliverables and documentation', icon: '📤' },
    { id: 7, title: 'Feedback & Updates', description: 'Iterative improvements and client collaboration', icon: '🔄' }
  ]

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: '🏆' },
    { label: 'Countries Served', value: '25+', icon: '🌍' },
    { label: 'Client Satisfaction', value: '98%', icon: '😊' },
    { label: 'Years Experience', value: '10+', icon: '⏰' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-workflow-step')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (workflowRef.current) {
      const steps = workflowRef.current.querySelectorAll('.workflow-step')
      steps.forEach((step) => observer.observe(step))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      {/* Background Pattern */}
      <div 
        ref={backgroundParallax.elementRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 opacity-10"
        style={backgroundParallax.getTransformStyle()}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div 
          ref={headerAnimation.elementRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-20"
          style={{
            ...headerAnimation.getAnimationStyle(),
            ...headerParallax.getTransformStyle()
          }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Who We Are
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of construction with innovative BIM solutions and global expertise
          </p>
        </div>

        {/* Company Description */}
        <div 
          ref={contentAnimation.elementRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
          style={{
            ...contentAnimation.getAnimationStyle(),
            ...contentParallax.getTransformStyle()
          }}
        >
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To revolutionize the construction industry by providing cutting-edge BIM services that enhance 
                efficiency, reduce costs, and improve project outcomes. We leverage the latest technology and 
                industry best practices to deliver exceptional results.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">⭐</span>
                Why Choose Us
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Advanced AI-powered modeling and analysis</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Experienced team of BIM specialists</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Global project delivery capabilities</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">24/7 support and collaboration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Global Reach</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-white font-bold text-2xl mb-1">{stat.value}</div>
                    <div className="text-blue-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Our <span className="text-blue-400">Workflow</span>
          </h3>
          
          <div ref={workflowRef} className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transform -translate-y-1/2 hidden lg:block rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-6">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (workflowAnimation.elementRefs.current[index] = el)}
                  className="workflow-step relative group"
                  style={workflowAnimation.getStaggeredStyle(index)}
                >
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-white rounded-full flex items-center justify-center mb-6 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform group-hover:scale-110">
                    <span className="text-white font-bold text-2xl group-hover:text-white transition-colors duration-300">
                      {step.id}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-16">
            Our <span className="text-blue-400">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={(el) => (statsAnimation.elementRefs.current[index] = el)}
                className="group"
                style={statsAnimation.getStaggeredStyle(index)}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-white font-bold text-3xl mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-300 text-sm group-hover:text-blue-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
      <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-ping delay-1500" />
    </div>
  )
}

export default AboutSection 