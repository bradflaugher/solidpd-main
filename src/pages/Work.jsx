import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'

const Work = () => {
  const portfolioItems = [
    {
      title: 'Urgenie',
      description: 'A complete in-home early platform for home of a delivery use about an pet-based family repair team',
      category: 'Healthcare Technology',
      image: 'urgenie-placeholder',
      tags: ['IoT', 'Mobile App', 'Hardware']
    },
    {
      title: 'Neuralert',
      description: 'Stroke Detection Wearable',
      category: 'Medical Device',
      image: 'neuralert-placeholder',
      tags: ['Wearable', 'AI/ML', 'Medical']
    },
    {
      title: 'Measure',
      description: 'Postpartum Measuring Device',
      category: 'Healthcare',
      image: 'measure-placeholder',
      tags: ['Medical Device', 'Women\'s Health', 'Sensors']
    },
    {
      title: 'Rezzi',
      description: 'IoT Waste Management Device',
      category: 'Smart City',
      image: 'rezzi-placeholder',
      tags: ['IoT', 'Sustainability', 'Smart Cities']
    },
    {
      title: 'RxWear',
      description: 'Wearable Medication Dosing',
      category: 'Healthcare Technology',
      image: 'rxwear-placeholder',
      tags: ['Wearable', 'Medication', 'Healthcare']
    },
    {
      title: 'Laminitis',
      description: 'Veterinarian Device',
      category: 'Veterinary Technology',
      image: 'laminitis-placeholder',
      tags: ['Veterinary', 'Diagnostics', 'Animal Health']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Work</h1>
          <p className="text-xl mb-4">Intuitive • Impactful • Innovative</p>
          <p className="text-lg leading-relaxed">
            We partner with clients driven to solve problems and create products 
            that make a real impact. Their vision inspires us to push the boundaries 
            of what's possible. Creativity and innovation are at the heart of everything 
            we do, resulting in products that truly resonate.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-gray-200 rounded-lg overflow-hidden portfolio-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">
                  {/* Image Section */}
                  <div className="bg-gray-300 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-lg">
                          {item.title.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-gray-600 text-sm">{item.image}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h2>
                      <p className="text-sm text-blue-600 font-medium mb-4">{item.category}</p>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Product
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Every project follows our proven methodology that balances creativity with 
            systematic execution. From initial concept through market launch, we ensure 
            each phase builds upon the last to create products that exceed expectations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-sm text-gray-600">Research and strategy to understand your market and users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-sm text-gray-600">Create intuitive experiences and compelling visual design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Develop</h3>
              <p className="text-sm text-gray-600">Engineer robust solutions with scalable architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-sm text-gray-600">Launch and optimize for maximum market impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have a project in mind? We'd love to hear about your vision and explore 
            how we can help bring it to life.
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

export default Work
