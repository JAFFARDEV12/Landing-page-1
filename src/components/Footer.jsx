import React from 'react'
import logo1 from './logo 1.png'
import logo2 from './logo 2.png'

const Footer = () => {
  return (
    <footer className="bg-gamma-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <img 
              src={logo2} 
              alt="Logo" 
              className="hidden lg:block h-20 w-auto"
            />
            <img 
              src={logo1} 
              alt="Logo" 
              className="hidden md:block lg:hidden h-10 w-auto"
            />
            <img 
              src={logo1} 
              alt="Logo" 
              className="block md:hidden h-8 w-auto"
            />
            <p className="text-gray-400 text-sm font-normal">
              Advanced payment solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-400 text-sm font-normal">© 2026 Paiment. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

