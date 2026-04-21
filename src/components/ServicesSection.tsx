import React, { useState, useRef } from 'react'
import ArcanaButton from './ArcanaButton'

// --- Tool Logo Component (using real logos from /Technologies Used/) ---
const toolLogos: Record<string, string> = {
  'Revit': '/logos/revit_white.png',
  'AutoCAD': '/logos/autocad_white.png',
  'Recap': '/logos/autodesk_white.png',
  'Navisworks': '/logos/navisworks_white.png',
  'BIM 360': '/logos/BIM360_white.png',
  'TruView': '/logos/dwg_trueview_white.png',
}

const ToolLogo: React.FC<{ tool: string }> = ({ tool }) => {
  const logoSrc = toolLogos[tool]
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={tool}
        title={tool}
        className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
      />
    )
  }
  // Fallback for tools without an image
  return (
    <span className="text-white text-sm font-bold opacity-70 hover:opacity-100 transition-opacity duration-300">
      {tool}
    </span>
  )
}

interface Service {
  id: string
  title: string
  description: string
  icon: string
  keyCapabilities: string[]
  whatYouGet: string[]
  tools: string[]
  category: 'core' | 'advanced' | 'specialized'
}

const IconSvg: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case '🏗️': return (
      <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
    case '⭐': return (
      <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
    case '📐': return (
      <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
    case '📡': return (
      <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
    case '🍽️': return (
      <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01M9 5h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    )
    case '🎓': return (
      <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
    default: return (
      <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
}

const services: Service[] = [
  {
    id: '1',
    title: 'BIM Modeling (Architecture & Structure)',
    description: 'Development of accurate BIM models from concept to detailed levels (LOD 100–500), ensuring alignment with design intent and construction requirements.',
    icon: '🏗️',
    category: 'core',
    keyCapabilities: [
      'Architectural BIM Modeling',
      'Structural BIM Modeling',
      'LOD 100–500 Development',
      'Parametric & Data-Rich Models'
    ],
    whatYouGet: [
      'Accurate and scalable BIM models',
      'Design-aligned model development',
      'Structured data for project use',
      'Ready base for coordination'
    ],
    tools: ['Revit', 'AutoCAD']
  },
  {
    id: '2',
    title: 'BIM Coordination & Clash Resolution',
    description: 'Multi-discipline coordination with clash detection and resolution through continuous collaboration with project stakeholders.',
    icon: '⭐',
    category: 'core',
    keyCapabilities: [
      'Clash Detection (Hard & Soft)',
      'Issue Tracking & Resolution',
      'Multi-Discipline Coordination',
      'Coordination Meetings Support'
    ],
    whatYouGet: [
      'Coordinated, clash-free models',
      'Reduced site conflicts',
      'Faster approvals',
      'Smooth project execution'
    ],
    tools: ['Navisworks', 'Revit']
  },
  {
    id: '3',
    title: 'Construction Documentation (IFC Drawings)',
    description: 'Extraction of accurate construction drawings directly from coordinated BIM models, ensuring consistency and reliability.',
    icon: '📐',
    category: 'core',
    keyCapabilities: [
      'GA Drawings',
      'Sections & Elevations',
      'Shop Drawings',
      'Sheet Setup & Standards'
    ],
    whatYouGet: [
      'IFC-ready drawing sets',
      'Consistent documentation',
      'Reduced manual drafting errors',
      'Faster project delivery'
    ],
    tools: ['Revit', 'AutoCAD']
  },
  {
    id: '4',
    title: 'Scan to BIM',
    description: 'Conversion of point cloud data into precise as-built BIM models for renovation and as-built documentation.',
    icon: '📡',
    category: 'advanced',
    keyCapabilities: [
      'Point Cloud Processing',
      'As-Built Modeling',
      'Model Alignment & Accuracy',
      'Existing Conditions Modeling'
    ],
    whatYouGet: [
      'Accurate as-built models',
      'Reliable renovation data',
      'Reduced site verification effort',
      'Improved planning accuracy'
    ],
    tools: ['Recap', 'Cyclone', 'Revit']
  },
  {
    id: '5',
    title: 'Food Service BIM',
    description: 'Specialized BIM modeling for commercial kitchens including equipment layouts, coordination, and fabrication-ready detailing.',
    icon: '🍽️',
    category: 'specialized',
    keyCapabilities: [
      'Equipment Layout Planning',
      'MEP rough in sheets',
      'Coordination with Services',
      'Fabrication-Level Detailing',
      'Vendor Coordination Support',
      'Experience supporting international food service consultants and contractors'
    ],
    whatYouGet: [
      'Optimized kitchen layouts',
      'Efficient equipment coordination',
      'Reduced installation issues',
      'Fabrication-ready outputs'
    ],
    tools: ['Revit']
  },
  {
    id: '6',
    title: 'BIM Implementation Support',
    description: 'Support for BIM standards, workflows, and execution strategies tailored to project and organizational requirements.',
    icon: '🎓',
    category: 'specialized',
    keyCapabilities: [
      'BIM Execution Planning',
      'Template & Standards Setup',
      'Workflow Optimization',
      'Team Support & Guidance'
    ],
    whatYouGet: [
      'Structured BIM workflows',
      'Improved team efficiency',
      'Standardized deliverables',
      'Scalable BIM processes'
    ],
    tools: ['Revit', 'Navisworks', 'BIM 360']
  }
]

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(services[0])
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null)
  const [isFading, setIsFading] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  const handleServiceClick = (service: Service, index: number) => {
    if (index === activeServiceIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedService(service);
      setActiveServiceIndex(index);
      setIsFading(false);
    }, 300);
  };

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
    <div className="relative min-h-screen py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tight">
            Core <span className="text-blue-500">BIM Capabilities</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Delivering end-to-end BIM modeling, coordination, and construction documentation with a focus on accuracy, collaboration, and construction-ready output.
          </p>
        </div>

        {/* Two Column Layout */}
        <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[85vh] items-start">
          {/* Left Column - Services List */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xs sm:text-sm font-bold text-blue-300 uppercase tracking-[0.2em] mb-4 sm:mb-8">Core Capabilities</h3>
            <div className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service, index)}
                  onMouseEnter={() => setHoveredServiceIndex(index)}
                  onMouseLeave={() => setHoveredServiceIndex(null)}
                  className={`group relative cursor-pointer p-4 sm:p-6 rounded-2xl transition-all duration-500 border-2 ${
                    activeServiceIndex === index 
                      ? 'bg-blue-600/30 border-blue-400/60 shadow-2xl shadow-blue-500/20 scale-[1.01] sm:scale-[1.02] z-10' 
                      : hoveredServiceIndex === index
                      ? 'bg-white/10 border-blue-400/30 sm:translate-x-2'
                      : 'bg-white/5 border-white/5'
                  }`}
                >


                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 flex-shrink-0 ${
                      activeServiceIndex === index ? 'bg-blue-500/30 ring-2 ring-blue-400/50' : 'bg-white/10'
                    }`}>
                      <IconSvg name={service.icon} />
                    </div>
                    <div className="flex-1 pr-12 sm:pr-16">
                      <h4 className={`text-base sm:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 ${
                        activeServiceIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-blue-300'
                      }`}>
                        {service.title}
                      </h4>
                      <p className={`text-xs sm:text-sm transition-colors duration-300 line-clamp-2 ${
                        activeServiceIndex === index ? 'text-gray-200' : 'text-gray-500 group-hover:text-gray-400'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Details */}
          <div className="lg:sticky lg:top-24">
            {selectedService && (
              <div className={`bg-[#0F172A]/80 backdrop-blur-xl border border-white/20 rounded-[2rem] sm:rounded-3xl p-6 sm:p-12 shadow-2xl transition-opacity duration-300 min-h-[400px] sm:min-h-[600px] flex flex-col ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {/* Service Header */}
                <div className="mb-6 sm:mb-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                      <IconSvg name={selectedService.icon} />
                    </div>
                    <span className={`px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold rounded-full bg-gradient-to-r ${getCategoryColor(selectedService.category)} text-white shadow-lg`}>
                      {getCategoryBadge(selectedService.category)}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed italic">
                    {selectedService.description}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="mb-6 sm:mb-10">
                  <h4 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-widest mb-4 sm:mb-6 border-l-4 border-blue-500 pl-4">Key Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedService.keyCapabilities.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 group-hover:bg-blue-500/40 transition-colors flex-shrink-0">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What You Get */}
                <div className="mb-6 sm:mb-10">
                  <h4 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-widest mb-4 sm:mb-6 border-l-4 border-blue-500 pl-4">What You Get</h4>
                  <div className="space-y-3 sm:space-y-4">
                    {selectedService.whatYouGet.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 sm:space-x-4 bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="text-gray-200 text-sm sm:text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Info & CTA */}
                <div className="mt-auto pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="bg-blue-500/10 rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-blue-500/20 w-full sm:w-auto">
                    <p className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Tools Used</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedService.tools.map((tech, index) => (
                        <ToolLogo key={index} tool={tech} />
                      ))}
                    </div>
                  </div>
                  <ArcanaButton 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto !py-4"
                  >
                    Request a Proposal
                  </ArcanaButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection