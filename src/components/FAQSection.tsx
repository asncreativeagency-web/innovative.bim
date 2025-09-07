import React, { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>(['1'])

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What is BIM and how does it benefit construction projects?',
      answer: 'Building Information Modeling (BIM) is a digital representation of physical and functional characteristics of a facility. It provides a comprehensive 3D model that includes geometry, spatial relationships, geographic information, and quantities. BIM benefits include improved coordination, reduced errors, better cost estimation, enhanced collaboration, and faster project delivery.',
      category: 'General'
    },
    {
      id: '2',
      question: 'What LOD levels do you provide and what do they mean?',
      answer: 'We provide LOD 200, 350, and 500 levels. LOD 200 represents generic systems with approximate quantities and basic geometry. LOD 350 includes detailed geometry with interfaces to other building systems. LOD 500 represents field-verified systems with actual quantities and precise geometry. Each level serves different project phases and requirements.',
      category: 'Technical'
    },
    {
      id: '3',
      question: 'How long does a typical BIM project take?',
      answer: 'Project duration varies based on complexity and scope. A simple residential project might take 2-4 weeks, while a complex commercial development could take 8-12 weeks. We provide detailed timelines during project planning and maintain regular communication throughout the process.',
      category: 'Project Management'
    },
    {
      id: '4',
      question: 'What software and technologies do you use?',
      answer: 'We use industry-leading software including Autodesk Revit, AutoCAD, Navisworks, Tekla, and BIM 360. We also leverage advanced tools for clash detection, 4D scheduling, quantity takeoff, and virtual reality visualization. Our team stays updated with the latest BIM technologies and industry standards.',
      category: 'Technical'
    },
    {
      id: '5',
      question: 'Do you provide training and support after project delivery?',
      answer: 'Yes, we offer comprehensive post-delivery support including user training, documentation, and ongoing technical assistance. We provide training sessions for your team to effectively use the BIM models and can offer ongoing consultation for future projects.',
      category: 'Support'
    },
    {
      id: '6',
      question: 'How do you ensure data security and confidentiality?',
      answer: 'We implement strict data security protocols including encrypted file transfers, secure cloud storage, and non-disclosure agreements. All project data is stored securely and access is limited to authorized personnel only. We can also work with your existing security requirements.',
      category: 'Security'
    },
    {
      id: '7',
      question: 'What types of projects do you specialize in?',
      answer: 'We specialize in commercial, residential, healthcare, industrial, and infrastructure projects. Our expertise covers new construction, renovations, and expansions. We work with projects of all sizes, from small renovations to large-scale developments worth hundreds of millions of dollars.',
      category: 'General'
    },
    {
      id: '8',
      question: 'How do you handle project revisions and changes?',
      answer: 'We have a structured change management process that includes impact analysis, cost assessment, and timeline updates. Changes are documented and communicated clearly to all stakeholders. We maintain version control of all models and provide clear documentation of modifications.',
      category: 'Project Management'
    }
  ]

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categories = ['All', 'General', 'Technical', 'Project Management', 'Support', 'Security']

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our BIM services and processes
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-500"
              >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.question}
                  </h3>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed pt-4 text-base">
                    {item.answer}
                  </p>
                </div>
              )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Contact Our Team
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default FAQSection 