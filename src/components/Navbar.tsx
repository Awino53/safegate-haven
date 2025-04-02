
import { useState, useEffect } from 'react';
import { Menu, X, Shield, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <Shield size={32} className="text-safenet-blue" />
            <ShieldCheck size={20} className="absolute top-1.5 left-1.5 text-safenet-orange" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-safenet-darkBlue">
              SafeNet
            </span>
            <span className="text-xs text-safenet-gray -mt-1">
              SOLUTIONS
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#hero" className="text-safenet-darkBlue hover:text-safenet-blue transition-colors">Home</a>
          <a href="#about" className="text-safenet-darkBlue hover:text-safenet-blue transition-colors">About</a>
          <a href="#services" className="text-safenet-darkBlue hover:text-safenet-blue transition-colors">Services</a>
          <a href="#contact" className="text-safenet-darkBlue hover:text-safenet-blue transition-colors">Contact</a>
          <Button>
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-safenet-darkBlue" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#hero" className="text-safenet-darkBlue py-2 border-b border-gray-200" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-safenet-darkBlue py-2 border-b border-gray-200" onClick={toggleMenu}>About</a>
          <a href="#services" className="text-safenet-darkBlue py-2 border-b border-gray-200" onClick={toggleMenu}>Services</a>
          <a href="#contact" className="text-safenet-darkBlue py-2" onClick={toggleMenu}>Contact</a>
          <Button className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
