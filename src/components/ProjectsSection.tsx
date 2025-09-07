import React, { useState, useEffect, useRef } from 'react'

interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  details: string
  technologies: string[]
  duration: string
  teamSize: string
  icon: string
  features: string[]
  benefits: string[]
  categoryType: 'core' | 'advanced' | 'specialized'
}

const ProjectIconSvg: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case '🏗️': // BIM Projects
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
    case '🔧': // Parametric Family
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case '🏢': // Structure
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    default:
      return (
        <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: '1',
      title: 'Commercial Kitchen BIM Design',
      description: 'Specialized commercial kitchen design with comprehensive MEP coordination and custom equipment modeling.',
      category: 'Food Service BIM',
      image: '/Projects/BIM Projects/05_3D Kitchen View.jpg',
      details: 'This specialized commercial kitchen BIM project demonstrates our expertise in food service industry modeling. The project includes custom equipment Revit families, comprehensive MEP coordination, and detailed shop drawings for manufacturers and contractors.',
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'Custom Families'],
      duration: '6 months',
      teamSize: '5 specialists',
      icon: '🍽️',
      categoryType: 'specialized',
      features: [
        'Custom Equipment Revit Families',
        'Comprehensive MEP Coordination',
        'Detailed Shop Drawings',
        'Manufacturer-ready BIM Models',
        'Kitchen Layout Optimization'
      ],
      benefits: [
        'Enhanced kitchen functionality',
        'Improved equipment integration',
        'Reduced construction errors'
      ]
    },
    {
      id: '2',
      title: 'Heritage Building Scan-to-BIM',
      description: 'Advanced point cloud processing and as-built modeling for heritage building renovation and documentation.',
      category: 'Scan-to-BIM',
      image: '/Projects/BIM Projects/01_BIM sample model.jpg',
      details: 'This heritage building project showcases our scan-to-BIM expertise, converting point cloud data into detailed as-built models. The project demonstrates LOD 400-500 modeling capabilities for renovation planning and facility documentation.',
      technologies: ['Revit', 'Point Cloud Processing', 'BIM 360', 'AutoCAD'],
      duration: '8 months',
      teamSize: '6 specialists',
      icon: '📡',
      categoryType: 'advanced',
      features: [
        'Point Cloud to 3D Model Conversion',
        'As-Built Modeling (LOD 400-500)',
        'Heritage Documentation',
        'Renovation Planning',
        'Facility Management Models'
      ],
      benefits: [
        'Accurate existing condition modeling',
        'Reduced site visits',
        'Enhanced renovation planning'
      ]
    },
    {
      id: '3',
      title: 'BIM Sample Model',
      description: 'Comprehensive BIM model showcasing advanced 3D coordination and detailed building information modeling.',
      category: 'BIM',
      image: '/Projects/BIM Projects/01_BIM sample model.jpg',
      details: 'This comprehensive BIM model demonstrates our expertise in creating detailed 3D building information models. The project showcases advanced coordination between architectural, structural, and MEP systems, achieving optimal clash detection and construction sequencing.',
      technologies: ['Revit', 'Navisworks', 'BIM 360', 'AutoCAD'],
      duration: '12 months',
      teamSize: '8 specialists',
      icon: '🏗️',
      categoryType: 'core',
      features: [
        'Multi-discipline Coordination',
        'Clash Detection & Resolution',
        'Construction Sequencing',
        'Advanced 3D Modeling',
        'Comprehensive Documentation'
      ],
      benefits: [
        'Reduced construction errors by 90%',
        'Improved project coordination',
        'Enhanced visualization'
      ]
    },
    {
      id: '4',
      title: '3D Plan View - Level 1',
      description: 'Detailed 3D plan view showing comprehensive floor layout with all building systems integrated.',
      category: 'BIM',
      image: '/Projects/BIM Projects/03_3D Plan View.jpg',
      details: 'Advanced 3D plan view demonstrating our ability to create detailed floor layouts with integrated building systems. This view shows comprehensive coordination between structural elements, MEP systems, and architectural features.',
      technologies: ['Revit', 'BIM 360', 'Dynamo', 'Navisworks'],
      duration: '8 months',
      teamSize: '6 specialists',
      icon: '🏗️',
      categoryType: 'core',
      features: [
        'Detailed Floor Layouts',
        'Integrated Building Systems',
        'Structural Coordination',
        'MEP System Integration',
        'Architectural Features'
      ],
      benefits: [
        'Clear spatial understanding',
        'Improved system coordination',
        'Enhanced project visualization'
      ]
    },
    {
      id: '5',
      title: '3D Kitchen View',
      description: 'Specialized 3D kitchen design with detailed MEP coordination and custom cabinetry integration.',
      category: 'BIM',
      image: '/Projects/BIM Projects/05_3D Kitchen View.jpg',
      details: 'Detailed 3D kitchen view showcasing our expertise in specialized space design. The model includes comprehensive MEP coordination, custom cabinetry details, and precise equipment placement for optimal functionality.',
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'SketchUp'],
      duration: '6 months',
      teamSize: '4 specialists',
      icon: '🍽️',
      categoryType: 'specialized',
      features: [
        'Specialized Space Design',
        'MEP Coordination',
        'Custom Cabinetry Details',
        'Equipment Placement',
        'Functionality Optimization'
      ],
      benefits: [
        'Optimal kitchen functionality',
        'Precise equipment integration',
        'Enhanced user experience'
      ]
    },
    {
      id: '6',
      title: 'Sheet View - Plan',
      description: 'Professional construction documentation sheet with detailed plan views and specifications.',
      category: 'BIM',
      image: '/Projects/BIM Projects/06_Sheet view-plan.jpg',
      details: 'Professional construction documentation sheet demonstrating our expertise in creating detailed plan views. This sheet includes comprehensive annotations, dimensions, and specifications for construction teams.',
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'Bluebeam'],
      duration: '4 months',
      teamSize: '3 specialists',
      icon: '🏗️',
      categoryType: 'core',
      features: [
        'Professional Documentation',
        'Detailed Plan Views',
        'Comprehensive Annotations',
        'Construction Specifications',
        'Quality Control'
      ],
      benefits: [
        'Clear construction guidance',
        'Reduced interpretation errors',
        'Improved project efficiency'
      ]
    },
    {
      id: '7',
      title: 'Sheet View - Section',
      description: 'Detailed section view sheet showing building cross-sections with comprehensive annotations.',
      category: 'BIM',
      image: '/Projects/BIM Projects/07_Sheet view-Section.jpg',
      details: 'Detailed section view sheet showcasing our ability to create comprehensive building cross-sections. The sheet includes detailed annotations, material specifications, and construction details for accurate implementation.',
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'Bluebeam'],
      duration: '4 months',
      teamSize: '3 specialists',
      icon: '🏗️',
      categoryType: 'core',
      features: [
        'Building Cross-Sections',
        'Detailed Annotations',
        'Material Specifications',
        'Construction Details',
        'Implementation Guidance'
      ],
      benefits: [
        'Accurate construction details',
        'Clear material specifications',
        'Improved implementation accuracy'
      ]
    },
    {
      id: '8',
      title: 'Window Parametric Family',
      description: 'Custom parametric window family with adjustable parameters for various project requirements.',
      category: 'Parametric Family',
      image: '/Projects/Parametric Family_s/01_Window.jpg',
      details: 'Custom parametric window family demonstrating our expertise in creating flexible, reusable BIM components. The family includes adjustable parameters for width, height, materials, and performance specifications.',
      technologies: ['Revit', 'Dynamo', 'BIM 360', 'Family Editor'],
      duration: '3 months',
      teamSize: '2 specialists',
      icon: '🔧',
      categoryType: 'advanced',
      features: [
        'Flexible BIM Components',
        'Adjustable Parameters',
        'Reusable Families',
        'Performance Specifications',
        'Custom Development'
      ],
      benefits: [
        'Increased design flexibility',
        'Improved project consistency',
        'Enhanced reusability'
      ]
    },
    {
      id: '9',
      title: 'Structure Sample Model',
      description: 'Comprehensive structural model with detailed analysis and construction coordination.',
      category: 'Structure',
      image: '/Projects/Structure Projects/01_Structure sample model.jpg',
      details: 'Comprehensive structural model showcasing our expertise in structural engineering and BIM coordination. The model includes detailed structural analysis, construction sequencing, and coordination with architectural and MEP systems.',
      technologies: ['Revit', 'Tekla', 'Robot Structural Analysis', 'BIM 360'],
      duration: '10 months',
      teamSize: '7 specialists',
      icon: '🏢',
      categoryType: 'core',
      features: [
        'Structural Engineering',
        'BIM Coordination',
        'Structural Analysis',
        'Construction Sequencing',
        'Multi-discipline Integration'
      ],
      benefits: [
        'Enhanced structural integrity',
        'Improved construction coordination',
        'Reduced structural conflicts'
      ]
    },
    {
      id: '10',
      title: 'Advanced Structure Model',
      description: 'Complex structural system with innovative design solutions and advanced analysis.',
      category: 'Structure',
      image: '/Projects/Structure Projects/02_Structure sample model.jpg',
      details: 'Advanced structural model featuring innovative design solutions and complex structural systems. The project demonstrates our ability to handle challenging structural requirements while maintaining BIM coordination standards.',
      technologies: ['Revit', 'Tekla', 'Robot Structural Analysis', 'Dynamo'],
      duration: '14 months',
      teamSize: '9 specialists',
      icon: '🏢',
      categoryType: 'advanced',
      features: [
        'Innovative Design Solutions',
        'Complex Structural Systems',
        'Advanced Analysis',
        'BIM Coordination Standards',
        'Challenging Requirements'
      ],
      benefits: [
        'Innovative structural solutions',
        'Advanced engineering capabilities',
        'Enhanced project complexity handling'
      ]
    }
  ]

  const getCategoryColor = (categoryType: string) => {
    switch (categoryType) {
      case 'core': return 'from-blue-500 to-cyan-400'
      case 'advanced': return 'from-purple-500 to-pink-400'
      case 'specialized': return 'from-orange-500 to-red-400'
      default: return 'from-gray-500 to-gray-400'
    }
  }

  const getCategoryBadge = (categoryType: string) => {
    switch (categoryType) {
      case 'core': return 'Core Project'
      case 'advanced': return 'Advanced'
      case 'specialized': return 'Specialized'
      default: return 'Project'
    }
  }

  // Scroll detection for project highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return

      const scrollTop = window.scrollY
      const sectionTop = projectsRef.current.offsetTop
      const sectionHeight = projectsRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate which project should be active based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, (scrollTop - sectionTop + viewportHeight * 0.3) / (sectionHeight * 0.7)))
      const newIndex = Math.floor(scrollProgress * projects.length)
      const clampedIndex = Math.max(0, Math.min(projects.length - 1, newIndex))

      if (clampedIndex !== activeProjectIndex) {
        setActiveProjectIndex(clampedIndex)
        setSelectedProject(projects[clampedIndex])
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeProjectIndex])

  // Initialize with first project
  useEffect(() => {
    setSelectedProject(projects[0])
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

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
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            Discover our innovative BIM solutions that have transformed construction projects worldwide with precision and excellence.
          </p>
        </div>

        {/* Two Column Layout */}
        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[80vh]">
          {/* Left Column - Projects List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Our Projects</h3>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project)
                    setActiveProjectIndex(index)
                  }}
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current)
                    }
                    setHoveredProjectIndex(index)
                    setSelectedProject(project)
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setHoveredProjectIndex(null)
                      setSelectedProject(projects[activeProjectIndex])
                    }, 100)
                  }}
                  className={`group cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                    activeProjectIndex === index 
                      ? 'bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20' 
                      : hoveredProjectIndex === index
                      ? 'bg-blue-500/10 border-l-4 border-blue-300 shadow-md shadow-blue-500/10'
                      : 'bg-white/5 hover:bg-white/10 border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Project Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeProjectIndex === index 
                          ? 'bg-blue-500/30' 
                          : hoveredProjectIndex === index
                          ? 'bg-blue-500/20'
                          : 'bg-white/10 group-hover:bg-white/20'
                      }`}>
                        <ProjectIconSvg name={project.icon} />
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                        activeProjectIndex === index 
                          ? 'text-blue-400' 
                          : hoveredProjectIndex === index
                          ? 'text-blue-300'
                          : 'text-white group-hover:text-blue-300'
                      }`}>
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          activeProjectIndex === index 
                            ? 'bg-blue-500/30 text-blue-300' 
                            : hoveredProjectIndex === index
                            ? 'bg-blue-500/20 text-blue-200'
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {getCategoryBadge(project.categoryType)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Active/Hover Indicator */}
                    {(activeProjectIndex === index || hoveredProjectIndex === index) && (
                      <div className="flex-shrink-0">
                        <div className={`w-2 h-2 rounded-full ${
                          activeProjectIndex === index 
                            ? 'bg-blue-400 animate-pulse' 
                            : 'bg-blue-300'
                        }`}></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div ref={detailsRef} className="lg:sticky lg:top-20">
            {selectedProject && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 h-fit transition-all duration-500 ease-in-out">
                {/* Project Header */}
                <div className="mb-6 animate-fadeIn">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                      <ProjectIconSvg name={selectedProject.icon} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${getCategoryColor(selectedProject.categoryType)} text-white`}>
                        {getCategoryBadge(selectedProject.categoryType)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                {/* Project Image */}
                <div className="mb-6">
                  <div className="relative h-80 sm:h-96 lg:h-[400px] rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-xs font-medium rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Project Benefits</h4>
                  <div className="space-y-3">
                    {selectedProject.benefits.map((benefit, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="text-gray-200 text-sm">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Info */}
                <div className="mb-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h5 className="text-blue-400 font-semibold text-sm mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>


                {/* CTA Button */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                >
                  Start Similar Project
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our BIM experts help you achieve the same level of excellence and innovation in your construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                Get Quote
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection 