import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-gray-100 px-6 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-sm font-bold tracking-wider text-gray-800">
            <div className="flex items-center space-x-1">
              <span className="bg-gray-800 text-white px-1 py-0.5 text-xs">S</span>
              <span>OLID</span>
            </div>
            <div className="text-xs mt-0.5 tracking-widest">
              PRODUCT DESIGN
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                location.pathname === item.path
                  ? 'text-gray-800 border-b-2 border-gray-800 pb-1'
                  : 'text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
