import React, { useState } from 'react'

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
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

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
      teamSize: '5 specialists'
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
      teamSize: '6 specialists'
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
      teamSize: '8 specialists'
    },
    {
      id: '2',
      title: '3D Plan View - Level 1',
      description: 'Detailed 3D plan view showing comprehensive floor layout with all building systems integrated.',
      category: 'BIM',
      image: '/Projects/BIM Projects/03_3D Plan View.jpg',
      details: 'Advanced 3D plan view demonstrating our ability to create detailed floor layouts with integrated building systems. This view shows comprehensive coordination between structural elements, MEP systems, and architectural features.',
      technologies: ['Revit', 'BIM 360', 'Dynamo', 'Navisworks'],
      duration: '8 months',
      teamSize: '6 specialists'
    },
    {
      id: '3',
      title: '3D Kitchen View',
      description: 'Specialized 3D kitchen design with detailed MEP coordination and custom cabinetry integration.',
      category: 'BIM',
      image: '/Projects/BIM Projects/05_3D Kitchen View.jpg',
      details: 'Detailed 3D kitchen view showcasing our expertise in specialized space design. The model includes comprehensive MEP coordination, custom cabinetry details, and precise equipment placement for optimal functionality.',
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'SketchUp'],
      duration: '6 months',
      teamSize: '4 specialists'
    },
    {
      id: '4',
      title: 'Sheet View - Plan',
      description: 'Professional construction documentation sheet with detailed plan views and specifications.',
      category: 'BIM',
      image: '/Projects/BIM Projects/06_Sheet view-plan.jpg',
      details: 'Professional construction documentation sheet demonstrating our expertise in creating detailed plan views. This sheet includes comprehensive annotations, dimensions, and specifications for construction teams.',
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'Bluebeam'],
      duration: '4 months',
      teamSize: '3 specialists'
    },
    {
      id: '5',
      title: 'Sheet View - Section',
      description: 'Detailed section view sheet showing building cross-sections with comprehensive annotations.',
      category: 'BIM',
      image: '/Projects/BIM Projects/07_Sheet view-Section.jpg',
      details: 'Detailed section view sheet showcasing our ability to create comprehensive building cross-sections. The sheet includes detailed annotations, material specifications, and construction details for accurate implementation.',
      technologies: ['Revit', 'AutoCAD', 'BIM 360', 'Bluebeam'],
      duration: '4 months',
      teamSize: '3 specialists'
    },
    {
      id: '6',
      title: 'Window Parametric Family',
      description: 'Custom parametric window family with adjustable parameters for various project requirements.',
      category: 'Parametric Family',
      image: '/Projects/Parametric Family_s/01_Window.jpg',
      details: 'Custom parametric window family demonstrating our expertise in creating flexible, reusable BIM components. The family includes adjustable parameters for width, height, materials, and performance specifications.',
      technologies: ['Revit', 'Dynamo', 'BIM 360', 'Family Editor'],
      duration: '3 months',
      teamSize: '2 specialists'
    },
    {
      id: '7',
      title: 'Structure Sample Model',
      description: 'Comprehensive structural model with detailed analysis and construction coordination.',
      category: 'Structure',
      image: '/Projects/Structure Projects/01_Structure sample model.jpg',
      details: 'Comprehensive structural model showcasing our expertise in structural engineering and BIM coordination. The model includes detailed structural analysis, construction sequencing, and coordination with architectural and MEP systems.',
      technologies: ['Revit', 'Tekla', 'Robot Structural Analysis', 'BIM 360'],
      duration: '10 months',
      teamSize: '7 specialists'
    },
    {
      id: '8',
      title: 'Advanced Structure Model',
      description: 'Complex structural system with innovative design solutions and advanced analysis.',
      category: 'Structure',
      image: '/Projects/Structure Projects/02_Structure sample model.jpg',
      details: 'Advanced structural model featuring innovative design solutions and complex structural systems. The project demonstrates our ability to handle challenging structural requirements while maintaining BIM coordination standards.',
      technologies: ['Revit', 'Tekla', 'Robot Structural Analysis', 'Dynamo'],
      duration: '14 months',
      teamSize: '9 specialists'
    }
  ]

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  const openProject = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our innovative BIM solutions that have transformed construction projects worldwide
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
              onClick={() => openProject(project)}
            >
              {/* Project Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-medium rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Details
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>⏱️ {project.duration}</span>
                    <span>👥 {project.teamSize}</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-600 transition-colors duration-300 bg-white rounded-full p-2 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Project Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-brand-500 text-white text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                    <p className="text-brand-500 font-medium">{selectedProject.duration}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Team Size</h4>
                    <p className="text-brand-500 font-medium">{selectedProject.teamSize}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                    <p className="text-brand-500 font-medium">{selectedProject.category}</p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-brand-500/10 text-brand-600 text-sm font-medium rounded-lg border border-brand-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-20 w-2 h-2 bg-brand-500 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-brand-500 rounded-full animate-ping delay-1000" />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-brand-400 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default ProjectsSection 