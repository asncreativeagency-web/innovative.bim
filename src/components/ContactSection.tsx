import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useContactForm } from '../hooks/useContactForm'
import ArcanaButton from './ArcanaButton'

const CornerAccents = () => (
  <>
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl pointer-events-none" />
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl pointer-events-none" />
  </>
)

const ContactSection: React.FC = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  } = useContactForm()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const categories = [
    'Architecture',
    'Structure',
    'Scan-to-BIM',
    'Food Service BIM',
    'MEP BIM',
    'Other'
  ]

  return (
    <div id="contact" className="relative bg-[#050810] overflow-hidden pt-16 sm:pt-24 pb-0">
      {/* Technical Master Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050810] via-transparent to-[#050810]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tighter">
              Let's <span className="text-blue-500">Discuss Your Project</span>
            </h2>

            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 font-light tracking-tight">
              Share your project requirements, and we’ll get back with a <span className="text-white font-medium">structured BIM approach</span> aligned with your scope, timeline, and coordination needs.
            </p>
          </motion.div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                   {/* Col 5: Contact Nodes */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative h-full bg-blue-900/10 backdrop-blur-3xl border border-white/5 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 overflow-hidden flex flex-col justify-between">
              <CornerAccents />
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-16 tracking-tight uppercase">
                  Contact Info
                </h3>
                
                <div className="space-y-12 sm:space-y-20">
                  {[
                    { 
                      id: '01',
                      label: 'Email Support', 
                      value: 'hari@innovativebimservices.com', 
                      href: 'mailto:hari@innovativebimservices.com',
                      icon: <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    },
                    { 
                      id: '02',
                      label: 'Phone Number', 
                      value: '+91 81423 80902', 
                      href: 'tel:+918142380902',
                      icon: <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    },
                    { 
                      id: '03',
                      label: 'Location', 
                      value: 'Hyderabad, India', 
                      icon: <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    }
                  ].map((node) => (
                    <div key={node.id} className="flex gap-6 sm:gap-10 group items-center">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-90 sm:scale-100">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            {node.icon}
                          </svg>
                        </div>
                      </div>
                      
                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-1 truncate" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{node.label}</p>
                        {node.href ? (
                          <a href={node.href} className="text-[13px] min-[390px]:text-base sm:text-lg font-bold text-gray-200 hover:text-blue-400 transition-all tracking-tight block whitespace-nowrap">
                            {node.value}
                          </a>
                        ) : (
                          <span className="text-base sm:text-lg font-bold text-gray-200 block tracking-tight whitespace-nowrap">{node.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>


          {/* Col 7: Inquiry Console */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative h-full bg-[#0d1528]/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-[0_0_80px_rgba(59,130,246,0.05)] overflow-hidden">
              <CornerAccents />
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12 tracking-tight uppercase">
                Project Inquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 relative z-10">
                <div className="relative group sm:col-span-2">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 sm:mb-2 block group-focus-within:text-blue-400 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/10 py-2 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-bold tracking-tight text-base sm:text-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="relative group">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 sm:mb-2 block group-focus-within:text-blue-400 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/10 py-2 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-bold tracking-tight text-base sm:text-lg"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                  <div className="relative group">
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 sm:mb-2 block group-focus-within:text-blue-400 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-bold tracking-tight text-base sm:text-lg"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 sm:mb-2 block group-focus-within:text-blue-400 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Project Type</label>
                    <div className="relative">
                      <div 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-transparent border-b border-white/10 py-2 sm:py-3 text-white focus:outline-none transition-all font-bold tracking-tight text-base sm:text-lg cursor-pointer flex justify-between items-center group/dropdown"
                      >
                        <span className={formData.projectType ? 'text-white' : 'text-gray-400'}>
                          {formData.projectType || 'Select a category'}
                        </span>
                        <motion.div
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          className="text-blue-500"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute z-50 left-0 right-0 mt-2 bg-[#0d1528]/95 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                          >
                            {categories.map((cat, idx) => (
                              <motion.div
                                key={cat}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => {
                                  handleInputChange({ target: { name: 'projectType', value: cat } } as any)
                                  setIsDropdownOpen(false)
                                }}
                                className="px-6 py-4 text-gray-300 hover:text-white hover:bg-blue-600/20 cursor-pointer transition-all flex items-center justify-between group/opt border-b border-white/5 last:border-0"
                              >
                                <span className="font-bold tracking-tight">{cat}</span>
                                {formData.projectType === cat && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
                                )}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-0 group-focus-within:w-full transition-all duration-700 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 sm:mb-2 block group-focus-within:text-blue-400 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tell us about your project</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-2 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-medium tracking-tight text-sm sm:text-base resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <div className="pt-6 sm:pt-8 text-center p-1">
                  <ArcanaButton primary className="w-full !py-4 sm:!py-6 sm:!text-base uppercase tracking-[0.2em]" icon={true}>
                    {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                  </ArcanaButton>
                </div>

                {/* Response & NDA Block */}
                <div className="pt-6 sm:pt-10 space-y-3 sm:space-y-4 text-center">
                  <p className="text-gray-400 text-[9px] sm:text-[10px] font-bold leading-relaxed uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    We typically respond within 24–48 hours.
                  </p>
                  <div className="h-px w-12 sm:w-16 bg-blue-500/20 mx-auto" />
                  <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed px-4 sm:px-6">
                    All data is treated as confidential and handled per standard project NDA practices.
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-50 bg-blue-900/40 backdrop-blur-2xl flex items-center justify-center p-12 text-center rounded-[3rem]"
                  >
                    <div>
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h4 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter">
                        Transmission Successful
                      </h4>
                      <p className="text-blue-100 text-lg">System has logged your project inquiry.</p>
                      <button onClick={() => window.location.reload()} className="mt-8 text-blue-400 font-bold text-xs tracking-widest uppercase hover:text-white transition-colors">{" >> "} New Inquiry</button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corporate Footer */}
      <footer className="mt-12 sm:mt-16 bg-[#1e2633]">
        <div className="relative w-full">
          {/* Main Image Banner */}
          <img 
            src="/images/footer-bg.png" 
            alt="Footer Banner" 
            className="w-full h-auto min-h-[300px] sm:min-h-[450px] object-cover" 
          />
          
        </div>

        {/* The Dark Bottom Area - Compacted */}
        <div className="bg-[#1e2633] pt-0 -mt-32 sm:-mt-48 pb-8 sm:pb-10 text-center relative z-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Description Text */}
            <p className="text-white font-bold mb-4 sm:mb-6 max-w-5xl mx-auto text-lg sm:text-2xl lg:text-3xl leading-relaxed tracking-tight px-4 opacity-95">
              Delivering coordinated, construction-ready BIM solutions across architecture, structure, scan-to-BIM, and food service projects.
            </p>

            {/* LinkedIn Link */}
            <div className="mb-6 sm:mb-10">
              <motion.a 
                href="https://www.linkedin.com/company/innovativebimservices/" 
                target="_blank" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 sm:gap-4 text-blue-400 hover:text-white transition-colors font-bold uppercase tracking-[0.4em] text-[10px] sm:text-[12px]"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Follow us on LinkedIn
              </motion.a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 font-bold text-[8px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] uppercase px-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              © 2026 Innovative BIM Services. All rights reserved. Built for global AEC and food service BIM delivery. Developed by <a href="https://www.fraylontech.com" target="_blank" className="text-blue-400/80 hover:text-blue-400 transition-colors">Fraylon Technologies</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContactSection