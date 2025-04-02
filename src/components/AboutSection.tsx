import React from 'react';
import { Shield, Check, Clock, Users, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-safenet-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-safenet-blue/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-1 border border-gray-100">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cybersecurity experts" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:bottom-6 md:left-6 bg-white rounded-lg shadow-lg p-4 w-48">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-safenet-blue/10 flex items-center justify-center">
                  <Shield size={20} className="text-safenet-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold">24/7 Protection</p>
                  <p className="text-xs text-safenet-gray">Always on guard</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 md:top-6 md:right-6 bg-white rounded-lg shadow-lg p-4 w-48">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-safenet-orange/10 flex items-center justify-center">
                  <Zap size={20} className="text-safenet-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Fast Response</p>
                  <p className="text-xs text-safenet-gray">Quick solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About <span className="gradient-text">SafeNet</span> Solutions
            </h2>
            
            <p className="text-safenet-gray text-lg mb-6 leading-relaxed">
              At SafeNet Solutions, we specialize in <strong>cybersecurity</strong>, <strong>secure web development</strong>, and <strong>IT services</strong>, helping businesses and individuals protect their digital assets while building high-performance websites and systems.
            </p>
            
            <p className="text-safenet-gray text-lg mb-8 leading-relaxed">
              Whether you need <strong>robust cybersecurity solutions</strong> to safeguard your sensitive data or a <strong>professionally crafted website</strong> with built-in security, we have the expertise to deliver. Our team ensures that your online presence is <strong>fast, functional, and fortified</strong> against evolving cyber threats.
            </p>
            
            <h3 className="text-xl font-display font-semibold mb-4">Why Choose SafeNet?</h3>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-safenet-darkBlue"><strong>Secure & Scalable Web Development</strong> – Websites optimized for speed, UX, and security.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-safenet-darkBlue"><strong>Cybersecurity-First Approach</strong> – Every project integrates strong security measures.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-safenet-darkBlue"><strong>24/7 Threat Monitoring</strong> – Continuous protection against malware, DDoS attacks, and breaches.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-safenet-darkBlue"><strong>Custom IT Solutions</strong> – Tailored services to meet your specific business needs.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-safenet-darkBlue"><strong>Client-Centric Innovation</strong> – We focus on usability, performance, and security.</p>
              </div>
            </div>
            
            <Button size="lg" onClick={scrollToContact}>
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
