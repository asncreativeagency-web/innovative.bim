import React from 'react'

interface ProjectHighlight {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  featured?: boolean
}

const projectHighlights: ProjectHighlight[] = [
  {
    id: 1,
    title: 'Commercial & Residential Developments',
    description: 'BIM modeling and coordination for multi-storey buildings and residential projects.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Hospitality & Hotel Projects',
    description: 'Coordinated BIM support for hotels, resorts, and hospitality facilities.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Food Service & Commercial Kitchen Facilities',
    description: 'Specialized BIM for kitchen layouts, equipment coordination, and installation-ready outputs.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01M9 5h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
    featured: true,
  },
  {
    id: 4,
    title: 'Renovation & Retrofit Projects',
    description: 'BIM support for existing structures including upgrades and modification works.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'As-Built & Scan to BIM Projects',
    description: 'Conversion of point cloud data into accurate as-built BIM models for existing conditions.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'BIM Coordination & Clash Resolution Projects',
    description: 'Multi-discipline coordination with clash detection and issue resolution workflows.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L1.98 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Construction Documentation (IFC) Projects',
    description: 'Generation of IFC drawings and detailed documentation from coordinated BIM models.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Industrial & Complex Structures',
    description: 'BIM support for complex structural systems and large-scale construction projects.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const ProjectsSection: React.FC = () => {
  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Project Experience Across <span className="text-blue-400">Global AEC & Food Service Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Due to confidentiality and NDA requirements, detailed project information is not publicly displayed. We have supported multiple projects across architecture, structure, and food service BIM workflows.
          </p>
        </div>

        {/* Project Highlights */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-blue-300 uppercase tracking-[0.2em] mb-10 text-center">
            Project Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectHighlights.map((project) => (
              <div
                key={project.id}
                className={`relative group bg-white/5 backdrop-blur-xl border rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${
                  project.featured
                    ? 'border-blue-400/40 ring-1 ring-blue-400/20'
                    : 'border-white/10 hover:border-blue-500/30'
                }`}
              >
                {/* Featured Star Badge */}
                {project.featured && (
                  <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg shadow-amber-500/30">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L1.98 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Specialty</span>
                  </div>
                )}

                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    project.featured 
                      ? 'bg-gradient-to-br from-blue-500/30 to-cyan-400/30 text-blue-300' 
                      : 'bg-blue-600/20 text-blue-400'
                  }`}>
                    {project.icon}
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                    {String(project.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Decorative bottom line */}
                <div className={`mt-5 h-0.5 rounded-full transition-all duration-500 ${
                  project.featured
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400 w-full'
                    : 'bg-gradient-to-r from-blue-500/50 to-transparent w-1/2 group-hover:w-full'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 relative group">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
              Have a Project That Needs <span className="text-blue-400">Coordinated BIM Delivery?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Let's support your project with construction-ready BIM modeling, coordination, and IFC documentation aligned with your workflow and timelines.
            </p>
            <p className="text-base text-gray-400 mb-12 max-w-2xl mx-auto">
              Flexible support based on your project scope, timeline, and BIM requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-600/40 relative z-10"
              >
                Request Project References →
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 relative z-10"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection