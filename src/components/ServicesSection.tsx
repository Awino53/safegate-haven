
import { ShieldCheck, Globe, Server, Cpu, Database, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Lock className="h-10 w-10 text-safenet-orange" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection with 24/7 security monitoring, penetration testing, vulnerability assessments, and robust data protection strategies.",
      features: ["Threat Detection", "Vulnerability Assessment", "Data Protection", "Security Consulting"]
    },
    {
      icon: <Globe className="h-10 w-10 text-safenet-blue" />,
      title: "Secure Web Development",
      description: "Custom-built, secure websites with built-in protection, SEO optimization, responsive design, and performance tuning for optimal user experience.",
      features: ["Secure Coding", "SSL Implementation", "SEO Optimization", "Mobile Responsive"]
    },
    {
      icon: <Server className="h-10 w-10 text-safenet-orange" />,
      title: "IT Networking & Support",
      description: "Reliable IT infrastructure setup, network security, troubleshooting, and ongoing maintenance to keep your systems running smoothly.",
      features: ["Network Setup", "Troubleshooting", "Maintenance", "IT Consulting"]
    },
    {
      icon: <Database className="h-10 w-10 text-safenet-blue" />,
      title: "Secure Data Management",
      description: "Protect your sensitive information with secure data storage solutions, backup systems, and data recovery services.",
      features: ["Data Encryption", "Secure Backups", "Recovery Services", "Compliance Support"]
    },
    {
      icon: <Cpu className="h-10 w-10 text-safenet-orange" />,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with advanced protection for SaaS, PaaS, and IaaS environments against modern threats.",
      features: ["Cloud Assessment", "Security Monitoring", "Access Controls", "Compliance"]
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-safenet-blue" />,
      title: "Security Training",
      description: "Empower your team with security awareness training to recognize and prevent social engineering attacks and security breaches.",
      features: ["Awareness Training", "Phishing Simulations", "Best Practices", "Ongoing Education"]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-gray-50 opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-safenet-gray">
            Comprehensive security and technology solutions to protect and enhance your digital presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-display font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-safenet-gray mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-safenet-blue"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
