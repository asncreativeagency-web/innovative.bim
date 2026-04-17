import React, { useEffect, useRef, useState } from 'react'

import ArcanaButton from './ArcanaButton'

const AboutSection: React.FC = () => {
	const workflowRef = useRef<HTMLDivElement>(null)
	const [currentTechIndex, setCurrentTechIndex] = useState(0)

	// Custom CSS animations
	useEffect(() => {
		const style = document.createElement('style')
		style.textContent = `
			@keyframes float {
				0%, 100% { transform: translateY(0px); }
				50% { transform: translateY(-10px); }
			}
			@keyframes scroll {
				0% { transform: translateX(0); }
				100% { transform: translateX(-33.333%); }
			}
			.animate-float {
				animation: float 3s ease-in-out infinite;
			}
			.animate-scroll {
				animation: scroll 10s linear infinite;
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
			@keyframes slide-up {
				from { opacity: 0; transform: translateY(30px); }
				to { opacity: 1; transform: translateY(0); }
			}
			.workflow-step {
				opacity: 0;
			}
			.animate-workflow-step {
				animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
			}
		`
		document.head.appendChild(style)
		
		return () => {
			document.head.removeChild(style)
		}
	}, [])

	const workflowSteps = [
		{ id: 1, title: 'Client Inputs', description: 'Requirements gathering and project scope definition' },
		{ id: 2, title: 'Review', description: 'Analysis and feasibility assessment' },
		{ id: 3, title: 'Planning', description: 'Strategic planning and resource allocation' },
		{ id: 4, title: 'Production', description: 'BIM modeling and development' },
		{ id: 5, title: 'Quality Check', description: 'Comprehensive review and validation' },
		{ id: 6, title: 'Output', description: 'Final deliverables and documentation' },
		{ id: 7, title: 'Feedback & Updates', description: 'Iterative improvements and client collaboration' }
	]


	const technologies = [
		{
			name: 'Revit',
			icon: '/logos/revit_white.png',
			category: 'BIM Software'
		},
		{
			name: 'Navisworks',
			icon: '/logos/navisworks_white.png',
			category: 'Coordination'
		},
		{
			name: 'AutoCAD',
			icon: '/logos/autocad_white.png',
			category: 'CAD Software'
		},
		{
			name: 'BIM 360',
			icon: '/logos/BIM360_white.png',
			category: 'Collaboration'
		},
		{
			name: 'DWG TrueView',
			icon: '/logos/dwg_trueview_white.png',
			category: 'Point Cloud',
			scale: 1.5
		},
		{
			name: 'Autodesk',
			icon: '/logos/autodesk_white.png',
			category: 'Ecosystem'
		}
	]

	const WorkflowIcon: React.FC<{ id: number }> = ({ id }) => {
		switch (id) {
			case 1:
				return (
					<svg className="w-8 h-8 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
				)
			case 2:
				return (
					<svg className="w-8 h-8 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				)
			case 3:
				return (
					<svg className="w-8 h-8 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
					</svg>
				)
			case 4:
				return (
					<svg className="w-8 h-8 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
					</svg>
				)
			case 5:
				return (
					<svg className="w-8 h-8 mx-auto text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				)
			case 6:
				return (
					<svg className="w-8 h-8 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
					</svg>
				)
			default:
				return (
					<svg className="w-8 h-8 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
					</svg>
				)
		}
	}


	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-workflow-step')
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (workflowRef.current) {
			const steps = workflowRef.current.querySelectorAll('.workflow-step')
			steps.forEach((step) => observer.observe(step))
		}

		return () => observer.disconnect()
	}, [])


	return (
		    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Delivering coordinated, construction-ready BIM solutions across architecture, structure, and specialized food service projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Who We Are */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 hover:bg-white/10 transition-all duration-500 group">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center group-hover:text-blue-400 transition-colors">
              <span className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-5 border border-blue-500/30">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Who We Are
            </h3>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-blue-400 font-bold">Innovative BIM Services</span> focuses on delivering high-quality BIM modeling and coordination aligned with real construction workflows.
              </p>
              <p>
                With experience across architecture, structure, scan-to-BIM (as-built), and food service projects, we support contractors and consultants in developing accurate, coordinated models ready for execution.
              </p>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 hover:bg-white/10 transition-all duration-500 group">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center group-hover:text-amber-400 transition-colors">
              <span className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center mr-5 border border-amber-500/30">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Why Work With Us
            </h3>
            <ul className="space-y-6">
              {[
                'Construction-ready BIM delivery approach',
                'Strong coordination and issue resolution focus',
                'Experience across AEC and food service projects',
                'Flexible and scalable project support'
              ].map((bullet, i) => (
                <li key={i} className="flex items-center space-x-5 text-lg text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 to-transparent backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-16 text-center group transition-all duration-700 hover:bg-white/5">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
              Our <span className="text-blue-400">Approach</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-medium text-blue-100 mb-8 italic leading-snug">
                "We focus on delivering BIM that works on site — not just on screen."
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                From model development to coordination and IFC delivery, our approach is built around reducing site issues, improving collaboration, and ensuring smooth project execution.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-700" />
        </div>

        {/* Missing line and button from screenshot */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-bold text-blue-400/90 mb-10 tracking-tight">
            Supporting contractors, consultants, and food service specialists across global projects.
          </p>
          <ArcanaButton 
            primary 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="!px-16 !py-8 !text-xl !font-black"
          >
            Let's Work Together
          </ArcanaButton>
        </div>

        {/* Our BIM Delivery Workflow */}
        <div className="mt-40 mb-40" ref={workflowRef}>
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase italic tracking-tighter">
              BIM Delivery <span className="text-blue-500 not-italic">Workflow</span>
            </h3>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto mb-10 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <p className="text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              A precise, data-driven methodology engineered for <span className="text-white font-medium">zero-clash delivery</span> and construction readiness.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {workflowSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`workflow-step group relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-10 bg-[#0d1528]/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:shadow-blue-500/10 ${index >= 4 ? 'lg:w-[calc(33.333%-1.5rem)]' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-[2.5rem] overflow-hidden pointer-events-none" 
                  style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`, backgroundSize: '20px 20px' }} />

                {/* Step ID Badge */}
                <div className="mb-10 flex items-center justify-between">
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 font-black italic text-xl shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {step.id}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent mx-4" />
                </div>

                <div className="relative z-10">
                  <div className="mb-8 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/10 transition-colors duration-500">
                    <WorkflowIcon id={step.id} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter group-hover:text-blue-400 transition-colors">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used - Logo Slider */}

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Technologies & <span className="text-blue-400">Tools We Work With</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                  className="flex flex-col items-center justify-center mx-12 sm:mx-20 flex-shrink-0 cursor-pointer group/logo"
                >
                  <div className="relative w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'text-blue-400 font-black text-center text-sm px-2 break-words';
                          fallback.innerText = tech.name;
                          parent.appendChild(fallback);
                        }
                      }}
                      className="w-full h-full object-contain tech-logo group-hover/logo:scale-110 transition-transform duration-300"
                      style={{ transform: `scale(${tech.scale || 1})` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default AboutSection