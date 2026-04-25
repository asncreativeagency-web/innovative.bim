import React, { useEffect, useRef, useState } from 'react'

import ArcanaButton from '../common/ArcanaButton'

const AboutSection: React.FC = () => {

	const [currentTechIndex, setCurrentTechIndex] = useState(0)

	// Custom CSS animations
	useEffect(() => {
		const style = document.createElement('style')
		style.textContent = `
			@keyframes float {
				0%, 100% { transform: translateY(0px); }
				50% { transform: translateY(-10px); }
			}
			.animate-float {
				animation: float 3s ease-in-out infinite;
			}
			@keyframes slide-up {
				from { opacity: 0; transform: translateY(30px); }
				to { opacity: 1; transform: translateY(0); }
			}

		`
		document.head.appendChild(style)
		
		return () => {
			document.head.removeChild(style)
		}
	}, [])











	return (
		    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Delivering coordinated, construction-ready BIM solutions across architecture, structure, and specialized food service projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Who We Are */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 hover:bg-white/10 transition-all duration-500 group">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center group-hover:text-blue-400 transition-colors">
              <span className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 sm:mr-5 border border-blue-500/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Who We Are
            </h3>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-blue-400 font-bold">Innovative BIM Services</span> focuses on delivering high-quality BIM modeling and coordination aligned with real construction workflows.
              </p>
              <p>
                With experience across architecture, structure, scan-to-BIM (as-built), and food service projects, we support contractors and consultants in developing accurate, coordinated models ready for execution.
              </p>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 hover:bg-white/10 transition-all duration-500 group">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center group-hover:text-amber-400 transition-colors">
              <span className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600/20 rounded-xl flex items-center justify-center mr-4 sm:mr-5 border border-amber-500/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Why Work With Us
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              {[
                'Construction-ready BIM delivery approach',
                'Strong coordination and issue resolution focus',
                'Experience across AEC and food service projects',
                'Flexible and scalable project support'
              ].map((bullet, i) => (
                <li key={i} className="flex items-center space-x-3 sm:space-x-5 text-base sm:text-lg text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Approach */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 to-transparent backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center group transition-all duration-700 hover:bg-white/5">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-6 sm:mb-8">
              Our <span className="text-blue-400">Approach</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-2xl md:text-3xl font-medium text-blue-100 mb-6 sm:mb-8 italic leading-snug">
                "We focus on delivering BIM that works on site — not just on screen."
              </p>
              <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                From model development to coordination and IFC delivery, our approach is built around reducing site issues, improving collaboration, and ensuring smooth project execution.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-700" />
        </div>

        <div className="mt-12 text-center px-4">
          <p className="text-lg sm:text-2xl font-bold text-blue-400/90 mb-8 sm:mb-10 tracking-tight">
            Supporting contractors, consultants, and food service specialists across global projects.
          </p>
          <ArcanaButton 
            primary 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto !px-10 sm:!px-16 !py-6 sm:!py-8 !text-base sm:!text-xl !font-black"
          >
            Let's Work Together
          </ArcanaButton>
        </div>



      </div>
    </div>
	)
}

export default AboutSection