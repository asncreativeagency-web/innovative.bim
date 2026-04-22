import React from 'react'
import { motion } from 'framer-motion'
import ArcanaButton from './ArcanaButton'

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
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Hospitality & Hotel Projects',
    description: 'Coordinated BIM support for hotels, resorts, and hospitality facilities.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Food Service & Commercial Kitchen Facilities',
    description: 'Specialized BIM for kitchen layouts, equipment coordination, and installation-ready outputs.',
    featured: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01M9 5h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Renovation & Retrofit Projects',
    description: 'BIM support for existing structures including upgrades and modification works.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'As-Built & Scan to BIM Projects',
    description: 'Conversion of point cloud data into accurate as-built BIM models for existing conditions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'BIM Coordination & Clash Resolution',
    description: 'Multi-discipline coordination with clash detection and issue resolution workflows.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L1.98 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Construction Documentation (IFC)',
    description: 'Generation of IFC drawings and detailed documentation from coordinated BIM models.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Industrial & Complex Structures',
    description: 'BIM support for complex structural systems and large-scale industrial projects.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const ProjectsSection: React.FC = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background technical grid reinforcement */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tight">
              Project Experience Across <span className="text-blue-500">Global AEC & Food Service Projects</span>
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-blue-600 mx-auto mb-6 sm:mb-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Due to confidentiality and NDA requirements, detailed project information is not publicly displayed. We have supported multiple projects across architecture, structure, and food service BIM workflows.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projectHighlights.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/[0.02] border border-white/10 p-8 pt-12 transition-all duration-500 group-hover:bg-blue-600/[0.03] group-hover:border-blue-500/50">
                
                {/* Outlined Background Number */}
                <div className="absolute top-3 sm:top-4 right-4 sm:right-6 text-5xl sm:text-7xl font-black select-none pointer-events-none transition-all duration-700 opacity-5 group-hover:opacity-10 group-hover:-translate-y-2" style={{
                  WebkitTextStroke: '1px white',
                  color: 'transparent'
                }}>
                  {String(project.id).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-8 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300">
                    {project.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Geometric Decoration */}
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r border-b border-white/5 group-hover:border-blue-500/30 transition-colors duration-500" />
                  
                  {project.featured && (
                    <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest px-3 py-1 bg-blue-500/10 border border-blue-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Core Specialty
                    </div>
                  )}
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-blue-400 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-blue-400 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-blue-400 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-blue-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default ProjectsSection