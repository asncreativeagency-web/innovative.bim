import React, { useState } from 'react'
import { useParallax } from '../hooks/use-parallax'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/use-scroll-animations'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  lodLevels?: string[]
  features: string[]
}

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  // Parallax effects for different elements
  const backgroundParallax = useParallax({ speed: 0.3, direction: 'up' })
  const headerParallax = useParallax({ speed: 0.5, direction: 'up' })
  const servicesParallax = useParallax({ speed: 0.4, direction: 'up' })

  // Scroll-triggered animations
  const headerAnimation = useScrollAnimation({ 
    animationType: 'slideUp', 
    delay: 100, 
    duration: 800 
  })
  const servicesAnimation = useStaggeredAnimation(6, 150)

  const services: Service[] = [
    {
      id: '1',
      title: 'BIM Modeling',
      description: 'Comprehensive 3D modeling services including architectural, structural, and MEP systems with detailed LOD specifications.',
      icon: '🏗️',
      lodLevels: ['LOD 200', 'LOD 350', 'LOD 500'],
      features: ['3D Modeling', 'Parametric Design', 'Family Creation', 'Template Development']
    },
    {
      id: '2',
      title: 'Clash Detection',
      description: 'Advanced clash detection and resolution services to identify and resolve design conflicts before construction begins.',
      icon: '🔍',
      lodLevels: ['LOD 300', 'LOD 400', 'LOD 500'],
      features: ['Multi-discipline Coordination', 'Clash Resolution', 'Report Generation', 'Automated Detection']
    },
    {
      id: '3',
      title: '4D Scheduling',
      description: 'Time-based project scheduling and sequencing using BIM models to optimize construction workflows and timelines.',
      icon: '⏰',
      lodLevels: ['LOD 300', 'LOD 400', 'LOD 500'],
      features: ['Construction Sequencing', 'Resource Planning', 'Timeline Visualization', 'Progress Tracking']
    },
    {
      id: '4',
      title: 'Quantity Takeoff',
      description: 'Accurate material quantity calculations and cost estimation from BIM models for better project budgeting.',
      icon: '📊',
      lodLevels: ['LOD 300', 'LOD 400', 'LOD 500'],
      features: ['Material Quantities', 'Cost Estimation', 'Bill of Materials', 'Change Order Analysis']
    },
    {
      id: '5',
      title: 'BIM Coordination',
      description: 'Multi-disciplinary coordination services ensuring seamless integration between all building systems and trades.',
      icon: '🤝',
      lodLevels: ['LOD 300', 'LOD 400', 'LOD 500'],
      features: ['Trade Coordination', 'System Integration', 'Quality Assurance', 'Documentation']
    },
    {
      id: '6',
      title: 'BIM Training',
      description: 'Comprehensive training programs for teams to effectively implement and utilize BIM in their projects.',
      icon: '🎓',
      lodLevels: ['All Levels'],
      features: ['Software Training', 'Workflow Optimization', 'Best Practices', 'Ongoing Support']
    }
  ]

  const getLodDescription = (lod: string) => {
    const descriptions: { [key: string]: string } = {
      'LOD 200': 'Generic systems with approximate quantities and basic geometry. Suitable for schematic design and early planning.',
      'LOD 300': 'Detailed geometry with specific quantities and system interfaces. Ideal for design development and construction documents.',
      'LOD 350': 'Detailed geometry with interfaces to other building systems. Perfect for construction coordination and clash detection.',
      'LOD 400': 'Fabrication-ready models with detailed geometry and assembly information. Used for fabrication and installation.',
      'LOD 500': 'Field-verified models with actual quantities and precise geometry. Represents as-built conditions.'
    }
    return descriptions[lod] || 'Level of Development specification for BIM modeling.'
  }

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

      {/* Navigation Spacer */}
      <div className="h-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerAnimation.elementRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            ...headerAnimation.getAnimationStyle(),
            ...headerParallax.getTransformStyle()
          }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            What We Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive BIM and CAD solutions designed to streamline your construction projects
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesParallax.elementRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={servicesParallax.getTransformStyle()}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (servicesAnimation.elementRefs.current[index] = el)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              style={servicesAnimation.getStaggeredStyle(index)}
              onClick={() => setSelectedService(service)}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* LOD Levels */}
                {service.lodLevels && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.lodLevels.map((lod) => (
                      <span
                        key={lod}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30"
                      >
                        {lod}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced LOD Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start p-8 border-b border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  Level of Development (LOD) Specifications
                </p>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LOD Levels */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-6">LOD Levels Available</h4>
                  <div className="space-y-4">
                    {selectedService.lodLevels?.map((lod) => (
                      <div key={lod} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-brand-500/30 transition-all duration-300">
                        <h5 className="text-lg font-semibold text-brand-400 mb-2">{lod}</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {getLodDescription(lod)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Features */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-6">Key Features</h4>
                  <div className="space-y-3">
                    {selectedService.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Service Description */}
                  <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <h5 className="text-lg font-semibold text-white mb-2">Service Overview</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-20 w-2 h-2 bg-brand-500 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-brand-500 rounded-full animate-ping delay-1000" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-brand-400 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default ServicesSection 