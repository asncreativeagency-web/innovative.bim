import React from 'react'
import { useContactForm } from '../hooks/useContactForm'

const ContactSection: React.FC = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  } = useContactForm()

  return (
    <div className="relative min-h-screen">

      {/* Navigation Spacer */}
      <div className="h-20"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s <span className="text-blue-400">Discuss Your Project</span>
          </h2>          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Share your project requirements, and we’ll get back with a structured BIM approach aligned with your scope, timeline, and coordination needs.
          </p>
          <p className="text-lg text-blue-400 font-semibold italic">
            Supporting clients across international AEC and food service projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-all">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:hari@innovativebimservices.com" className="text-xl text-gray-300 hover:text-blue-400 transition-colors">
                  hari@innovativebimservices.com
                </a>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-all">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+918142380902" className="text-xl text-gray-300 hover:text-blue-400 transition-colors">
                  +91 81423 80902
                </a>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-all">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xl text-gray-300">Hyderabad, India</span>
              </div>
            </div>

          </div>

          {/* Project Inquiry Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col justify-center border border-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 appearance-none font-semibold cursor-pointer"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Structure">Structure</option>
                      <option value="Scan-to-BIM">Scan-to-BIM</option>
                      <option value="Food Service BIM">Food Service BIM</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-5 px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-50 text-xl"
              >
                {isSubmitting ? 'Sending...' : 'Submit Project Details →'}
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
                We typically respond within 24–48 hours for project-related inquiries.<br />
                All information shared through this form is treated as confidential and handled in accordance with standard project NDA practices.
              </p>

              {submitStatus === 'success' && (
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-green-400 font-semibold text-base sm:text-lg">Message Sent Successfully!</h4>
                      <p className="text-green-300 text-xs sm:text-sm">We've received your inquiry and will respond within 24 hours.</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        // Reset form manually
                        const form = document.querySelector('form') as HTMLFormElement;
                        if (form) form.reset();
                        // Reset status
                        window.location.reload();
                      }}
                      className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-red-400 font-semibold text-base sm:text-lg">Submission Error</h4>
                      <p className="text-red-300 text-xs sm:text-sm">Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* NDA/Support Power Line */}
        <div className="text-center animate-fade-in">
          <p className="text-xl md:text-2xl font-medium text-blue-400 italic">
            "Supporting clients across international AEC and food service projects."
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center justify-center mb-6">
              <img
                src="/logo.png"
                alt="BIM Arcana Logo"
                className="h-40 w-auto object-contain opacity-100 transition-all duration-500 mb-2"
              />
            </div>
            
            {/* Company Description */}
            <p className="text-gray-300 font-bold mb-8 max-w-xs sm:max-w-sm md:max-w-4xl mx-auto text-sm sm:text-base md:text-xl leading-relaxed">
              Delivering coordinated, construction-ready BIM solutions across architecture, structure, scan-to-BIM, and food service projects.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mb-4 sm:mb-6">
              <a 
                href="https://www.linkedin.com/company/innovativebimservices/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm sm:text-base font-medium">Follow us on LinkedIn</span>
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm font-medium">
              © 2026 Innovative BIM Services. All rights reserved. <br className="sm:hidden" />
              Built for global AEC and food service BIM delivery.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default ContactSection 