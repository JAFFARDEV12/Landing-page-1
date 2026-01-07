import React from 'react'

const Partners = () => {
  const partnerLogos = [
    'aws.png',
    'logo-paysafe.svg',
    'Worldpay_logo_c_rgb.svg',
    'Finix.png',
    'geocomply.png',
    'sumsub.png',
    'pragmatic play.png',
    'optimove.png',
    'customerio.svg',
    'intercom.jpg',
    'chargebacks911.svg',
    'seon-full-1.svg'
  ]

  return (
    <section id="partners" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gamma-dark mb-4">Trusted by Industry Leaders</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal">
            Join hundreds of companies that trust Paiment for their payment processing
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-center">
          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-white rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gamma-blue/10 h-24"
            >
              <a>{`Partner ${index + 1}`}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
