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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      {/* Navigation Spacer */}
      <div className="h-20"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-16 sm:mb-20">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-3 sm:px-4">
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-1.5 sm:mr-2"></span>
            Let's Connect
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
            Ready to transform your BIM projects? Let's discuss how we can help you achieve excellence in construction.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16 px-3 sm:px-4 md:px-0">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Contact Information</h3>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-start space-x-2.5 sm:space-x-3 md:space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500/20 border border-blue-500/30 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">Email</h4>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hari@innovativebimservices.com&su=BIM%20Services%20Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20BIM%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors duration-300 cursor-pointer break-words"
                  >
                    hari@innovativebimservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 sm:space-x-3 md:space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500/20 border border-blue-500/30 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">Phone</h4>
                  <a 
                    href="tel:+918142380902"
                    className="text-blue-200 text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    +91 81423 80902
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 sm:space-x-3 md:space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500/20 border border-blue-500/30 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">Address</h4>
                  <p className="text-blue-200 text-xs sm:text-sm md:text-base">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-3 sm:pt-4 md:pt-6">
              <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">Follow Us</h4>
              <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 touch-manipulation">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 touch-manipulation">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 touch-manipulation">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-blue-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-blue-200 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-blue-200 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-blue-200 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
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
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo and Company Name */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <img
                src="/logo.png"
                alt="BIM Arcana Logo"
                className="h-16 w-auto sm:h-20 object-contain"
              />
              <span className="text-white font-bold text-lg sm:text-xl">Innovative BIM Services</span>
            </div>
            
            {/* Company Description */}
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-sm sm:text-base">
              Revolutionizing the construction industry with cutting-edge, AI-powered BIM solutions. 
              We deliver precision, efficiency, and innovation in every project.
            </p>
            
            {/* Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Innovative BIM Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="hidden sm:block absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default ContactSection 