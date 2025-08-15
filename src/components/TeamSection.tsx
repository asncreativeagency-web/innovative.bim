import React from 'react'

interface TeamMember {
  id: string
  name: string
  position: string
  expertise: string[]
  experience: string
  image: string
  linkedin?: string
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      position: 'Senior BIM Manager',
      expertise: ['Revit', 'BIM 360', 'Project Coordination'],
      experience: '8+ years',
      image: '/hero-bg.jpg', // Placeholder - you can add actual team photos
      linkedin: '#'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      position: 'BIM Specialist',
      expertise: ['AutoCAD', 'Navisworks', 'Clash Detection'],
      experience: '6+ years',
      image: '/hero-bg.jpg',
      linkedin: '#'
    },
    {
      id: '3',
      name: 'Emily Watson',
      position: 'Structural BIM Engineer',
      expertise: ['Tekla', 'Structural Analysis', 'Steel Modeling'],
      experience: '7+ years',
      image: '/hero-bg.jpg',
      linkedin: '#'
    },
    {
      id: '4',
      name: 'David Kim',
      position: 'MEP BIM Coordinator',
      expertise: ['MEP Systems', 'Coordination', 'BIM Standards'],
      experience: '9+ years',
      image: '/hero-bg.jpg',
      linkedin: '#'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      position: 'BIM Consultant',
      expertise: ['BIM Implementation', 'Training', 'Standards'],
      experience: '10+ years',
      image: '/hero-bg.jpg',
      linkedin: '#'
    },
    {
      id: '6',
      name: 'James Wilson',
      position: 'Technical Director',
      expertise: ['Project Management', 'Quality Control', 'Innovation'],
      experience: '12+ years',
      image: '/hero-bg.jpg',
      linkedin: '#'
    }
  ]

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
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Our Experts
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-blue-400">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team of certified BIM professionals brings years of experience and deep expertise to every project
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2"
              >
              {/* Member Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-blue-400/50 transition-all duration-500 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-medium rounded-full shadow-lg">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-200 font-medium mb-4">
                  {member.position}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-all duration-300 group-hover:scale-110 border border-blue-500/30"
                  >
                    <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>

                            {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            </div>
          ))}
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

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default TeamSection 