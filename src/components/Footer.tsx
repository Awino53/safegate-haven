import { Shield, ShieldCheck, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-safenet-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <Shield size={32} className="text-safenet-blue" />
                <ShieldCheck size={20} className="absolute top-1.5 left-1.5 text-safenet-orange" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white">
                  SafeNet
                </span>
                <span className="text-xs text-gray-400 -mt-1">
                  SOLUTIONS
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Cutting-edge cybersecurity & web development solutions to protect your business in an evolving digital world.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-safenet-blue/80 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-safenet-blue/80 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-safenet-blue/80 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-safenet-blue/80 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cybersecurity Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Secure Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">IT Networking & Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Secure Data Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-safenet-orange" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=estherojul53@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  estherojul53@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-safenet-orange" />
                <span className="text-gray-300">
                  +254 799 091 398<br />
                  +254 727 422 094
                </span>
              </div>
            </div>
            
            <h3 className="text-lg font-display font-semibold mb-3">Subscribe</h3>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white"
              />
              <Button variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 text-center">
            © {currentYear} SafeNet IT Solutions | Secure Your Digital Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
