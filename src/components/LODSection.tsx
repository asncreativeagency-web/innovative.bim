import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LODLevel {
  level: string
  title: string
  description: string
  position: string // CSS background position
}

const LODSection: React.FC = () => {
  const [activeDiscipline, setActiveDiscipline] = useState<'architecture' | 'structure' | 'kitchen'>('architecture')

  const disciplines = [
    { id: 'architecture', label: 'Architecture', image: '/slideshow-images/2.lod window 1.png' },
    { id: 'structure', label: 'Structure', image: '/slideshow-images/2.lod beam 2.png' },
    { id: 'kitchen', label: 'Food Service', image: '/slideshow-images/3.lod kitchen 3.png' }
  ]

  const lodLevels: LODLevel[] = [
    {
      level: 'LOD 100',
      title: 'Conceptual',
      description: 'Basic massing and conceptual geometry for early feasibility.',
      position: '0% 0%'
    },
    {
      level: 'LOD 200',
      title: 'Schematic',
      description: 'Generalized elements with approximate quantities and design development.',
      position: '50% 0%'
    },
    {
      level: 'LOD 300',
      title: 'Detailed Design',
      description: 'Accurate geometry and quantities suitable for multi-discipline coordination.',
      position: '100% 0%'
    },
    {
      level: 'LOD 350',
      title: 'Construction',
      description: 'Detailed elements with interfaces for coordination and on-site assembly.',
      position: '0% 100%'
    },
    {
      level: 'LOD 400',
      title: 'Fabrication',
      description: 'High-precision models for shop drawings, fabrication, and installation.',
      position: '50% 100%'
    },
    {
      level: 'LOD 500',
      title: 'As-Built',
      description: 'Verified models based on site data and scan-to-BIM accurate conditions.',
      position: '100% 100%'
    }
  ]

  const activeImage = disciplines.find(d => d.id === activeDiscipline)?.image || ''

  return (
    <section id="lod" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Levels of <span className="text-blue-400">Development (LOD)</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            We deliver BIM models from concept to construction-ready and as-built levels, aligned with project requirements and coordination needs.
          </motion.p>

          {/* Discipline Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {disciplines.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDiscipline(d.id as any)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 border-2 ${
                  activeDiscipline === d.id
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {lodLevels.map((lod, index) => (
              <motion.div 
                key={`${activeDiscipline}-${lod.level}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-[#0D1528]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-4 transition-all duration-700 hover:bg-[#111A30] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2"
              >
                {/* Image Vessel with CSS Cropping */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-6">
                  <div 
                    className="w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${activeImage}")`,
                      backgroundSize: '300% 200%',
                      backgroundPosition: lod.position,
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/40 via-transparent to-transparent" />
                </div>
   
                <div className="px-2 pb-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                    {lod.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {lod.description}
                  </p>
                </div>
   
                {/* Bottom accent glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default LODSection
