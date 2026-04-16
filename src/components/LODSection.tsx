import React from 'react'

interface LODCard {
  level: string
  title: string
  description: string
  image: string
}

const LODSection: React.FC = () => {
  const lodCards: LODCard[] = [
    {
      level: 'LOD 100',
      title: 'Conceptual',
      description: 'Basic massing and conceptual geometry for early feasibility.',
      image: '/LOD/LOD/LOD 100.png'
    },
    {
      level: 'LOD 200',
      title: 'Schematic',
      description: 'Generalized elements with approximate quantities and design development.',
      image: '/LOD/LOD/LOD 200.png'
    },
    {
      level: 'LOD 300',
      title: 'Detailed Design',
      description: 'Accurate geometry and quantities suitable for multi-discipline coordination.',
      image: '/LOD/LOD/LOD 300.png'
    },
    {
      level: 'LOD 350',
      title: 'Construction',
      description: 'Detailed elements with interfaces for coordination and on-site assembly.',
      image: '/LOD/LOD/LOD 350.png'
    },
    {
      level: 'LOD 400',
      title: 'Fabrication',
      description: 'High-precision models for shop drawings, fabrication, and installation.',
      image: '/LOD/LOD/LOD 400.png'
    },
    {
      level: 'LOD 500',
      title: 'As-Built ⭐',
      description: 'Verified models based on site data and scan-to-BIM accurate conditions.',
      image: '/LOD/LOD/LOD sample.jpg'
    }
  ]

  return (
    <section id="lod" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Levels of <span className="text-blue-400">Development (LOD)</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We deliver BIM models from concept to construction-ready and as-built levels, aligned with project requirements and coordination needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-2">
          {lodCards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-[#0D1528]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-2 transition-all duration-700 hover:bg-[#111A30] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] hover:-translate-y-2"
            >
              {/* Image Vessel */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900/50 to-transparent">
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-black rounded-lg shadow-lg uppercase tracking-widest border border-white/10">
                    {card.level}
                  </span>
                </div>
                
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-30" />
              </div>
 
              <div className="py-6 px-4 text-center">
                <h3 className="text-lg font-black text-white mb-2 transition-colors duration-500 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>
 
              {/* Bottom accent glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LODSection
