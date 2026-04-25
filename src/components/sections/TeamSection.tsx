import React from 'react'

const TeamSection: React.FC = () => {

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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-blue-400">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team of certified BIM professionals brings years of experience and deep expertise to every project
          </p>
        </div>

        {/* Team Content */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Expert Team</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team of certified BIM professionals brings years of experience and deep expertise to every project. 
              We combine technical excellence with innovative solutions to deliver exceptional results for our clients worldwide.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to work with our expert team?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Join Our Team
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default TeamSection 