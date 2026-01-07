import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gamma-blue to-gamma-dust relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-0 right-0"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Transform Your Payment Processing?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed font-normal">
            Join thousands of businesses already using Paiment to streamline their payments 
            and boost their revenue. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="bg-white text-gamma-blue border-none px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 hover:bg-gray-light hover:-translate-y-1 hover:shadow-xl font-roboto">
              Start Free Trial
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-gamma-blue hover:-translate-y-1 font-roboto">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
