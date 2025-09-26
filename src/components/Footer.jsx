import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gray-500 px-4 py-2 rounded">Menu</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-gray-300 transition-colors">Home</Link>
              <Link to="/work" className="block hover:text-gray-300 transition-colors">Work</Link>
              <Link to="/services" className="block hover:text-gray-300 transition-colors">Services</Link>
              <Link to="/about" className="block hover:text-gray-300 transition-colors">About</Link>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gray-500 px-4 py-2 rounded">Location</h3>
            <div className="text-sm">
              <p>2212 Walnut Street</p>
              <p>Philadelphia PA, 19103</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gray-500 px-4 py-2 rounded">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="text-xs font-bold tracking-wider">
              <div className="flex items-center space-x-1">
                <span className="bg-white text-gray-800 px-1 py-0.5 text-xs">S</span>
                <span>OLID PRODUCT DEVELOPMENT</span>
              </div>
            </div>
            <span>Copyright © 2025.</span>
          </div>
          
          <div className="flex space-x-6 text-xs">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
