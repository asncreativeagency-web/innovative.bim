import React, { useEffect, useState } from 'react'

const technologies = [
  {
    name: 'Revit',
    icon: '/logos/Revit_log-removebg-preview_white.png',
    category: 'BIM Software'
  },
  {
    name: 'AutoCAD',
    icon: '/logos/AutoCad_new_logo.svg-removebg-preview_white.png',
    category: 'CAD Software'
  },
  {
    name: 'Navisworks',
    icon: '/logos/logo-navisworks-removebg-preview_white.png',
    category: 'Coordination'
  },
  {
    name: 'Forma',
    icon: '/logos/autodesk-forma-badge-removebg-preview.png',
    category: 'BIM Planning'
  },
  {
    name: 'ReCap',
    icon: '/logos/Autodesk-logo-removebg-preview_white.png',
    category: 'Reality Capture'
  },
  {
    name: 'TruView',
    icon: '/logos/truview_new.png', // This is 1667469363593-removebg-preview.png
    category: 'Point Cloud',
    cropEdges: true
  },
  {
    name: 'Enscape',
    icon: '/logos/enscape.png',
    category: 'Visualization'
  }
]

const TechSlider: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
      .animate-scroll {
        animation: scroll 15s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
      .tech-logo {
        filter: brightness(1.1);
        transition: all 0.3s ease;
      }
      .tech-logo:hover {
        filter: brightness(1.3) scale(1.05);
      }
      .crop-marks-removal {
        clip-path: inset(8% 8% 8% 8%);
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="py-20 bg-[#0A0F1C]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Technologies & <span className="text-blue-400">Tools We Work With</span>
          </h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Industry-standard BIM tools used for modeling, coordination, and project delivery.
          </p>
        </div>
        <div className="relative overflow-hidden py-6">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0F1C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0F1C] to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center animate-scroll" style={{ width: 'max-content' }}>
            {/* Triple the logos for seamless infinite scroll */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center mx-10 sm:mx-12 md:mx-20 flex-shrink-0 cursor-pointer group/logo"
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52 flex items-center justify-center transition-all duration-300 overflow-hidden">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'text-blue-400 font-bold text-center text-sm px-2 break-words uppercase tracking-widest';
                        fallback.innerText = tech.name;
                        parent.appendChild(fallback);
                      }
                    }}
                    className={`w-full h-full object-contain tech-logo group-hover/logo:scale-110 transition-transform duration-300 ${tech.cropEdges ? 'crop-marks-removal scale-[1.15]' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechSlider
