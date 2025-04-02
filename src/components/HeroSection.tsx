
import { Shield, Lock, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-white"></div>
      
      <div className="absolute top-1/3 right-0 w-1/2 h-1/2 -z-10 bg-safenet-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 -z-10 bg-safenet-orange/5 rounded-full blur-3xl"></div>
      
      {/* Floating security icons */}
      <div className="absolute top-1/4 left-1/6 animate-float opacity-20">
        <Lock size={32} className="text-safenet-blue" />
      </div>
      <div className="absolute bottom-1/4 right-1/6 animate-float animation-delay-2000 opacity-20">
        <Server size={32} className="text-safenet-orange" />
      </div>
      <div className="absolute top-2/3 left-1/3 animate-float animation-delay-1000 opacity-20">
        <Shield size={32} className="text-safenet-blue" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float animation-delay-3000 opacity-20">
        <Globe size={32} className="text-safenet-orange" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-gray-200">
            <span className="text-safenet-gray text-sm font-medium">Your Digital Security Partner</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Secure Your Digital Future With <span className="gradient-text">SafeNet Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-safenet-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge cybersecurity & web development solutions to protect your business in an evolving digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Free Consultation
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-3">
                <Shield size={24} className="text-safenet-blue" />
              </div>
              <h3 className="font-medium">Advanced Protection</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-3">
                <Lock size={24} className="text-safenet-blue" />
              </div>
              <h3 className="font-medium">Data Security</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-3">
                <Server size={24} className="text-safenet-blue" />
              </div>
              <h3 className="font-medium">Secure Hosting</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-3">
                <Globe size={24} className="text-safenet-blue" />
              </div>
              <h3 className="font-medium">Global Support</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
