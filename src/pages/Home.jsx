import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Award, Target } from 'lucide-react'

const Home = () => {
  const stats = [
    { number: '50+', label: 'Projects', sublabel: 'Delivered' },
    { number: '100%', label: 'Success Rate', sublabel: 'Based on our Clients' },
    { number: 'Multiple', label: 'Awards', sublabel: 'Recognized Excellence' }
  ]

  const clients = [
    'Urgenie', 'Neuralert', 'Measure', 'Rezzi', 'RxWear', 'Laminitis'
  ]

  const services = [
    { title: 'Research & Strategy', icon: Target },
    { title: 'Design', icon: Users },
    { title: 'Engineering', icon: Award },
    { title: 'Manufacturing', icon: ArrowRight }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">
                  Electrical Engineers • Mechanical Engineers • Industrial Designers • 
                  Software Engineers • We Engineer Products That Ship
                </p>
                <p className="text-sm text-blue-600 font-medium">Here that's Solid.</p>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Creating a
                <br />
                <span className="relative">
                  S
                  <span className="inline-block bg-yellow-400 text-black px-2 py-1 mx-2 transform -rotate-12">
                    OLID
                  </span>
                </span>
                <br />
                foundation for your
                <br />
                next idea.
              </h1>
            </div>

            {/* Right Content - Product Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-200 h-32 rounded-lg"></div>
                  <div className="bg-gray-300 h-24 rounded-lg"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gray-300 h-24 rounded-lg"></div>
                  <div className="bg-gray-200 h-32 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small By Design Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Small By Design</h2>
          </div>
          <p className="text-lg leading-relaxed">
            Small by design and purposeful in practice, we are a product design 
            consultancy focused on creating innovative solutions that make a real 
            impact. Our lean approach allows us to move quickly while maintaining 
            the highest standards of quality and craftsmanship in everything we 
            create. We believe in the power of thoughtful design to transform 
            ideas into products that truly resonate.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-orange-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether working with startups or established companies with an 
            entrepreneurial mindset, we bring deep technical expertise combined with 
            design-led results that drive business success. Through our 
            partnerships, we've helped launch products that have generated millions 
            in revenue and created lasting impact in their respective markets. 
            We're committed to reducing risk and maximizing learning for our clients.
          </p>
        </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-lift cursor-pointer">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-gray-600 transition-colors duration-300 group-hover:text-blue-600" />
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-200 h-24 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover-lift cursor-pointer">
                <span className="font-semibold text-gray-600">{client}</span>
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
            Get in touch to talk about what collaboration with Solid Product Design could look like for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-3 text-lg">
              Schedule a Call
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover-lift">
              Send a Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
