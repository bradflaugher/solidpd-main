import { Button } from '@/components/ui/button'
import { Globe, Users, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      specialty: 'Product Strategy',
      avatar: 'AJ',
      bio: 'Former Apple engineer with 15+ years in product development'
    },
    {
      name: 'Sarah Chen',
      role: 'Design Director',
      specialty: 'Industrial Design',
      avatar: 'SC',
      bio: 'Award-winning designer specializing in consumer electronics'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Engineering Lead',
      specialty: 'Hardware Engineering',
      avatar: 'MR',
      bio: 'Expert in embedded systems and IoT product development'
    },
    {
      name: 'Emily Davis',
      role: 'Manufacturing Partner',
      specialty: 'Supply Chain',
      avatar: 'ED',
      bio: 'Global manufacturing expertise with Fortune 500 experience'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About</h1>
          <p className="text-xl leading-relaxed">
            Passionate • Curious • Relentless
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            We are a team of engineers, designers, and strategists who believe in the power 
            of thoughtful product development. Our mission is to help innovative companies 
            bring breakthrough products to market faster and more efficiently than ever before.
          </p>
        </div>
      </section>

      {/* Company Image Placeholder */}
      <section className="py-0">
        <div className="bg-gray-300 h-64 flex items-center justify-center">
          <span className="text-gray-600 text-lg">Company Image Placeholder</span>
        </div>
      </section>

      {/* From The Workshop to the WORLD Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            From The
            <br />
            <span className="text-6xl">Workshop</span>
            <br />
            <span className="text-2xl">to the</span>
            <br />
            <span className="text-6xl">WORLD.</span>
          </h2>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Working out of 222 Walnut Street in historic center city 
            Philadelphia, we've built a reputation for delivering exceptional 
            results across diverse industries. Our world-class facility offers cutting-
            edge prototyping capabilities and a creative environment that fosters 
            innovation at every step of the product development process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Workshop Image 1</span>
            </div>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Workshop Image 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Small Team, Big Value Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <span className="text-blue-600">Small Team</span>, Big Value
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            We are a small, agile team focused on delivering exceptional results 
            every time. We're about quality over quantity, and building strong 
            partnerships with our clients that last for years. Our lean structure 
            allows us to move quickly while maintaining the personal attention 
            and craftsmanship that sets us apart from larger agencies.
          </p>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center team-card">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center hover:bg-gray-400 transition-colors duration-300">
                  <span className="text-2xl font-bold text-gray-600">{member.avatar}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.specialty}</p>
                <p className="text-xs text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts in All Thing That Ship Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Experts in All Thing That <span className="text-blue-600">Ship</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            We are built our expertise by working products across a wide range 
            of industries. Whether it's a ground-up a new product concept for a 
            startup or helping an established company optimize their existing 
            product line, we have the experience to anticipate and solve problems before they 
            arise, helping you reach and serve potential customers faster than 
            you thought possible.
          </p>
        </div>
      </section>

      {/* Startup Mentality Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <span className="text-blue-600">Startup</span> Mentality
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether working with startups or established companies with an 
            entrepreneurial mindset, we bring the same energy and urgency to 
            every project. We understand the importance of speed to market, 
            resource constraints, and the need to validate assumptions quickly. 
            Our startup mentality means we're not just service providers—we're 
            partners invested in your success and committed to helping you 
            achieve your goals as efficiently as possible.
          </p>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to learn more about how we can help accelerate your product development? 
            Let's start a conversation about your next big idea.
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

export default About
