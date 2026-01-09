import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "(323) 372-7509",
    subtext: "Mon-Fri 7am-6pm",
    href: "tel:+13233727509",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "Admin@echolinemarking.com",
    subtext: "We respond within 24 hours",
    href: "mailto:Admin@echolinemarking.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: "Greater Metro Area",
    subtext: "50+ mile service radius",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "Same-Day Quotes",
    subtext: "Fast, reliable service",
    href: null,
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-asphalt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              Get Your{" "}
              <span className="text-teal">Free Quote</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Ready to transform your parking lot? Give us a call or send an email for a free, no-obligation quote. 
              We'll respond within 24 hours.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-teal" />
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Contact CTA */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Contact us directly for the fastest response. We're here to help with all your parking lot striping needs.
              </p>
              
              {/* Big Contact Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <a 
                  href="tel:+13233727509"
                  className="group bg-teal hover:bg-teal-hover text-white rounded-2xl p-8 transition-all duration-300 shadow-teal hover:shadow-lg"
                >
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold mb-2">Call Us Now</h3>
                  <p className="text-3xl font-display font-bold">(323) 372-7509</p>
                  <p className="text-white/80 text-sm mt-2">Mon-Fri 7am-6pm</p>
                </a>
                
                <a 
                  href="mailto:Admin@echolinemarking.com"
                  className="group bg-card border-2 border-teal hover:bg-teal/10 rounded-2xl p-8 transition-all duration-300"
                >
                  <Mail className="w-12 h-12 mx-auto mb-4 text-teal" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Email Us</h3>
                  <p className="text-xl font-medium text-teal">Admin@echolinemarking.com</p>
                  <p className="text-muted-foreground text-sm mt-2">We respond within 24 hours</p>
                </a>
              </div>
            </div>

            {/* Additional Info Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-muted rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <info.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.href ? (
                    <a href={info.href} className="text-lg font-medium text-teal hover:underline">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-foreground">{info.details}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              ))}
            </div>

            {/* What to Expect */}
            <div className="bg-asphalt rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-bold text-white mb-6 text-center">
                What to Expect
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Free on-site assessment available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Detailed, transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">No obligation to proceed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
