import React, { useEffect, useRef } from 'react'

const AboutSection: React.FC = () => {
	const workflowRef = useRef<HTMLDivElement>(null)

	// Custom CSS animations
	useEffect(() => {
		const style = document.createElement('style')
		style.textContent = `
			@keyframes slide {
				0%, 100% { transform: translateX(-100%); }
				50% { transform: translateX(100%); }
			}
			@keyframes float {
				0%, 100% { transform: translateY(0px); }
				50% { transform: translateY(-10px); }
			}
			.animate-float {
				animation: float 3s ease-in-out infinite;
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

	const stats = [
		{ label: 'Projects Completed', value: '500+', icon: 'trophy' },
		{ label: 'Countries Served', value: '25+', icon: 'globe' },
		{ label: 'Client Satisfaction', value: '98%', icon: 'smile' },
		{ label: 'Years Experience', value: '10+', icon: 'clock' }
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

	const StatIcon: React.FC<{ name: string }> = ({ name }) => {
		switch (name) {
			case 'trophy':
				return (
					<svg className="w-8 h-8 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8m-4-4v4m7-14h1a2 2 0 012 2 6 6 0 01-6 6H8a6 6 0 01-6-6 2 2 0 012-2h1m12 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m12 0a4 4 0 01-4 4H9a4 4 0 01-4-4" />
					</svg>
				)
			case 'globe':
				return (
					<svg className="w-8 h-8 mx-auto text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5 0 4.5-4 4.5-9S14.5 3 12 3 7.5 7 7.5 12 9.5 21 12 21zm-9-9h18" />
					</svg>
				)
			case 'smile':
				return (
					<svg className="w-8 h-8 mx-auto text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828A4 4 0 019.172 14.83M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				)
			case 'clock':
				return (
					<svg className="w-8 h-8 mx-auto text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				)
			default:
				return null
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
					<div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4">
						<span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
						Who We Are
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
						About <span className="text-blue-400">Us</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Pioneering the future of construction with innovative BIM solutions and global expertise
					</p>
				</div>

				{/* Company Description */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
					<div className="space-y-8">
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

					<div className="relative">
						<div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/20">
							<h3 className="text-2xl font-bold text-white mb-8 text-center">Global Reach</h3>
							<div className="grid grid-cols-2 gap-6">
								{stats.map((stat) => (
									<div key={stat.label} className="text-center">
										<StatIcon name={stat.icon} />
										<div className="text-white font-bold text-2xl mb-1">{stat.value}</div>
										<div className="text-blue-300 text-sm">{stat.label}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Workflow Section */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold text-white text-center mb-16">
						Our <span className="text-blue-400">Workflow</span>
					</h3>
					
					<div ref={workflowRef} className="relative">
						{/* Connectors positioned between each step */}
						<div className="absolute top-10 left-0 w-full hidden lg:flex justify-between px-16">
							{Array.from({ length: 6 }).map((_, i) => (
								<div key={i} className="flex items-center space-x-1 opacity-60">
									<span className="w-1 h-1 rounded-full bg-blue-300"></span>
									<span className="w-1 h-1 rounded-full bg-blue-300/70"></span>
									<span className="w-1 h-1 rounded-full bg-blue-300/50"></span>
								</div>
							))}
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-6">
							{workflowSteps.map((step, index) => (
								<div
									key={step.id}
									className={`workflow-step relative group opacity-0 transform translate-y-8 transition-all duration-700 ease-out`}
									style={{ transitionDelay: `${index * 100}ms` }}
								>
									{/* Step Circle */}
									<div className="relative z-10 mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-white rounded-full flex items-center justify-center mb-6 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform group-hover:scale-110">
										<span className="text-white font-bold text-2xl group-hover:text-white transition-colors duration-300">
											{step.id}
										</span>
									</div>

									{/* Step Content */}
									<div className="text-center">
										<div className="mb-3"><WorkflowIcon id={step.id} /></div>
										<h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
											{step.title}
										</h4>
										<p className="text-sm text-gray-400 leading-relaxed">
											{step.description}
										</p>
									</div>

									{/* Hover Glow */}
									<div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								</div>
							))}
						</div>
					</div>
				</div>

				{/* LOD Showcase Section */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold text-white text-center mb-16">
						Levels of <span className="text-blue-400">Detail (LOD)</span>
					</h3>
					
					<div className="text-center mb-12">
						<p className="text-xl text-gray-300 max-w-4xl mx-auto">
							LOD defines the amount of detail and accuracy in our BIM models at different project stages. 
							From initial concepts to construction-ready models, we provide the right level of detail for your needs.
						</p>
					</div>

					{/* LOD Progress Bar */}
					<div className="relative mb-16">
						<div className="flex justify-between items-center mb-8">
							{['Concept', 'Planning', 'Design', 'Construction', 'Fabrication'].map((stage, index) => (
								<div key={stage} className="text-center">
									<div className="w-3 h-3 bg-blue-400 rounded-full mb-2 animate-pulse"></div>
									<span className="text-sm text-blue-300 font-medium">{stage}</span>
								</div>
							))}
						</div>
						<div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-full animate-pulse"></div>
							<div className="relative h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-full transform translate-x-0" style={{animation: 'slide 3s ease-in-out infinite'}}></div>
						</div>
					</div>

					{/* Enhanced LOD Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
						{/* LOD 100 */}
						<div className="group perspective-1000">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500">
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
									
									{/* Progress Indicator */}
									<div className="w-full bg-gray-700 rounded-full h-2 mb-3">
										<div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-1/5 animate-pulse"></div>
									</div>
									<span className="text-xs text-blue-300">20% Complete</span>
								</div>
							</div>
						</div>

						{/* LOD 200 */}
						<div className="group perspective-1000">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500">
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
									
									<div className="w-full bg-gray-700 rounded-full h-2 mb-3">
										<div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-2/5 animate-pulse"></div>
									</div>
									<span className="text-xs text-blue-300">40% Complete</span>
								</div>
							</div>
						</div>

						{/* LOD 300 */}
						<div className="group perspective-1000">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500">
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
									
									<div className="w-full bg-gray-700 rounded-full h-2 mb-3">
										<div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-3/5 animate-pulse"></div>
									</div>
									<span className="text-xs text-blue-300">60% Complete</span>
								</div>
							</div>
						</div>

						{/* LOD 350 */}
						<div className="group perspective-1000">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500">
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
									
									<div className="w-full bg-gray-700 rounded-full h-2 mb-3">
										<div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-4/5 animate-pulse"></div>
									</div>
									<span className="text-xs text-blue-300">80% Complete</span>
								</div>
							</div>
						</div>

						{/* LOD 400 */}
						<div className="group perspective-1000">
							<div className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110">
								<div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500">
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
									
									<div className="w-full bg-gray-700 rounded-full h-2 mb-3">
										<div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-full animate-pulse"></div>
									</div>
									<span className="text-xs text-blue-300">100% Complete</span>
								</div>
							</div>
						</div>
					</div>
				</div>


			</div>

			{/* Floating Elements */}
			<div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
			<div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
			<div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
			<div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-ping delay-1500" />
		</div>
	)
}

export default AboutSection 