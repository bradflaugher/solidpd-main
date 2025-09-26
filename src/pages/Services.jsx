import { Button } from '@/components/ui/button'
import { Check, ArrowLeft, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Research and Strategy',
      description: 'We begin every project with comprehensive research to understand your market, users, and competitive landscape. Our strategic approach ensures that design decisions are grounded in data and aligned with business objectives.',
      color: 'bg-gray-100'
    },
    {
      title: 'Design',
      description: 'Our design process combines user-centered thinking with technical feasibility. We create intuitive interfaces and compelling user experiences that drive engagement and deliver measurable results.',
      color: 'bg-gray-200'
    },
    {
      title: 'Engineering',
      description: 'Our engineering team brings designs to life with clean, scalable code. We focus on performance, accessibility, and maintainability to ensure your product can grow with your business.',
      color: 'bg-gray-100'
    },
    {
      title: 'Manufacturing',
      description: 'We bridge the gap between design and production, working closely with manufacturing partners to ensure your product can be built efficiently and cost-effectively at scale.',
      color: 'bg-gray-200'
    }
  ]

  const packages = [
    {
      title: 'Innovation Sprint',
      subtitle: 'Ready Today',
      price: '$7,500',
      duration: '2 weeks',
      description: 'Perfect for validating new product concepts and exploring market opportunities.',
      features: [
        'Market research and competitive analysis',
        'User persona development',
        'Concept ideation and validation',
        'Initial prototype development',
        'Technical feasibility assessment',
        'Go-to-market strategy outline'
      ],
      highlight: false
    },
    {
      title: 'Early Prototypes',
      subtitle: 'Ready Today',
      price: '$20,000',
      duration: '4-6 weeks',
      description: 'Comprehensive prototype development to test and refine your product concept.',
      features: [
        'Detailed user research',
        'Interactive prototype development',
        'User testing and feedback integration',
        'Technical architecture planning',
        'Design system creation',
        'Manufacturing consultation'
      ],
      highlight: false
    },
    {
      title: 'Co-Development',
      subtitle: 'Ready Today',
      price: 'Custom',
      duration: 'Ongoing',
      description: 'Full partnership for complete product development from concept to market.',
      features: [
        'End-to-end product development',
        'Dedicated team assignment',
        'Regular milestone reviews',
        'Manufacturing partnership',
        'Quality assurance testing',
        'Launch support and optimization'
      ],
      highlight: false
    },
    {
      title: 'Principal Collaborator',
      subtitle: 'Pricing on Ask',
      price: 'Custom',
      duration: 'Flexible',
      description: 'Strategic partnership for complex, high-impact product initiatives.',
      features: [
        'Executive-level strategic guidance',
        'Cross-functional team leadership',
        'Investor presentation support',
        'Regulatory compliance guidance',
        'International market expansion',
        'Long-term product roadmap'
      ],
      highlight: true
    }
  ]

  const testimonials = [
    {
      quote: "Working with Solid Product Design transformed our approach to product development. Their expertise and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      avatar: "SJ"
    },
    {
      quote: "The team's ability to balance innovation with practical constraints helped us launch our product on time and under budget.",
      author: "Michael Chen",
      company: "Innovation Labs",
      avatar: "MC"
    },
    {
      quote: "Their strategic guidance was invaluable in navigating the complexities of bringing a hardware product to market.",
      author: "Emily Rodriguez",
      company: "NextGen Devices",
      avatar: "ER"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Services</h1>
          <p className="text-xl leading-relaxed">
            We offer comprehensive product development services from initial concept 
            through manufacturing and launch. Our integrated approach ensures seamless 
            execution across all phases of your product journey.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <section key={index} className={`py-16 px-6 ${service.color}`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Testimonials</h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-gray-600">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-sm ${pkg.highlight ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">{pkg.subtitle}</p>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-600 mb-4">{pkg.duration}</p>
                  <p className="text-sm text-gray-700">{pkg.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full ${pkg.highlight ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to start your next project? Let's discuss how we can help bring your product vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3">
              Schedule a Call
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-3">
              Send a Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
