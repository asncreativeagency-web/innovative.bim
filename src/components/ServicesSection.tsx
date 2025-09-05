import React, { useState } from 'react'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  category: 'core' | 'advanced' | 'specialized'
  technologies: string[]
  duration: string
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
    case '🍽️': // Food Service BIM
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01M9 5h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      )
    case '📡': // Scan-to-BIM
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    case '🎓': // BIM Implementation
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
    title: 'BIM MODELING & COORDINATION',
    description: 'Comprehensive Building Information Modeling services for architecture, structural, and MEP systems with advanced coordination.',
    icon: '🏗️',
    category: 'core',
    features: [
      'ARCHITECTURE BIM SERVICES',
      'STRUCTURAL BIM SERVICES',
      'MEP BIM SERVICES',
      'Multi-discipline coordination',
      'Clash detection & resolution'
    ],
    benefits: [
      'Reduced construction errors by 90%',
      'Improved project coordination',
      'Enhanced visualization for stakeholders'
    ],
    technologies: ['Revit', 'Navisworks', 'BIM 360', 'AutoCAD'],
    duration: '8-12 months'
  },
  {
    id: '2',
    title: 'BIM COORDINATION & INTEGRATION',
    description: 'Advanced BIM coordination and integration services for complex building projects with real-time collaboration.',
    icon: '🔧',
    category: 'core',
    features: [
      'ARCHITECTURE BIM SERVICES',
      'STRUCTURAL BIM SERVICES',
      'MEP BIM SERVICES',
      'Real-time collaboration',
      'Workflow optimization'
    ],
    benefits: [
      'Streamlined construction process',
      'Enhanced team collaboration',
      'Improved project timeline'
    ],
    technologies: ['Revit', 'BIM 360', 'Dynamo', 'Navisworks'],
    duration: '6-10 months'
  },
  {
    id: '3',
    title: 'CAD SERVICES & DRAFTING',
    description: 'Professional CAD drafting and conversion services for all your documentation needs with precision and accuracy.',
    icon: '📐',
    category: 'core',
    features: [
      'DRAFTING SERVICES(2D)',
      'CONVERTING HAND DRAWINGS TO AUTO CAD (2D) DRAWINGS',
      'IMAGE TO CAD AND PDF TO CAD CONVERSION',
      'POINT CLOUD DATA TO CAD DRAWINGS',
      '2D TO 3D CONVERSION'
    ],
    benefits: [
      'Accurate documentation',
      'Standardized drawings',
      'Improved project clarity'
    ],
    technologies: ['AutoCAD', 'Civil 3D', 'BIM 360', 'Bluebeam'],
    duration: '2-6 months'
  },
  {
    id: '4',
    title: '3D MODELING & PARAMETRIC FAMILIES',
    description: 'Advanced 3D modeling services with parametric families and comprehensive documentation for complex projects.',
    icon: '🎨',
    category: 'advanced',
    features: [
      '3D MODELLING BASED ON LASER SCAN(POINT CLOUD)',
      'PARAMETRIC FAMILY CREATION',
      'DOCUMENTATION & PRESENTATION OF SHEETS',
      'Custom component development',
      'Performance optimization'
    ],
    benefits: [
      'Increased design flexibility',
      'Improved project consistency',
      'Enhanced reusability'
    ],
    technologies: ['Revit', 'Dynamo', 'BIM 360', 'Family Editor'],
    duration: '4-8 months'
  },
  {
    id: '5',
    title: '4D SCHEDULING & QUANTITY MANAGEMENT',
    description: 'Time-based project scheduling and quantity management for construction projects with advanced analytics.',
    icon: '⏰',
    category: 'advanced',
    features: [
      'BILL OF QUANTITY',
      'QUANTITY TAKE OFF',
      'BILL OF MATERIALS',
      'SCHEDULED INFORMATION FOR ALL FAMILY TYPES',
      'Construction sequencing'
    ],
    benefits: [
      'Improved cost control',
      'Enhanced project planning',
      'Better resource allocation'
    ],
    technologies: ['Revit', 'Navisworks', 'BIM 360', 'Project'],
    duration: '3-6 months'
  },
  {
    id: '6',
    title: 'VISUALIZATIONS & RENDERING',
    description: 'High-quality rendering and visualization services for project presentation and marketing with photorealistic output.',
    icon: '🎬',
    category: 'specialized',
    features: [
      'RENDERINGS',
      'WALKTHROUGHS',
      'IMAGES',
      'ANIMATIONS AND EXPLODED VIEWS',
      'Virtual reality experiences'
    ],
    benefits: [
      'Enhanced project presentation',
      'Improved stakeholder communication',
      'Better marketing materials'
    ],
    technologies: ['3ds Max', 'V-Ray', 'Enscape', 'Twinmotion'],
    duration: '2-4 months'
  },
  {
    id: '7',
    title: 'FOOD SERVICE BIM SPECIALIZATION',
    description: 'Specialized BIM services for commercial kitchens, restaurants, and food service facilities with custom equipment modeling.',
    icon: '🍽️',
    category: 'specialized',
    features: [
      'Commercial Kitchen Design & Modeling',
      'Custom Equipment Revit Families',
      'Kitchen MEP Coordination',
      'Laundry System Layouts',
      'Custom Fabrication Modeling',
      'Shop Drawings & MEP Extractions'
    ],
    benefits: [
      'Industry-specific expertise',
      'Custom equipment integration',
      'Manufacturer-ready BIM models',
      'Enhanced kitchen functionality'
    ],
    technologies: ['Revit', 'AutoCAD', 'BIM 360', 'Custom Families'],
    duration: '3-6 months'
  },
  {
    id: '8',
    title: 'SCAN-TO-BIM & POINT CLOUD SERVICES',
    description: 'Advanced point cloud processing and as-built modeling for renovation, heritage, and facility documentation projects.',
    icon: '📡',
    category: 'advanced',
    features: [
      'Point Cloud to 3D Model Conversion',
      'As-Built Modeling (LOD 400-500)',
      'Heritage & Renovation Projects',
      'Retrofit Planning & Documentation',
      'Structural & MEP Element Capture',
      'Facility Management Models'
    ],
    benefits: [
      'Accurate existing condition modeling',
      'Reduced site visits',
      'Enhanced renovation planning',
      'Improved facility management'
    ],
    technologies: ['Revit', 'AutoCAD', 'Point Cloud Processing', 'BIM 360'],
    duration: '4-8 months'
  },
  {
    id: '9',
    title: 'BIM IMPLEMENTATION & TRAINING',
    description: 'Comprehensive BIM implementation services including execution planning, standards development, and team training.',
    icon: '🎓',
    category: 'specialized',
    features: [
      'BIM Execution Planning (BEP)',
      'Standards Development & Implementation',
      'Team Training & Certification',
      'Process Optimization',
      'Workflow Integration',
      'Quality Control Systems'
    ],
    benefits: [
      'Streamlined BIM adoption',
      'Improved team efficiency',
      'Standardized processes',
      'Enhanced project quality'
    ],
    technologies: ['Revit', 'BIM 360', 'Process Management', 'Training Tools'],
    duration: '6-12 months'
  }
]

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core': return 'from-blue-500 to-cyan-400'
      case 'advanced': return 'from-purple-500 to-pink-400'
      case 'specialized': return 'from-orange-500 to-red-400'
      default: return 'from-gray-500 to-gray-400'
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'core': return 'Core Service'
      case 'advanced': return 'Advanced'
      case 'specialized': return 'Specialized'
      default: return 'Service'
    }
  }

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Professional <span className="text-blue-400">BIM Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            Comprehensive BIM and CAD solutions designed to streamline your construction projects with precision, efficiency, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => {
                setSelectedService(selectedService?.id === service.id ? null : service)
                // Scroll to details section if opening
                if (selectedService?.id !== service.id) {
                  setTimeout(() => {
                    document.getElementById('service-details')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }, 100)
                }
              }}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 touch-manipulation ${
                  selectedService?.id === service.id ? 'ring-2 ring-blue-400 bg-white/10' : ''
                }`}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryBadge(service.category)}
                  </span>
                </div>
                
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
                <p className="relative z-10 text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Features Preview */}
                <div className="relative z-10 space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-blue-400 text-sm font-medium text-center">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Click to Expand Indicator */}
                <div className="text-center">
                  <div className={`inline-flex items-center text-sm font-medium transition-colors ${
                    selectedService?.id === service.id ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-300'
                  }`}>
                    {selectedService?.id === service.id ? 'Hide Details' : 'View Details'}
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      selectedService?.id === service.id ? 'rotate-180' : ''
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        {selectedService && (
          <div id="service-details" className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Service Details */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedService.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits & Technical Info */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Project Benefits</h4>
                <div className="space-y-3 mb-6">
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-gray-200 text-sm">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Information */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h5 className="text-blue-400 font-semibold text-sm mb-2">Technologies</h5>
                    <div className="flex flex-wrap gap-1">
                      {selectedService.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h5 className="text-blue-400 font-semibold text-sm mb-2">Duration</h5>
                    <p className="text-gray-200 text-sm">{selectedService.duration}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                  >
                    Get This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Projects?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our BIM experts help you achieve precision, efficiency, and innovation in your construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                Get Quote
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                View Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection 