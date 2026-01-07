import React from 'react'

const Features = () => {
  const features = [
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards to protect your transactions.'
    },
    {
      title: 'Lightning Fast',
      description: 'Process thousands of transactions per second with our optimized infrastructure.'
    },
    {
      title: 'Global Reach',
      description: 'Accept payments from over 190 countries with multi-currency support.'
    },
    {
      title: 'Advanced Analytics',
      description: 'Real-time insights and comprehensive reporting to optimize your payment flow.'
    },
    {
      title: 'Easy Integration',
      description: 'Simple APIs and SDKs that integrate seamlessly with your existing systems.'
    },
    {
      title: 'Multiple Methods',
      description: 'Support for credit cards, digital wallets, bank transfers, and more.'
    }
  ]

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gamma-dark mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal">
            Everything you need to streamline payments and grow your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-medium rounded-2xl p-6 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gamma-blue/15 hover:border-gamma-blue"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-gamma-dark mb-3 lg:mb-4">{feature.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
