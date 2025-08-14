import React, { useState } from 'react'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/use-scroll-animations'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured?: boolean
}

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Scroll-triggered animations
  const headerAnimation = useScrollAnimation({ 
    animationType: 'slideUp', 
    delay: 100, 
    duration: 800 
  })
  const categoriesAnimation = useScrollAnimation({ 
    animationType: 'fadeIn', 
    delay: 200, 
    duration: 800 
  })
  const blogPostsAnimation = useStaggeredAnimation(6, 150)

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of BIM: AI Integration and Machine Learning',
      excerpt: 'Discover how artificial intelligence is revolutionizing BIM workflows, from automated clash detection to predictive analytics and smart project optimization.',
      content: 'Full article content would go here...',
      author: 'Sarah Chen',
      authorImage: '/hero-bg.jpg',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Innovation', 'BIM'],
      image: '/hero-bg.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Sustainable Construction: How BIM Supports Green Building',
      excerpt: 'Explore the critical role of BIM in sustainable construction, including energy modeling, material optimization, and lifecycle assessment.',
      content: 'Full article content would go here...',
      author: 'Michael Rodriguez',
      authorImage: '/hero-bg.jpg',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      category: 'Sustainability',
      tags: ['Green Building', 'Energy Modeling', 'Sustainability', 'LEED'],
      image: '/hero-bg.jpg'
    },
    {
      id: '3',
      title: 'BIM Coordination Best Practices for Large-Scale Projects',
      excerpt: 'Learn proven strategies for managing BIM coordination on complex, multi-stakeholder projects with tight deadlines and budgets.',
      content: 'Full article content would go here...',
      author: 'Emily Watson',
      authorImage: '/hero-bg.jpg',
      publishDate: '2024-01-05',
      readTime: '10 min read',
      category: 'Best Practices',
      tags: ['Coordination', 'Large Projects', 'Workflow', 'Efficiency'],
      image: '/hero-bg.jpg'
    },
    {
      id: '4',
      title: 'Digital Twins: The Next Evolution in Construction Technology',
      excerpt: 'Understand how digital twins are transforming construction projects by providing real-time monitoring and predictive maintenance capabilities.',
      content: 'Full article content would go here...',
      author: 'David Kim',
      authorImage: '/hero-bg.jpg',
      publishDate: '2023-12-28',
      readTime: '7 min read',
      category: 'Innovation',
      tags: ['Digital Twins', 'IoT', 'Monitoring', 'Predictive Analytics'],
      image: '/hero-bg.jpg'
    },
    {
      id: '5',
      title: 'BIM Standards and Protocols: Industry Best Practices',
      excerpt: 'A comprehensive guide to BIM standards, protocols, and best practices that ensure consistency and quality across all projects.',
      content: 'Full article content would go here...',
      author: 'Lisa Thompson',
      authorImage: '/hero-bg.jpg',
      publishDate: '2023-12-20',
      readTime: '9 min read',
      category: 'Standards',
      tags: ['Standards', 'Protocols', 'Quality', 'Compliance'],
      image: '/hero-bg.jpg'
    },
    {
      id: '6',
      title: 'Cost Estimation Accuracy: Leveraging BIM for Better Budgets',
      excerpt: 'How BIM technology is improving cost estimation accuracy and helping project managers stay within budget constraints.',
      content: 'Full article content would go here...',
      author: 'James Wilson',
      authorImage: '/hero-bg.jpg',
      publishDate: '2023-12-15',
      readTime: '5 min read',
      category: 'Cost Management',
      tags: ['Cost Estimation', 'Budgeting', 'Quantity Takeoff', 'Financial Planning'],
      image: '/hero-bg.jpg'
    }
  ]

  const categories = ['All', 'Technology', 'Sustainability', 'Best Practices', 'Innovation', 'Standards', 'Cost Management']

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
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
        <div 
          ref={headerAnimation.elementRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={headerAnimation.getAnimationStyle()}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Industry Insights
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            BIM <span className="text-blue-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with the latest industry trends, best practices, and technological innovations in BIM
          </p>
        </div>

        {/* Category Filter */}
        <div 
          ref={categoriesAnimation.elementRef as React.RefObject<HTMLDivElement>}
          className="flex justify-center mb-12"
          style={categoriesAnimation.getAnimationStyle()}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 flex flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-yellow-400 mr-2">⭐</span>
              Featured Article
            </h3>
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div 
                key={post.id} 
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/30 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">{post.author}</p>
                        <p className="text-gray-400 text-sm">{formatDate(post.publishDate)} • {post.readTime}</p>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-4">
                      {post.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-fit">
                      Read Full Article
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (blogPostsAnimation.elementRefs.current[index] = el)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              style={blogPostsAnimation.getStaggeredStyle(index)}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Read More Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Read More
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{formatDate(post.publishDate)}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white text-sm">{post.author}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-lg border border-white/20">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Read More Button */}
                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-blue-500/25">
                  Read More
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105">
            Load More Articles
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default BlogSection 