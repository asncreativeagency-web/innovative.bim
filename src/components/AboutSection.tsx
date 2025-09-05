import React, { useEffect, useRef, useState } from 'react'

const AboutSection: React.FC = () => {
	const workflowRef = useRef<HTMLDivElement>(null)
	const [isBimModalOpen, setIsBimModalOpen] = useState(false)
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
				filter: grayscale(100%) brightness(0.8);
				transition: filter 0.3s ease;
			}
			.tech-logo:hover {
				filter: grayscale(0%) brightness(1);
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
		<div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}} />
			</div>

			{/* Brand color overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
						About <span className="text-blue-400">Us</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
						Pioneering the future of construction with innovative BIM solutions and global expertise
					</p>
					
					{/* BIM Definition Button */}
					<button
						onClick={() => setIsBimModalOpen(true)}
						className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
					>
						<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						What is BIM?
					</button>
				</div>

				{/* Company Description */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
					{/* Our Mission Card */}
						<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
							<h3 className="text-2xl font-bold text-white mb-4 flex items-center">
								<svg className="w-6 h-6 mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H7m6 4H7m6 4H7m10 4H7a2 2 0 01-2-2V5a2 2 0 012-2h8l4 4v12a2 2 0 01-2 2z" />
								</svg>
								Our Mission
							</h3>
							<p className="text-gray-300 leading-relaxed text-lg">
								To revolutionize the construction industry by providing cutting-edge BIM services that enhance 
								efficiency, reduce costs, and improve project outcomes. We leverage the latest technology and 
								industry best practices to deliver exceptional results.
							</p>
						</div>
						
					{/* Why Choose Us Card */}
						<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
							<h3 className="text-2xl font-bold text-white mb-4 flex items-center">
								<svg className="w-6 h-6 mr-3 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
								</svg>
								Why Choose Us
							</h3>
							<ul className="space-y-4 text-gray-300">
								<li className="flex items-center space-x-4">
									<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
									<span className="text-lg">Advanced AI-powered modeling and analysis</span>
								</li>
								<li className="flex items-center space-x-4">
									<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
									<span className="text-lg">Experienced team of BIM specialists</span>
								</li>
								<li className="flex items-center space-x-4">
									<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
									<span className="text-lg">Global project delivery capabilities</span>
								</li>
								<li className="flex items-center space-x-4">
									<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
									<span className="text-lg">24/7 support and collaboration</span>
								</li>
							</ul>
						</div>
					</div>


				{/* LOD Showcase Section */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold text-white text-center mb-16">
						Levels of <span className="text-blue-400">Development (LOD)</span>
					</h3>
					
					<div className="text-center mb-12">
						<p className="text-xl text-gray-300 max-w-4xl mx-auto">
							LOD defines the amount of detail and accuracy in our BIM models at different project stages. 
							From initial concepts to construction-ready models, we provide the right level of development for your needs.
						</p>
					</div>


					{/* Enhanced LOD Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
						{/* LOD 100 */}
						<div className="group perspective-1000 h-full">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110 h-full">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500 h-full flex flex-col">
									{/* Glowing Border Effect */}
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									
									<div className="relative mb-6">
										<div className="relative overflow-hidden rounded-2xl">
											<img 
												src="/LOD/LOD/LOD 100.png" 
												alt="LOD 100 - Conceptual Design" 
												className="w-full h-auto max-h-48 object-contain transform group-hover:scale-110 transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
										</div>
										<div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
											LOD 100
										</div>
										{/* Floating Elements */}
										<div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
										<div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-300"></div>
									</div>
									
									<h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
										Conceptual Design
									</h4>
									<p className="text-gray-300 leading-relaxed mb-4">
										Basic shapes and approximate quantities for initial planning and feasibility studies.
									</p>
									
								</div>
							</div>
						</div>

						{/* LOD 200 */}
						<div className="group perspective-1000 h-full">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110 h-full">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500 h-full flex flex-col">
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									
									<div className="relative mb-6">
										<div className="relative overflow-hidden rounded-2xl">
											<img 
												src="/LOD/LOD/LOD 200.png" 
												alt="LOD 200 - Schematic Design" 
												className="w-full h-auto max-h-48 object-contain transform group-hover:scale-110 transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
										</div>
										<div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
											LOD 200
										</div>
										<div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-200"></div>
										<div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500"></div>
									</div>
									
									<h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
										Schematic Design
									</h4>
									<p className="text-gray-300 leading-relaxed mb-4">
										Generic elements with approximate quantities for schematic design and cost estimation.
									</p>
									
								</div>
							</div>
						</div>

						{/* LOD 300 */}
						<div className="group perspective-1000 h-full">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110 h-full">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500 h-full flex flex-col">
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									
									<div className="relative mb-6">
										<div className="relative overflow-hidden rounded-2xl">
											<img 
												src="/LOD/LOD/LOD 300.png" 
												alt="LOD 300 - Detailed Design" 
												className="w-full h-auto max-h-48 object-contain transform group-hover:scale-110 transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
										</div>
										<div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
											LOD 300
										</div>
										<div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-400"></div>
										<div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-700"></div>
									</div>
									
									<h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
										Detailed Design
									</h4>
									<p className="text-gray-300 leading-relaxed mb-4">
										Specific elements with accurate quantities for detailed design and construction planning.
									</p>
									
								</div>
							</div>
						</div>

						{/* LOD 350 */}
						<div className="group perspective-1000 h-full">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110 h-full">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500 h-full flex flex-col">
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									
									<div className="relative mb-6">
										<div className="relative overflow-hidden rounded-2xl">
											<img 
												src="/LOD/LOD/LOD 350.png" 
												alt="LOD 350 - Construction Documentation" 
												className="w-full h-auto max-h-48 object-contain transform group-hover:scale-110 transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
										</div>
										<div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
											LOD 350
										</div>
										<div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-600"></div>
										<div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-900"></div>
									</div>
									
									<h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
										Construction Docs
									</h4>
									<p className="text-gray-300 leading-relaxed mb-4">
										Detailed elements with fabrication-ready information for construction documentation.
									</p>
									
								</div>
							</div>
						</div>

						{/* LOD 400 */}
						<div className="group perspective-1000 h-full">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110 h-full">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500 h-full flex flex-col">
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									
									<div className="relative mb-6">
										<div className="relative overflow-hidden rounded-2xl">
											<img 
												src="/LOD/LOD/LOD 400.png" 
												alt="LOD 400 - Fabrication & Assembly" 
												className="w-full h-auto max-h-48 object-contain transform group-hover:scale-110 transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
										</div>
										<div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
											LOD 400
										</div>
										<div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-800"></div>
										<div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-700"></div>
									</div>
									
									<h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
										Fabrication Ready
									</h4>
									<p className="text-gray-300 leading-relaxed mb-4">
										Detailed elements ready for manufacturing, assembly, and installation.
									</p>
									
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			{/* Technologies Slider Section - Full Width */}
			<div className="relative w-full py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
					<h3 className="text-3xl font-bold text-white text-center mb-8">
						Technologies We <span className="text-blue-400">Use</span>
					</h3>
					
					<div className="text-center">
						<p className="text-xl text-gray-300 max-w-4xl mx-auto">
							We leverage cutting-edge BIM and CAD technologies to deliver exceptional results for our clients worldwide.
						</p>
					</div>
				</div>

				{/* Continuous Technologies Slider - Full Width */}
				<div className="relative overflow-hidden w-full">
					<div className="flex animate-scroll">
						{/* First set of logos */}
						{technologies.map((tech, index) => (
							<div key={`first-${index}`} className="flex-shrink-0 mx-16 flex items-center justify-center">
								<img 
									src={tech.icon} 
									alt={tech.name}
									className="w-48 h-48 object-contain hover:scale-110 transition-all duration-300 tech-logo"
								/>
							</div>
						))}
						{/* Duplicate set for seamless loop */}
						{technologies.map((tech, index) => (
							<div key={`second-${index}`} className="flex-shrink-0 mx-16 flex items-center justify-center">
								<img 
									src={tech.icon} 
									alt={tech.name}
									className="w-48 h-48 object-contain hover:scale-110 transition-all duration-300 tech-logo"
								/>
							</div>
						))}
						{/* Third set for extra smoothness */}
						{technologies.map((tech, index) => (
							<div key={`third-${index}`} className="flex-shrink-0 mx-16 flex items-center justify-center">
								<img 
									src={tech.icon} 
									alt={tech.name}
									className="w-48 h-48 object-contain hover:scale-110 transition-all duration-300 tech-logo"
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* BIM Definition Modal */}
			{isBimModalOpen && (
				<div 
					className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
					onClick={(e) => {
						// Close modal when clicking on blank space
						if (e.target === e.currentTarget) {
							setIsBimModalOpen(false);
						}
					}}
				>
					{/* Close Button */}
					<button
						onClick={() => setIsBimModalOpen(false)}
						className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 z-10"
						aria-label="Close BIM modal"
					>
						<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					{/* BIM Modal Content */}
					<div className="relative max-w-4xl w-full bg-gradient-to-br from-blue-900/90 to-cyan-900/90 backdrop-blur-xl border border-blue-400/30 rounded-3xl shadow-2xl shadow-blue-500/20 overflow-hidden">
						{/* Original BIM Background Image */}
						<div className="absolute inset-0">
							<img
								src="/Original BIM Baground.jpg"
								alt="BIM Background"
								className="w-full h-full object-cover opacity-30"
							/>
						</div>

						{/* 3D House Wireframe Background */}
						<div className="absolute inset-0 opacity-10">
							<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-lg transform rotate-45"></div>
							<div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/20 rounded-lg transform -rotate-12"></div>
							<div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-white/20 rounded-lg transform rotate-30"></div>
						</div>

						<div className="relative z-10 p-8 md:p-12">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
								{/* Left Side - BIM Text */}
								<div className="text-center lg:text-left">
									<h3 className="text-7xl md:text-8xl font-black text-blue-400 mb-6 tracking-tight" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif" }}>
										BIM
									</h3>
									<div className="space-y-3 text-white text-xl md:text-2xl font-semibold tracking-wide" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
										<div className="text-blue-200">Building</div>
										<div className="text-blue-100">Information</div>
										<div className="text-blue-300">Modeling</div>
									</div>
								</div>

								{/* Right Side - Definition Box */}
								<div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
									<h4 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
										Definition of BIM
									</h4>
									<div className="space-y-4 text-gray-200 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
										<p>
											<strong className="text-blue-300 font-semibold">Building Information Modeling (BIM)</strong> is a digital representation of physical and functional characteristics of a facility.
										</p>
										<div className="flex justify-center my-3">
											<svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
											</svg>
										</div>
										<p>
											It serves as a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its life-cycle from inception onward.
										</p>
										<p>
											BIM integrates architecture, engineering, and construction into a unified digital workflow, enabling better collaboration, reduced errors, and improved project outcomes.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Floating Elements */}
			<div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
			<div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
			<div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
			<div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-ping delay-1500" />
		</div>
	)
}

export default AboutSection 