import React, { useState } from 'react'

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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of BIM: How AI is Driving Innovation in the Industry 2025',
      excerpt: 'Discover how artificial intelligence is revolutionizing BIM workflows, from automated clash detection to predictive analytics and smart project optimization. Learn about the 5 leading BIM software with AI features.',
      content: `The AEC (Architecture, Engineering and Construction) industry has been experiencing a significant transformation due to technological advancements. Building Information Modelling (BIM), virtual reality, sustainable design practices, and the integration of Artificial Intelligence (AI) have been reshaping the AEC landscape.

What is Building Information Modelling?

BIM is a highly collaborative process that allows architects, engineers, contractors, and other consultants to plan, design and construct a structure or building collaboratively within one 3D model. BIM integrates structures and multi-disciplinary data to produce a digital representation of an asset across its lifecycle.

How AI in BIM is Helping the Construction Industry?

1. Design Optimization and Planning
AI algorithms can easily analyse vast amounts of data within BIM models, optimizing design parameters such as energy efficiency, cost-effectiveness, and structural integrity.

2. Improved Clash Detection
AI algorithms can analyse BIM models to help detect clashes more accurately and efficiently, reducing the likelihood of errors during construction and minimising rework.

3. Enhanced Project Management
AI-powered BIM platforms streamline project management processes by automating tasks such as scheduling, resource allocation, and progress monitoring.

4. Quality Control and Safety Monitoring
AI algorithms can analyse construction site data along with images and sensor inputs to monitor quality and safety compliance in real-time.

5. Predictive Maintenance
AI in BIM enables predictive maintenance by analysing historical data and sensor inputs, allowing construction companies to schedule maintenance proactively.

5 Leading BIM Software and Their Unique AI Features

1. BIM 360
- Cloud-based platform with AI technology for design review and collaboration
- Intelligent AI assistant "Assemble" for model consolidation
- AI-driven clash detection capabilities

2. SketchUp Pro
- AI-powered "Smart Components" plugin
- Dynamic components that adjust properties automatically
- AI-driven "Styles" functionality for materials and textures

3. Autodesk Revit
- Generative design tools fueled by AI
- Automated clash detection system utilizing AI
- Multiple design options meeting specific criteria

4. Graphisoft ArchiCAD
- AI technology for real-time energy analysis
- AI assistant "BIMx Docs" for automated document generation
- Environmental impact evaluation and sustainability optimization

5. Bentley AECOsim
- AI for automated code compliance checking
- AI-powered quantity takeoff tool for accurate material calculations
- Enhanced cost control and procurement efficiency

The integration of AI with BIM marks a significant milestone in the evolution of the AEC industry, offering multiple benefits ranging from design optimization and clash detection to enhanced project management and sustainability.`,
      author: 'BIM Arcana Team',
      authorImage: '/logo.png',
      publishDate: '2025-01-15',
      readTime: '9 min read',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Innovation', 'BIM', 'Future of Construction'],
      image: '/Blog Photos/future of bim.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'BIM Coordination Best Practices for Large-Scale Projects',
      excerpt: 'Learn proven strategies for managing BIM coordination on complex, multi-stakeholder projects with tight deadlines and budgets. Discover advanced clash detection and resolution techniques.',
      content: `Large-scale construction projects require exceptional BIM coordination to ensure success. This comprehensive guide covers the essential strategies and best practices that project managers and BIM coordinators need to implement for seamless project execution.

Key Challenges in Large-Scale BIM Coordination

1. Multi-Stakeholder Collaboration
Managing coordination between architects, structural engineers, MEP consultants, contractors, and subcontractors requires robust communication protocols and centralized information management.

2. Model Integration and Federation
Combining multiple discipline models into a federated model while maintaining accuracy and performance is crucial for successful coordination.

3. Clash Detection and Resolution
Identifying and resolving conflicts between different building systems before construction begins saves time and reduces costly rework.

Best Practices for Successful BIM Coordination

1. Establish Clear BIM Execution Plans
Define project goals, team roles, modeling standards, and quality assurance procedures at the project outset.

2. Implement Advanced Clash Detection
Use automated clash detection tools and establish clear resolution workflows for different types of conflicts.

3. Maintain Real-Time Collaboration
Implement cloud-based collaboration platforms that enable real-time model sharing and coordination.

4. Quality Assurance Protocols
Establish regular review cycles and quality checkpoints throughout the project lifecycle.

Technology Integration for Enhanced Coordination

Modern BIM coordination relies on advanced technology:
- Cloud-based collaboration platforms
- Automated clash detection tools
- Real-time model synchronization
- Mobile access for field coordination
- Advanced visualization tools

Successful BIM coordination on large-scale projects requires a combination of robust processes, advanced technology, and skilled personnel working together towards common goals.`,
      author: 'Michael Rodriguez',
      authorImage: '/logo.png',
      publishDate: '2025-01-10',
      readTime: '8 min read',
      category: 'Best Practices',
      tags: ['Coordination', 'Large Projects', 'Workflow', 'Efficiency', 'Clash Detection'],
      image: '/Blog Photos/bim project coordination.webp'
    },
    {
      id: '3',
      title: 'Sustainable Construction: How BIM Supports Green Building',
      excerpt: 'Explore the critical role of BIM in sustainable construction, including energy modeling, material optimization, and lifecycle assessment for LEED certification.',
      content: `Sustainability has become a cornerstone of modern construction, and BIM technology plays a crucial role in achieving green building goals. This comprehensive guide explores how BIM supports sustainable design and construction practices.

BIM's Role in Sustainable Design

1. Energy Modeling and Analysis
BIM enables detailed energy modeling and analysis during the design phase, allowing architects and engineers to optimize building performance before construction begins. This includes:
- Solar analysis and shading studies
- Thermal performance modeling
- HVAC system optimization
- Natural ventilation strategies

2. Material Optimization and Waste Reduction
BIM technology helps minimize material waste through:
- Precise quantity takeoffs
- Material optimization algorithms
- Prefabrication planning
- Construction waste tracking

3. Lifecycle Assessment
BIM supports comprehensive lifecycle assessment by providing:
- Material environmental impact data
- Energy consumption predictions
- Maintenance and replacement schedules
- End-of-life disposal planning

LEED Certification Support

BIM technology significantly aids in achieving LEED certification by providing:
- Detailed documentation for all credit categories
- Energy performance modeling and optimization
- Material selection and sourcing information
- Construction waste management tracking
- Indoor environmental quality analysis

Advanced Sustainability Features

Modern BIM platforms offer advanced sustainability tools:
- Real-time energy performance monitoring
- Automated sustainability reporting
- Integration with green building standards
- Predictive sustainability analytics

BIM technology is essential for achieving sustainable construction goals, providing the tools and insights needed to create buildings that are not only functional and beautiful but also environmentally responsible and energy-efficient.`,
      author: 'Emily Watson',
      authorImage: '/logo.png',
      publishDate: '2025-01-05',
      readTime: '7 min read',
      category: 'Sustainability',
      tags: ['Green Building', 'Energy Modeling', 'Sustainability', 'LEED', 'Environmental Impact'],
      image: '/Blog Photos/sustainability and green building.jpg'
    },
    {
      id: '4',
      title: 'Digital Twins: The Next Evolution in Construction Technology',
      excerpt: 'Understand how digital twins are transforming construction projects by providing real-time monitoring and predictive maintenance capabilities.',
      content: `Digital twins represent the next evolution in construction technology, offering unprecedented insights into building performance and enabling proactive maintenance and optimization. This technology is revolutionizing how we monitor, manage, and maintain constructed assets.

What are Digital Twins?

Digital twins are virtual representations of physical buildings that provide real-time data and insights. They combine:
- BIM models with real-time sensor data
- IoT device integration
- Advanced analytics and machine learning
- Predictive modeling capabilities

According to [Toobler's comprehensive guide](https://www.toobler.com/blog/digital-twin-in-construction), digital twins in construction are created by combining several types of data into a single platform, including 3D models, sensor data, and real-time performance data. This enables material choices, energy usage, and maintenance schedules to be simulated and optimized.

Applications in Construction and Operations

1. Construction Phase
- Real-time progress monitoring
- Quality control and compliance
- Safety monitoring and risk assessment
- Resource optimization and scheduling

2. Operations and Maintenance
- Predictive maintenance scheduling
- Energy performance optimization
- Occupant comfort monitoring
- Asset lifecycle management

3. Facility Management
- Space utilization optimization
- Equipment performance monitoring
- Energy consumption tracking
- Maintenance cost optimization

Key Advantages of Digital Twins in Construction

1. Collaboration and Communication
Digital twins provide a common platform for all stakeholders to share information, coordinate tasks, and make decisions. By providing a visual and interactive representation of the project, digital twins help break down silos and improve communication between teams and departments.

2. Efficiency Improvements
Construction companies can increase their efficiency using digital twins by simulating the real-world environment that construction teams operate within. This drastically reduces the time and money spent on project engineering by combining digital and physical models of a project.

3. Enhanced Safety
Digital twins help improve safety by identifying potential hazards before they occur. Virtual training allows for improved planning and risk management during the design phase, reducing costs associated with unforeseen delays or accidents onsite.

4. Accuracy and Quality
Digital twins allow architects and engineers to design structures digitally with information regarding functions, materials, and maintenance schedules ahead of time. This ensures the building process is better organized with effective oversight and communications.

5. Cost Savings
Using digital twins, construction managers can simulate different design options and evaluate their performance before construction begins, reducing the need for costly changes during construction. They also optimize the use of materials and resources, reducing waste and lowering costs.

Real-World Examples of Digital Twins in Construction

1. One World Trade Center, New York City, USA
As a symbol of resilience and strength, the construction of One World Trade Center incorporated digital twin technology to ensure its success. Digital twins were created to simulate the building's performance, allowing architects and engineers to assess structural integrity and predict environmental impacts.

2. Suzhou Center, Suzhou, China
The Suzhou Center, an impressive mixed-use development, employed digital twin technology to streamline its construction. Digital twins were used to simulate the behavior of the building's complex structures, optimize energy consumption, and monitor environmental conditions.

3. Heathrow Terminal 5, London, UK
Heathrow Terminal 5 leveraged digital twin technology to create a state-of-the-art hub. With so many stakeholders, intricate designs, and tight deadlines, the digital twin gave the team a crystal-clear view of how things were unfolding, allowing them to navigate complexities in real time.

4. The Edge, Amsterdam, Netherlands
Known as one of the world's most sustainable buildings, The Edge used digital twin technology to achieve exceptional performance. The digital twin integrated various data sources, including occupancy, energy consumption, and indoor climate parameters, to create precise control over building systems.

Technology Integration

Digital twins rely on several key technologies:
- IoT sensors and devices
- Cloud computing platforms
- Advanced analytics and AI
- Real-time data processing
- Mobile and AR applications

Best Practices for Implementation

1. Ensure Regulatory Compliance
Digital twins should allow contractors to accelerate approvals and permits while generating testable plans more quickly, provided they are compliant with local laws and regulations.

2. Invest in Staff Training
Firms should introduce new training programs to reskill workers in the knowledge they'll need to make the most of digital twins. Cybersecurity training sessions may also be necessary for employees responsible for safeguarding proprietary information.

3. Develop Strategic Roadmap
Having a strategic blueprint that outlines how digital twins will help achieve the project's aims ensures all stakeholders are on the same page. Architectural roadmaps serve as reference points throughout the project lifecycle.

4. Integrate Relevant Technologies
Digital twins should seamlessly integrate with commonly used design software like SketchUp, Revit, and AutoCAD. By exporting point clouds, construction managers can share them easily within BIM tools.

5. Regular Scenario Testing
Use the digital twin to simulate various scenarios, such as changes in design or materials. This helps anticipate potential challenges and formulate solutions in advance.

Market Growth and Future Outlook

According to MarketsandMarkets, the digital twin market is estimated to grow from $3.1 billion in 2020 to $48.2 billion by 2026 at a compound annual growth rate (CAGR) of 58.9%. This proves that digital twin technology is a billion-dollar market.

The adoption of sustainable and energy-efficient buildings is driving increased demand for intelligent buildings, which is a huge uplift for digital twin integration in construction. Companies can simulate and optimize energy usage, reducing the carbon footprint of their buildings and improving overall sustainability.

Benefits and ROI

The implementation of digital twins provides significant benefits:
- Reduced maintenance costs
- Improved energy efficiency
- Enhanced occupant satisfaction
- Extended asset lifespan
- Better decision-making support

Digital twins represent a paradigm shift in how we approach building management, offering real-time insights and predictive capabilities that were previously impossible. As this technology continues to evolve, it will become an essential tool for modern construction and facility management.

Construction companies that embrace digital twin technology are poised to gain a significant competitive advantage. By leveraging digital twins, they can optimize construction schedules, reduce waste, improve safety, and save costs, making it an invaluable asset for the construction industry.`,
      author: 'David Kim',
      authorImage: '/logo.png',
      publishDate: '2024-12-28',
      readTime: '8 min read',
      category: 'Innovation',
      tags: ['Digital Twins', 'IoT', 'Monitoring', 'Predictive Analytics', 'Smart Buildings', 'Construction Technology'],
      image: '/Blog Photos/digital twins.webp'
    },
    {
      id: '5',
      title: 'BIM Standards and Protocols: Industry Best Practices',
      excerpt: 'A comprehensive guide to BIM standards, protocols, and best practices that ensure consistency and quality across all projects.',
      content: `BIM standards and protocols are essential for ensuring consistency, quality, and interoperability across construction projects. This comprehensive guide covers the key standards, protocols, and best practices that every BIM professional should understand and implement.

Essential BIM Standards

1. ISO 19650 Series
The international standard for BIM information management:
- ISO 19650-1: Concepts and principles
- ISO 19650-2: Delivery phase of assets
- ISO 19650-3: Operational phase of assets
- ISO 19650-4: Information exchange

2. National BIM Standards
Various countries have developed their own BIM standards:
- UK BIM Framework
- US National BIM Standard
- Singapore BIM Guide
- Australian BIM Guidelines

BIM Protocols and Execution Plans

1. BIM Execution Plans (BEP)
Essential documents that define:
- Project objectives and goals
- Team roles and responsibilities
- Modeling standards and requirements
- Quality assurance procedures

2. Information Delivery Manuals (IDM)
Define information requirements for:
- Specific project phases
- Stakeholder needs
- Information exchanges
- Quality criteria

Best Practices for Implementation

1. Standardization
- Consistent naming conventions
- Standardized object libraries
- Uniform modeling procedures
- Quality control checklists

2. Collaboration
- Clear communication protocols
- Regular coordination meetings
- Centralized information management
- Version control procedures

3. Quality Assurance
- Regular model reviews
- Automated quality checks
- Continuous improvement processes
- Training and certification programs

Technology and Tools

Modern BIM standards implementation relies on:
- Automated compliance checking
- Quality assurance tools
- Collaboration platforms
- Training and support systems

Implementing proper BIM standards and protocols is essential for project success, ensuring consistency, quality, and interoperability across all project phases and stakeholders.`,
      author: 'Lisa Thompson',
      authorImage: '/logo.png',
      publishDate: '2024-12-20',
      readTime: '8 min read',
      category: 'Standards',
      tags: ['Standards', 'Protocols', 'Quality', 'Compliance', 'ISO 19650'],
      image: '/Blog Photos/bim standards and protocols.gif'
    },
    {
      id: '6',
      title: 'Cost Estimation Accuracy: Leveraging BIM for Better Budgets',
      excerpt: 'How BIM technology is improving cost estimation accuracy and helping project managers stay within budget constraints.',
      content: `Accurate cost estimation is crucial for project success, and BIM technology has revolutionized how construction professionals approach budgeting and cost control. This article explores how BIM improves cost estimation accuracy and helps projects stay within budget.

Traditional vs. BIM-Based Cost Estimation

1. Traditional Methods
- Manual quantity takeoffs from 2D drawings
- Time-consuming and error-prone processes
- Limited integration with design changes
- Difficult to maintain consistency across projects

2. BIM-Based Methods
- Automated quantity extraction from 3D models
- Real-time updates with design changes
- Consistent measurement standards
- Integration with cost databases and historical data

BIM Cost Estimation Benefits

1. Accuracy Improvements
BIM-based estimation provides significantly improved accuracy through:
- Precise 3D model measurements
- Automated quantity calculations
- Reduced human error in takeoffs
- Consistent measurement standards

2. Time Savings
BIM technology dramatically reduces estimation time:
- Automated quantity extraction
- Real-time design change updates
- Integrated cost databases
- Streamlined reporting processes

3. Risk Reduction
BIM helps reduce cost estimation risks by:
- Early identification of design issues
- Better visualization of project scope
- Improved communication with stakeholders
- More accurate contingency planning

Advanced Cost Estimation Features

1. 5D BIM Integration
Modern BIM platforms integrate cost data directly into the 3D model:
- Real-time cost updates with design changes
- Automated quantity takeoffs
- Integrated cost databases
- Advanced cost modeling capabilities

2. Parametric Cost Modeling
BIM enables parametric cost modeling that:
- Automatically adjusts costs based on design parameters
- Provides instant cost feedback during design
- Enables rapid cost scenario analysis
- Supports value engineering decisions

3. Real-Time Cost Monitoring
BIM provides real-time cost monitoring throughout the project:
- Live cost tracking against budgets
- Automated variance reporting
- Early warning systems for cost overruns
- Integrated change order management

Implementation Strategies

1. Software Selection
Choose BIM software that offers:
- Robust cost estimation capabilities
- Integration with cost databases
- Automated quantity takeoff features
- Advanced reporting and analytics

2. Process Development
Establish clear processes for:
- Model-based quantity extraction
- Cost database integration
- Change management workflows
- Quality assurance procedures

3. Team Training
Invest in training for:
- BIM cost estimation tools
- Best practices and workflows
- Software-specific features
- Industry standards and protocols

BIM-based cost estimation provides significant advantages over traditional methods, offering improved accuracy, efficiency, and risk management. As technology continues to evolve, these benefits will only increase, making BIM an essential tool for modern cost estimation and project management.`,
      author: 'James Wilson',
      authorImage: '/logo.png',
      publishDate: '2024-12-15',
      readTime: '7 min read',
      category: 'Cost Management',
      tags: ['Cost Estimation', 'Budgeting', 'Quantity Takeoff', 'Financial Planning', '5D BIM'],
      image: '/Blog Photos/cost estimation.jpg'
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
            BIM <span className="text-blue-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with the latest industry trends, best practices, and technological innovations in BIM
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
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
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/30 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain"
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
                    <div className="text-center mb-4">
                      <p className="text-gray-400 text-sm">{formatDate(post.publishDate)} • {post.readTime}</p>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-4 text-center">
                      {post.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6 text-center">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPost(post);
                        }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        Read Full Article
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
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
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
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

                {/* Read More Button - Inside Card */}
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 relative z-50"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
                >
                  Read More
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            </div>
            
            {/* Remove the separate button container since it's now inside the card */}
            </div>
          ))}
        </div>

      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start p-8 border-b border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedPost.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {selectedPost.excerpt}
                </p>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Article Image */}
            <div className="p-8 pb-6">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    target.alt = 'Image not available';
                  }}
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-blue-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm border border-blue-400/30">
                    {selectedPost.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="px-8 mb-8">
              {/* Article Meta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Published</h4>
                  <p className="text-blue-200">{formatDate(selectedPost.publishDate)}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Read Time</h4>
                  <p className="text-blue-200">{selectedPost.readTime}</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4 text-lg">Tags</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm rounded-xl border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => {
                    setSelectedPost(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                >
                  Get BIM Services
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default BlogSection 