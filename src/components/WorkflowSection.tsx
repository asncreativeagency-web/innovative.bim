import React, { useEffect, useRef, useState } from 'react'

const workflowSteps = [
  {
    id: 1,
    title: 'Project Input & Design Review',
    description: 'We begin by reviewing design intent, consultant drawings, and project requirements to establish a clear BIM execution approach.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'BIM Model Development',
    description: 'Development of architectural, structural, and food service BIM models aligned with design inputs and required LOD levels.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Multi-Discipline Coordination',
    description: 'Integration of all disciplines into a coordinated BIM environment, ensuring alignment across architecture, structure, and specialized systems.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Clash Detection & Issue Identification',
    description: 'Identification of clashes and coordination issues using BIM tools to prevent conflicts during construction.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    iconColor: 'text-amber-400',
    accentColor: 'from-amber-500/10 to-orange-500/10',
    accentHover: 'group-hover:from-amber-500/20 group-hover:to-orange-500/20',
  },
  {
    id: 5,
    title: 'Issue Resolution & Model Updates',
    description: 'Collaboration with stakeholders to resolve issues and continuously update the BIM model to maintain accuracy.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Model Finalization (Coordinated BIM)',
    description: 'Finalization of a fully coordinated, construction-ready BIM model ready for documentation and execution.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconColor: 'text-green-400',
    accentColor: 'from-green-500/10 to-emerald-500/10',
    accentHover: 'group-hover:from-green-500/20 group-hover:to-emerald-500/20',
  },
  {
    id: 7,
    title: 'IFC Drawings & Deliverables',
    description: 'Extraction of construction documentation including plans, sections, elevations, MEP rough-in reference drawings, isometric views, and shop drawings directly from the coordinated BIM model.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Construction-Ready Delivery',
    description: 'Delivery of a fully coordinated BIM model along with IFC drawings and supporting documentation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
]

const WorkflowSection: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'))
            if (!isNaN(index)) {
              // Stagger the appearance
              setTimeout(() => {
                setVisibleSteps((prev) => new Set(prev).add(index))
              }, index * 120)
            }
          }
        })
      },
      { threshold: 0.15 }
    )

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])



  return (
    <section id="workflow" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-blue-400">BIM Delivery Workflow</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A structured approach to BIM modeling, coordination, and construction-ready delivery, aligned with real project workflows across AEC and food service projects.
          </p>
        </div>

        {/* Workflow Steps - Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-7 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent z-0" />

          <div className="space-y-4 sm:space-y-6">
            {workflowSteps.map((step, index) => {
              const isVisible = visibleSteps.has(index)
              const isHovered = hoveredStep === index
              const iconColor = step.iconColor || 'text-blue-400'
              const accentColor = step.accentColor || 'from-blue-500/10 to-cyan-500/10'
              const accentHover = step.accentHover || 'group-hover:from-blue-500/20 group-hover:to-cyan-500/20'

              return (
                <div
                  key={step.id}
                  ref={(el) => { stepsRef.current[index] = el }}
                  data-step-index={index}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative flex items-start gap-6 sm:gap-8 group cursor-default transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-[-30px]'
                  }`}
                >
                  {/* Step Number Circle on the line */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 border shadow-lg ${
                        isHovered
                          ? 'bg-blue-600 border-blue-400/60 sm:scale-110 shadow-blue-500/40'
                          : 'bg-[#0A0F1C] border-white/10'
                      }`}
                    >
                      <div className={`transition-colors duration-300 scale-75 sm:scale-100 ${isHovered ? 'text-white' : 'text-gray-500'}`}>
                        {step.icon}
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div
                      className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all duration-300 z-20 ${
                        isHovered
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/40'
                          : 'bg-white/10 text-gray-400 border border-white/10'
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div
                    className={`flex-1 rounded-2xl p-5 sm:p-8 transition-all duration-500 border ${
                      isHovered
                        ? 'bg-blue-600/10 border-blue-400/40 shadow-xl shadow-blue-500/10'
                        : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06]'
                    }`}
                  >
                    <h3
                      className={`text-base sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                        isHovered ? 'text-blue-300' : 'text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-400 leading-relaxed transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


      </div>
    </section>
  )
}

export default WorkflowSection
