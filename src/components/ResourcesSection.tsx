import React from 'react'

interface Resource {
  id: string
  title: string
  description: string
  type: 'whitepaper' | 'guide' | 'template' | 'case-study'
  fileSize: string
  downloadCount: number
  image: string
  downloadUrl: string
}

const ResourcesSection: React.FC = () => {
  const resources: Resource[] = [
    {
      id: '1',
      title: 'BIM Implementation Guide 2024',
      description: 'Comprehensive guide to implementing BIM in your construction projects, including best practices, workflows, and ROI analysis.',
      type: 'guide',
      fileSize: '2.4 MB',
      downloadCount: 1247,
      image: '/hero-bg.jpg',
      downloadUrl: '#'
    },
    {
      id: '2',
      title: 'LOD Standards Whitepaper',
      description: 'Detailed explanation of Level of Development standards, when to use each level, and how they impact project outcomes.',
      type: 'whitepaper',
      fileSize: '1.8 MB',
      downloadCount: 892,
      image: '/hero-bg.jpg',
      downloadUrl: '#'
    },
    {
      id: '3',
      title: 'BIM Coordination Checklist',
      description: 'Essential checklist for successful BIM coordination meetings, including pre-meeting preparation and follow-up actions.',
      type: 'template',
      fileSize: '0.5 MB',
      downloadCount: 2156,
      image: '/hero-bg.jpg',
      downloadUrl: '#'
    },
    {
      id: '4',
      title: 'Clash Detection Best Practices',
      description: 'Learn the most effective strategies for identifying and resolving design conflicts before they reach the construction site.',
      type: 'guide',
      fileSize: '3.1 MB',
      downloadCount: 1567,
      image: '/hero-bg.jpg',
      downloadUrl: '#'
    },
    {
      id: '5',
      title: 'BIM Project Templates',
      description: 'Ready-to-use Revit templates with proper family libraries, view templates, and project setup for various building types.',
      type: 'template',
      fileSize: '45.2 MB',
      downloadCount: 743,
      image: '/hero-bg.jpg',
      downloadUrl: '#'
    },
    {
      id: '6',
      title: '4D Scheduling Case Study',
      description: 'Real-world example of how 4D BIM scheduling helped complete a $50M project 3 months ahead of schedule.',
      type: 'case-study',
      fileSize: '4.7 MB',
      downloadCount: 634,
      image: '/hero-bg.jpg',
      downloadUrl: '#'
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'whitepaper':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      case 'guide':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      case 'template':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        )
      case 'case-study':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      default:
        return null
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'whitepaper':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'guide':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'template':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'case-study':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      default:
        return 'bg-white/10 text-white/80 border-white/20'
    }
  }

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
            Free Resources
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Download <span className="text-blue-400">Resources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our library of BIM guides, templates, and industry insights to enhance your projects
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2"
              >
              {/* Resource Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${getTypeColor(resource.type)}`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                </div>

                {/* Download Count */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                    {resource.downloadCount.toLocaleString()} downloads
                  </span>
                </div>

                {/* Download Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Download Now
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>
                
                {/* File Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>File size: {resource.fileSize}</span>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(resource.type)}
                    <span className="capitalize">{resource.type}</span>
                  </div>
                </div>

                {/* Download Button */}
                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-blue-500/25">
                  Download Now
                </button>
              </div>

                            {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified when we release new resources, industry insights, and BIM best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default ResourcesSection 