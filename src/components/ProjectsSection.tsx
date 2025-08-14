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
      title: 'Downtown Office Complex',
      description: 'A 25-story commercial building with advanced MEP coordination and sustainable design features.',
      category: 'Commercial',
      image: '/project-1.jpg',
      details: 'This state-of-the-art office complex features advanced BIM coordination across all disciplines, including structural, MEP, and architectural systems. The project utilized LOD 400 models for construction coordination and achieved 30% reduction in construction time through advanced clash detection.',
      technologies: ['Revit', 'Navisworks', 'BIM 360', 'Dynamo'],
      duration: '18 months',
      teamSize: '12 specialists'
    },
    {
      id: '2',
      title: 'Healthcare Facility',
      description: 'Modern hospital with complex medical equipment integration and strict compliance requirements.',
      category: 'Healthcare',
      image: '/project-2.jpg',
      details: 'A comprehensive healthcare facility project requiring meticulous BIM coordination for medical equipment, HVAC systems, and life safety systems. Achieved 99.9% clash-free coordination and reduced RFIs by 60%.',
      technologies: ['Revit', 'AutoCAD', 'Navisworks', 'BIM 360'],
      duration: '24 months',
      teamSize: '15 specialists'
    },
    {
      id: '3',
      title: 'Residential Tower',
      description: 'Luxury residential development with premium finishes and advanced structural systems.',
      category: 'Residential',
      image: '/project-3.jpg',
      details: 'High-end residential tower featuring complex structural systems and premium architectural details. BIM models included detailed LOD 500 specifications for custom millwork and specialized finishes.',
      technologies: ['Revit', 'Tekla', 'ArchiCAD', 'BIM 360'],
      duration: '20 months',
      teamSize: '10 specialists'
    },
    {
      id: '4',
      title: 'Industrial Warehouse',
      description: 'Large-scale industrial facility with specialized equipment and logistics optimization.',
      category: 'Industrial',
      image: '/project-4.jpg',
      details: 'Massive industrial warehouse requiring coordination of heavy machinery, specialized HVAC systems, and complex structural elements. Achieved optimal space utilization through advanced BIM analysis.',
      technologies: ['Revit', 'AutoCAD', 'Navisworks', 'Python'],
      duration: '16 months',
      teamSize: '8 specialists'
    },
    {
      id: '5',
      title: 'Educational Campus',
      description: 'Multi-building educational complex with modern learning spaces and sustainable features.',
      category: 'Education',
      image: '/project-5.jpg',
      details: 'Multi-building campus project featuring sustainable design elements, advanced acoustics, and flexible learning spaces. BIM coordination ensured seamless integration of all building systems.',
      technologies: ['Revit', 'ArchiCAD', 'BIM 360', 'Dynamo'],
      duration: '22 months',
      teamSize: '14 specialists'
    },
    {
      id: '6',
      title: 'Mixed-Use Development',
      description: 'Urban development combining retail, residential, and office spaces in a cohesive design.',
      category: 'Mixed-Use',
      image: '/project-6.jpg',
      details: 'Complex mixed-use development requiring coordination of multiple building types and functions. BIM models facilitated seamless integration of retail, residential, and office spaces.',
      technologies: ['Revit', 'Navisworks', 'BIM 360', 'AutoCAD'],
      duration: '26 months',
      teamSize: '18 specialists'
    }
  ]

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  const openProject = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-500/10 text-brand-600 text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-brand-500 rounded-full mr-2"></span>
            Our Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-brand-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative BIM solutions that have transformed construction projects worldwide
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'text-gray-600 hover:text-brand-500 hover:bg-gray-50'
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
              <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-500 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/20">
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
                    <span className="px-3 py-1 bg-brand-500 text-white text-xs font-medium rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white text-brand-500 px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Details
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>⏱️ {project.duration}</span>
                    <span>👥 {project.teamSize}</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/0 via-brand-500/5 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-medium rounded-2xl hover:bg-brand-600 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/25 transform hover:-translate-y-1">
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
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