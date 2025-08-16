import React, { useState } from 'react'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

const IconSvg: React.FC<{ name: string }> = ({ name }) => {
  console.log(`IconSvg called with name: ${name}`);
  
  switch (name) {
    case '🏗️': // BIM Modeling
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    case '🔧': // BIM Coordination
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case '📐': // CAD Services
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case '🎨': // 3D Modeling
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    case '⏰': // 4D Scheduling
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case '🎬': // Visualizations
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    default:
      console.warn(`No icon found for: ${name}, using default icon`);
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

const services: Service[] = [
  {
    id: '1',
    title: 'BIM SERVICES',
    description: 'Comprehensive Building Information Modeling services for architecture, structural, and MEP systems.',
    icon: '🏗️',
    features: [
      'ARCHITECTURE BIM SERVICES',
      'STRUCTURAL BIM SERVICES',
      'MEP BIM SERVICES'
    ]
  },
  {
    id: '2',
    title: 'BIM SERVICES',
    description: 'Advanced BIM coordination and integration services for complex building projects.',
    icon: '🔧',
    features: [
      'ARCHITECTURE BIM SERVICES',
      'STRUCTURAL BIM SERVICES',
      'MEP BIM SERVICES'
    ]
  },
  {
    id: '3',
    title: 'CAD SERVICES',
    description: 'Professional CAD drafting and conversion services for all your documentation needs.',
    icon: '📐',
    features: [
      'DRAFTING SERVICES(2D)',
      'CONVERTING HAND DRAWINGS TO AUTO CAD (2D) DRAWINGS',
      'IMAGE TO CAD AND PDF TO CAD CONVERSION',
      'POINT CLOUD DATA TO CAD DRAWINGS',
      '2D TO 3D CONVERSION'
    ]
  },
  {
    id: '4',
    title: '3D MODELLING',
    description: 'Advanced 3D modeling services with parametric families and comprehensive documentation.',
    icon: '🎨',
    features: [
      '3D MODELLING BASED ON LASER SCAN(POINT CLOUD)',
      'PARAMETRIC FAMILY CREATION',
      'DOCUMENTATION & PRESENTATION OF SHEETS'
    ]
  },
  {
    id: '5',
    title: '4D SCHEDULING',
    description: 'Time-based project scheduling and quantity management for construction projects.',
    icon: '⏰',
    features: [
      'BILL OF QUANTITY',
      'QUANTITY TAKE OFF',
      'BILL OF MATERIALS',
      'SCHEDULED INFORMATION FOR ALL FAMILY TYPES'
    ]
  },
  {
    id: '6',
    title: 'VISUALIZATIONS',
    description: 'High-quality rendering and visualization services for project presentation and marketing.',
    icon: '🎬',
    features: [
      'RENDERINGS',
      'WALKTHROUGHS',
      'IMAGES',
      'ANIMATIONS AND EXPLODED VIEWS'
    ]
  }
]

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Navigation Spacer */}
      <div className="h-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-blue-400">WE OFFER</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            Comprehensive BIM and CAD solutions designed to streamline your construction projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 touch-manipulation"
              >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Service Number */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg z-20">
                {service.id}
              </div>
              
              {/* Service Icon */}
              <div className="relative z-10 mb-4 sm:mb-6 mt-2 sm:mt-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-all duration-500">
                  {(() => {
                    console.log(`Rendering icon for service: ${service.title}, icon: ${service.icon}`);
                    return <IconSvg name={service.icon} />;
                  })()}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="relative z-10 text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-300 text-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="relative z-10 text-gray-300 mb-4 sm:mb-6 leading-relaxed text-center text-xs sm:text-sm">
                {service.description}
              </p>

              {/* Features List */}
              <div className="relative z-10">
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

                              {/* Hover Indicator */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
            </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-xl sm:rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto justify-center"
          >
            Get Started Today
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
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
                {/* Service Features */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-6">Service Features</h4>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Description */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-6">Service Overview</h4>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>
                  
                  {/* Service Icon */}
                  <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <h5 className="text-lg font-semibold text-white mb-4">Service Category</h5>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                        <IconSvg name={selectedService.icon} />
                      </div>
                      <span className="text-gray-300 font-medium">{selectedService.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServicesSection 