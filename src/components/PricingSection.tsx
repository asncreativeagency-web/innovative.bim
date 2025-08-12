import React, { useState } from 'react'

interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const pricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Starter',
      price: billingPeriod === 'monthly' ? '$2,500' : '$25,000',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Perfect for small projects and startups',
      features: [
        'BIM Modeling (LOD 200)',
        'Basic Clash Detection',
        '2D CAD Drawings',
        'Email Support',
        'Project Management',
        'Standard Deliverables'
      ],
      cta: 'Get Started'
    },
    {
      id: '2',
      name: 'Professional',
      price: billingPeriod === 'monthly' ? '$5,000' : '$50,000',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Ideal for growing businesses and medium projects',
      features: [
        'BIM Modeling (LOD 350)',
        'Advanced Clash Detection',
        '3D Coordination',
        'Quantity Takeoff',
        'Priority Support',
        'Custom Deliverables',
        '4D Scheduling',
        'Training Sessions'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      id: '3',
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? '$10,000' : '$100,000',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'For large-scale projects and enterprise clients',
      features: [
        'BIM Modeling (LOD 500)',
        'Full Project Coordination',
        'VR/AR Visualization',
        'Custom Development',
        'Dedicated Manager',
        '24/7 Support',
        'API Integration',
        'White-label Solutions'
      ],
      cta: 'Contact Sales'
    }
  ]

  const savings = billingPeriod === 'yearly' ? 'Save 17%' : ''

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
            Pricing Plans
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-blue-400">Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to meet your project needs and budget
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
          {savings && (
            <span className="ml-4 px-4 py-2 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
              {savings}
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative group transform hover:-translate-y-2 transition-all duration-500 ${
                plan.popular ? 'scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-500 ${
                plan.popular
                  ? 'border-blue-400/50 shadow-2xl shadow-blue-500/20'
                  : 'border-white/10 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-lg">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-blue-400/30'
                  }`}>
                    {plan.cta}
                  </button>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Custom Solutions Available
            </h3>
            <p className="text-gray-300 mb-6">
              Need a custom plan? We offer tailored solutions for unique project requirements, 
              enterprise clients, and long-term partnerships.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Request Custom Quote
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Have questions about pricing? Check out our{' '}
            <button className="text-blue-400 hover:underline">FAQ section</button> or{' '}
            <button className="text-blue-400 hover:underline">contact our team</button>.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500" />
    </div>
  )
}

export default PricingSection 