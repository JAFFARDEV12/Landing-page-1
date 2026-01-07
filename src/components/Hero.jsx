import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-gray-light to-white">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-[500px] h-[500px] bg-gamma-blue rounded-full blur-[80px] opacity-60 top-[-200px] right-[-100px] animate-float"></div>
        <div className="absolute w-[400px] h-[400px] bg-aqua-marine rounded-full blur-[80px] opacity-60 bottom-[-150px] left-[-100px] animate-float-delay-5"></div>
        <div className="absolute w-[300px] h-[300px] bg-gamma-dust rounded-full blur-[80px] opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-delay-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gamma-dark mb-6 leading-tight">
            Revolutionize Your
            <span className="block text-gamma-blue relative">
              Payment Experience
              <span className="absolute bottom-2.5 left-0 w-full h-2 bg-aqua-marine/30 -z-10"></span>
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 lg:mb-10 leading-relaxed font-normal">
            Paiment delivers cutting-edge payment solutions that transform how businesses 
            process transactions. Experience seamless integration, advanced security, and 
            unparalleled performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 lg:mb-16">
            <button className="bg-gamma-blue text-white border-none px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 hover:bg-gamma-dust hover:-translate-y-1 hover:shadow-xl hover:shadow-gamma-blue/30 font-roboto shadow-lg shadow-gamma-blue/30">
              Start Free Trial
            </button>
            <button className="bg-transparent text-gamma-blue border-2 border-gamma-blue px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 hover:bg-gamma-blue hover:text-white hover:-translate-y-1 font-roboto">
              Watch Demo
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gamma-blue mb-2">99.9%</div>
              <div className="text-base text-slate-600 font-normal">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gamma-blue mb-2">10M+</div>
              <div className="text-base text-slate-600 font-normal">Transactions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gamma-blue mb-2">500+</div>
              <div className="text-base text-slate-600 font-normal">Partners</div>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] animate-fade-in hidden lg:block">
          <div className="absolute top-[20%] left-[10%] bg-white rounded-2xl p-8 shadow-xl shadow-gamma-blue/15 flex flex-col items-center gap-4 animate-float-card">
            <div className="font-bold text-gamma-dark text-lg">Secure</div>
          </div>
          <div className="absolute top-[50%] right-[10%] bg-white rounded-2xl p-8 shadow-xl shadow-gamma-blue/15 flex flex-col items-center gap-4 animate-float-card-delay-2">
            <div className="font-bold text-gamma-dark text-lg">Fast</div>
          </div>
          <div className="absolute bottom-[10%] left-[20%] bg-white rounded-2xl p-8 shadow-xl shadow-gamma-blue/15 flex flex-col items-center gap-4 animate-float-card-delay-4">
            <div className="font-bold text-gamma-dark text-lg">Reliable</div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float-delay-5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float-delay-10 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(calc(-50% + 30px), calc(-50% - 30px)) scale(1.1); }
          66% { transform: translate(calc(-50% - 20px), calc(-50% + 20px)) scale(0.9); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float { animation: float 20s infinite ease-in-out; }
        .animate-float-delay-5 { animation: float 20s infinite ease-in-out 5s; }
        .animate-float-delay-10 { animation: float 20s infinite ease-in-out 10s; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out 0.3s both; }
        .animate-float-card { animation: float-card 6s infinite ease-in-out; }
        .animate-float-card-delay-2 { animation: float-card 6s infinite ease-in-out 2s; }
        .animate-float-card-delay-4 { animation: float-card 6s infinite ease-in-out 4s; }
      `}</style>
    </section>
  )
}

export default Hero
