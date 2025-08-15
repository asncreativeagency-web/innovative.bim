import React, { useState, useEffect } from 'react'

interface Testimonial {
  id: string
  name: string
  company: string
  position: string
  content: string
  rating: number
  project: string
  image: string
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Robert Anderson',
      company: 'Anderson Construction Co.',
      position: 'Project Manager',
      content: 'IBS transformed our construction process with their BIM expertise. The 3D coordination saved us 3 months and $500K in rework. Their team is professional, responsive, and truly understands construction workflows.',
      rating: 5,
      project: 'Commercial Complex - $25M',
      image: '/hero-bg.jpg'
    },
    {
      id: '2',
      name: 'Maria Garcia',
      company: 'Garcia Architects',
      position: 'Principal Architect',
      content: 'Working with IBS has been a game-changer for our practice. Their BIM models are incredibly detailed and their clash detection prevented numerous issues before construction even began. Highly recommended!',
      rating: 5,
      project: 'Healthcare Facility - $18M',
      image: '/hero-bg.jpg'
    },
    {
      id: '3',
      name: 'David Thompson',
      company: 'Thompson Engineering',
      position: 'Structural Engineer',
      content: 'The structural BIM models from IBS are exceptional. They caught several design conflicts early and their coordination with MEP systems was seamless. This level of detail is exactly what modern construction needs.',
      rating: 5,
      project: 'Residential Tower - $32M',
      image: '/hero-bg.jpg'
    },
    {
      id: '4',
      name: 'Sarah Williams',
      company: 'Williams Development',
      position: 'Development Director',
      content: 'IBS delivered our BIM project on time and under budget. Their quantity takeoff was accurate within 2%, and the 4D scheduling helped us optimize our construction sequence perfectly.',
      rating: 5,
      project: 'Mixed-Use Development - $45M',
      image: '/hero-bg.jpg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
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
            Client Success
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our <span className="text-blue-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the professionals who've experienced our BIM excellence
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-400/30">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-8">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Project Info */}
            <div className="mb-8">
              <span className="px-6 py-3 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                {testimonials[currentTestimonial].project}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-lg">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold text-xl mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-200 font-medium mb-1">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: '98%', label: 'Client Satisfaction', icon: 'smile' },
            { number: '500+', label: 'Projects Completed', icon: 'trophy' },
            { number: '25+', label: 'Countries Served', icon: 'globe' },
            { number: '10+', label: 'Years Experience', icon: 'clock' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2">
                <div className="mb-3">
                  {stat.icon === 'smile' && (
                    <svg className="w-8 h-8 mx-auto text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828A4 4 0 019.172 14.83M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {stat.icon === 'trophy' && (
                    <svg className="w-8 h-8 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8m-4-4v4m7-14h1a2 2 0 012 2 6 6 0 01-6 6H8a6 6 0 01-6-6 2 2 0 012-2h1m12 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m12 0a4 4 0 01-4 4H9a4 4 0 01-4-4" />
                    </svg>
                  )}
                  {stat.icon === 'globe' && (
                    <svg className="w-8 h-8 mx-auto text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5 0 4.5-4 4.5-9S14.5 3 12 3 7.5 7 7.5 12 9.5 21 12 21zm-9-9h18" />
                    </svg>
                  )}
                  {stat.icon === 'clock' && (
                    <svg className="w-8 h-8 mx-auto text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default TestimonialsSection 