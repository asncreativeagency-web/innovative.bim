import React from 'react'

interface Technology {
  name: string
  icon: React.ReactNode
  category: string
}

const TechnologiesSection: React.FC = () => {
  const technologies: Technology[] = [
    {
      name: 'Revit',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 4.5L4 16V8l8-5.5z"/>
          <path d="M12 6L6 9v6l6 3 6-3V9l-6-3z"/>
          <path d="M12 8L8 10v4l4 2 4-2v-4l-4-2z"/>
        </svg>
      ),
      category: 'BIM Software'
    },
    {
      name: 'AutoCAD',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      category: 'CAD Software'
    },
    {
      name: 'Navisworks',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 4.5L4 16V8l8-5.5z"/>
          <path d="M8 10h8v2H8zm0 4h6v2H8z"/>
        </svg>
      ),
      category: 'Coordination'
    },
    {
      name: 'Tekla',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h8v2H7v-2z"/>
        </svg>
      ),
      category: 'Structural'
    },
    {
      name: 'ArchiCAD',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 4.5L4 16V8l8-5.5z"/>
          <path d="M12 6L8 9v6l4 3 4-3V9l-4-3z"/>
        </svg>
      ),
      category: 'Architecture'
    },
    {
      name: 'BIM 360',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      ),
      category: 'Collaboration'
    },
    {
      name: 'Dynamo',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 4.5L4 16V8l8-5.5z"/>
          <path d="M12 6L8 9v6l4 3 4-3V9l-4-3z"/>
          <path d="M12 8L10 9v4l2 1 2-1V9l-2-1z"/>
        </svg>
      ),
      category: 'Automation'
    },
    {
      name: 'Python',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
        </svg>
      ),
      category: 'Programming'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies We <span className="text-blue-400">Use</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted and loved by fast-growing companies worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center text-blue-400">
                {tech.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 text-center">
                {tech.name}
              </h3>
              <p className="text-blue-300 text-sm text-center">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection 