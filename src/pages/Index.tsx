import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-parking.jpg";
import adaImage from "@/assets/ada-striping.jpg";

const services = [
  {
    title: "Parking Space Striping",
    description: "Crisp, durable lines that maximize your lot's capacity and improve traffic flow.",
  },
  {
    title: "ADA Compliance Marking",
    description: "Fully compliant handicap spaces, access aisles, and signage to meet federal standards.",
  },
  {
    title: "Fire Lane Marking",
    description: "Highly visible fire lane striping that keeps your property safe and code-compliant.",
  },
  {
    title: "Custom Stenciling",
    description: "Arrows, symbols, numbers, and custom logos to enhance navigation and branding.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "ADA Compliant",
    description: "All work meets or exceeds federal accessibility requirements.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Minimal disruption to your business with efficient completion.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "Premium traffic-grade paints for long-lasting results.",
  },
  {
    icon: CheckCircle,
    title: "Fully Licensed",
    description: "Insured and certified professionals you can trust.",
  },
];

const stats = [
  { value: "100%", label: "Compliance Rate" },
  { value: "24hr", label: "Quote Response" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/90 to-asphalt/60" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-teal text-sm font-medium">Professional Parking Lot Striping</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Precision Lines.{" "}
              <span className="text-teal">Lasting Impressions.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Expert parking lot striping that keeps your property safe, accessible, and looking professional. 
              ADA-compliant. Fast turnaround. Exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Teal stripe decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-teal" />
      </section>

      {/* Stats Section */}
      <section className="bg-asphalt py-12 border-b border-teal/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-teal mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Complete Striping Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From standard parking spaces to complex ADA requirements, we deliver precision striping for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-teal/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <div className="w-6 h-1 bg-teal rounded-full" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/ada-compliance">
                Learn About ADA Compliance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                The <span className="text-teal">Echoline Marking</span> Difference
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With years of hands-on experience, we've perfected the art of parking lot striping. 
                Our commitment to quality, compliance, and customer satisfaction sets us apart.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={adaImage} 
                alt="ADA compliant parking space striping" 
                className="rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-teal text-white p-6 rounded-xl shadow-teal">
                <div className="text-3xl font-display font-bold">100%</div>
                <div className="text-sm font-medium">ADA Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-asphalt relative overflow-hidden">
        <div className="absolute inset-0 stripe-pattern animate-stripe opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Parking Lot?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Get a free, no-obligation quote today. We'll assess your needs and provide a detailed estimate within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/who-we-serve">See Who We Serve</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
