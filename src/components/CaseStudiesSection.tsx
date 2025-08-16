import React, { useState } from 'react'

interface CaseStudy {
  id: string
  title: string
  client: string
  projectType: string
  value: string
  duration: string
  description: string
  challenges: string[]
  solutions: string[]
  results: string[]
  technologies: string[]
  image: string
}

const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Downtown Commercial Complex',
      client: 'Metro Development Group',
      projectType: 'Commercial',
      value: '$45M',
      duration: '18 months',
      description: 'A 25-story mixed-use development featuring office spaces, retail areas, and luxury apartments in the heart of downtown.',
      challenges: [
        'Complex MEP coordination across multiple floors',
        'Tight construction timeline with multiple contractors',
        'Strict city building codes and regulations'
      ],
      solutions: [
        'Implemented comprehensive BIM coordination workflow',
        'Created 4D construction sequencing models',
        'Developed clash detection protocols and resolution strategies'
      ],
      results: [
        'Reduced construction time by 4 months',
        'Eliminated 95% of field conflicts',
        'Saved $2.3M in rework costs',
        'Achieved LEED Gold certification'
      ],
      technologies: ['Revit', 'Navisworks', 'BIM 360', 'Dynamo', '4D Scheduling'],
      image: '/downtown commercial complex.avif'
    },
    {
      id: '2',
      title: 'Healthcare Facility Expansion',
      client: 'City General Hospital',
      projectType: 'Healthcare',
      value: '$28M',
      duration: '14 months',
      description: 'Modernization and expansion of an existing hospital facility, including new surgical suites and patient care areas.',
      challenges: [
        'Working within operational hospital environment',
        'Complex medical equipment integration',
        'Strict healthcare facility standards'
      ],
      solutions: [
        'Phased BIM implementation approach',
        'Detailed equipment coordination modeling',
        'Comprehensive compliance documentation'
      ],
      results: [
        'Minimal disruption to hospital operations',
        '100% compliance with healthcare standards',
        'Improved patient flow and staff efficiency',
        'Completed 2 weeks ahead of schedule'
      ],
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'Clash Detection', 'Quantity Takeoff'],
      image: '/healthcare facility expansion.jpg'
    },
    {
      id: '3',
      title: 'Residential Tower Complex',
      client: 'Luxury Living Developers',
      projectType: 'Residential',
      value: '$65M',
      duration: '24 months',
      description: 'Three interconnected residential towers with shared amenities, featuring luxury apartments and penthouses.',
      challenges: [
        'Complex structural steel coordination',
        'High-end finish coordination',
        'Multiple architectural styles integration'
      ],
      solutions: [
        'Advanced structural BIM modeling',
        'Detailed finish coordination models',
        'Integrated design coordination workflow'
      ],
      results: [
        'Enhanced structural integrity and safety',
        'Improved construction quality and finish',
        'Reduced material waste by 30%',
        'Increased property value by 15%'
      ],
      technologies: ['Revit', 'Tekla', 'BIM 360', 'Structural Analysis', '3D Coordination'],
      image: '/Resedential Tower Complex.jpg'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore detailed examples of how our BIM expertise delivers exceptional results across diverse project types
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
              onClick={() => setSelectedCase(caseStudy)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Case Study Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Enhanced Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                      target.alt = 'Image not available';
                    }}
                  />
                  
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow-lg border border-blue-400/30">
                      {caseStudy.projectType}
                    </span>
                  </div>

                  {/* Project Value Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow-lg border border-green-400/30">
                      {caseStudy.value}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/95 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/20">
                      View Details
                    </div>
                  </div>

                  {/* Image Hover Effect */}
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Enhanced Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Client:</span>
                      <span className="text-blue-200 font-medium">{caseStudy.client}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white font-medium">{caseStudy.duration}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-lg border border-gray-500/30">
                        +{caseStudy.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Enhanced Case Study Modal */}
      {selectedCase && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start p-8 border-b border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedCase.title}
                </h3>
                <p className="text-blue-300 text-lg">
                  {selectedCase.client} • {selectedCase.projectType}
                </p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Project Image */}
            <div className="p-8 pb-6">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    target.alt = 'Image not available';
                  }}
                />
                
                {/* Image Overlay with Project Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Project Type and Value Overlay */}
                <div className="absolute top-6 left-6 flex items-center space-x-3">
                  <span className="px-4 py-2 bg-blue-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm border border-blue-400/30">
                    {selectedCase.projectType}
                  </span>
                  <span className="px-4 py-2 bg-green-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm border border-green-400/30">
                    {selectedCase.value}
                  </span>
                </div>
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {selectedCase.title}
                  </h3>
                  <p className="text-blue-200 text-lg drop-shadow-lg">
                    {selectedCase.client}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="px-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Client</h4>
                  <p className="text-blue-200">{selectedCase.client}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Project Value</h4>
                  <p className="text-green-400 font-bold text-xl">{selectedCase.value}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Duration</h4>
                  <p className="text-blue-200">{selectedCase.duration}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3 text-lg">Project Overview</h4>
                <p className="text-gray-300 leading-relaxed">{selectedCase.description}</p>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg flex items-center">
                    <span className="text-red-400 mr-2">⚠️</span>
                    Challenges
                  </h4>
                  <ul className="space-y-3">
                    {selectedCase.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg flex items-center">
                    <span className="text-green-400 mr-2">💡</span>
                    Our Solutions
                  </h4>
                  <ul className="space-y-3">
                    {selectedCase.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm leading-relaxed">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 text-lg flex items-center">
                  <span className="text-green-400 mr-2">🏆</span>
                  Results & Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCase.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white text-sm leading-relaxed">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg flex items-center">
                  <span className="text-blue-400 mr-2">🛠️</span>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm rounded-xl border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default CaseStudiesSection 