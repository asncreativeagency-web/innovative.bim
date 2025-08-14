import React from 'react'
import { useParallax } from '../hooks/use-parallax'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/use-scroll-animations'

interface Technology {
  name: string
  icon: string
  category: string
}

const TechnologiesSection: React.FC = () => {
  const technologies: Technology[] = [
    {
      name: 'Autodesk Revit',
      icon: '/Technologies Used/autodesk-revit transperent.png',
      category: 'BIM Software'
    },
    {
      name: 'AutoCAD',
      icon: '/Technologies Used/auto cad transparent.png',
      category: 'CAD Software'
    },
    {
      name: 'ArchiCAD',
      icon: '/Technologies Used/archicad transparent.png',
      category: 'Architecture'
    },
    {
      name: '3ds Max',
      icon: '/Technologies Used/3d_max transparent.jpg',
      category: '3D Modeling'
    },
    {
      name: 'SketchUp',
      icon: '/Technologies Used/sketch up transparent.png',
      category: '3D Design'
    },
    {
      name: 'Recap',
      icon: '/Technologies Used/recap transparent.png',
      category: 'Reality Capture'
    }
  ]

  // Parallax effects for different elements
  const headerParallax = useParallax({ speed: 0.4, direction: 'up' })
  const gridParallax = useParallax({ speed: 0.6, direction: 'up' })

  // Scroll-triggered animations
  const headerAnimation = useScrollAnimation({ 
    animationType: 'slideUp', 
    delay: 100, 
    duration: 800 
  })
  const technologiesAnimation = useStaggeredAnimation(technologies.length, 150)

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={headerAnimation.elementRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            ...headerAnimation.getAnimationStyle(),
            ...headerParallax.getTransformStyle()
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies We <span className="text-blue-400">Use</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted and loved by fast-growing companies worldwide
          </p>
        </div>
        
        <div 
          ref={gridParallax.elementRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          style={gridParallax.getTransformStyle()}
        >
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              ref={(el) => (technologiesAnimation.elementRefs.current[index] = el)}
              className="group flex flex-col items-center text-center"
              style={technologiesAnimation.getStaggeredStyle(index)}
            >
              <div className="w-40 h-40 mb-6 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {tech.name}
              </h3>
              <p className="text-blue-300 text-sm">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnologiesSection 