
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `New message from SafeNet website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/254799091398?text=${whatsappMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: "Message Ready to Send",
      description: "You'll be redirected to WhatsApp to complete sending your message.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Contact <span className="gradient-text">SafeNet</span>
            </h2>
            
            <p className="text-safenet-gray text-lg mb-8 leading-relaxed">
              Ready to secure your digital future? Get in touch with our team of security experts. We're here to help protect your business from evolving cyber threats.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-safenet-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-safenet-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:estherojul53@gmail.com" className="text-safenet-gray hover:text-safenet-blue transition-colors">
                    estherojul53@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-safenet-orange/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-safenet-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-safenet-gray">+254 799 091 398</p>
                  <p className="text-safenet-gray">+254 727 422 094</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-safenet-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-safenet-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-safenet-gray">Eldoret, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-safenet-orange/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-safenet-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <div className="flex flex-col gap-2 mt-2">
                    <a 
                      href="https://wa.me/254799091398?text=Hello%20SafeNet,%20I%20need%20your%20services!" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition-colors w-fit"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Chat (0799 091 398)
                    </a>
                    <a 
                      href="https://wa.me/254727422094?text=Hello%20SafeNet,%20I%20need%20your%20services!" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition-colors w-fit"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Chat (0727 422 094)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-2xl font-display font-semibold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-safenet-gray mb-1">
                  Full Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your name" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-safenet-gray mb-1">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="your.email@example.com" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-safenet-gray mb-1">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Your phone number" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-safenet-gray mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="How can we help you?" 
                  rows={4} 
                  required
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center gap-2">
                <Send className="h-4 w-4" />
                Send Message to WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
