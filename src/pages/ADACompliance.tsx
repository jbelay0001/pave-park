import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, AlertTriangle, FileText, Ruler } from "lucide-react";
import adaImage from "@/assets/ada-striping.jpg";

const adaRequirements = [
  {
    title: "Parking Space Dimensions",
    items: [
      "Standard accessible spaces: 8 feet wide minimum",
      "Van-accessible spaces: 11 feet wide minimum",
      "Access aisles: 5 feet wide minimum (8 feet for vans)",
    ],
  },
  {
    title: "Number of Spaces Required",
    items: [
      "1-25 total spaces: 1 accessible space required",
      "26-50 total spaces: 2 accessible spaces required",
      "51-75 total spaces: 3 accessible spaces required",
      "One in every 6 accessible spaces must be van-accessible",
    ],
  },
  {
    title: "Signage Requirements",
    items: [
      "International Symbol of Accessibility on signs",
      "Signs mounted 60 inches minimum above ground",
      "Van-accessible spaces clearly marked",
      "Fine amounts clearly displayed where required",
    ],
  },
];

const services = [
  {
    icon: Ruler,
    title: "Precise Measurements",
    description: "Every space is measured and marked to exact ADA specifications, ensuring full compliance.",
  },
  {
    icon: FileText,
    title: "Compliance Documentation",
    description: "We provide documentation of all work performed for your records and inspections.",
  },
  {
    icon: AlertTriangle,
    title: "Violation Prevention",
    description: "Stay ahead of costly fines with proper marking that meets current federal standards.",
  },
];

export default function ADACompliance() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-asphalt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              ADA & Compliance Striping
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              ADA-Compliant Striping{" "}
              <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Protect your business from costly violations with professional ADA-compliant parking lot striping. 
              We ensure every space meets current federal accessibility requirements.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Compliance Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
      </section>

      {/* Why ADA Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why It Matters
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                The Cost of Non-Compliance
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                ADA violations can result in significant financial penalties and legal liability. 
                More importantly, proper accessibility ensures all customers can safely access your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">First-Time Violations</h4>
                    <p className="text-sm text-muted-foreground">Fines up to $75,000 for first-time ADA violations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Repeat Violations</h4>
                    <p className="text-sm text-muted-foreground">Fines up to $150,000 for subsequent violations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={adaImage} 
                alt="ADA compliant handicap parking space" 
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Complete Compliance Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADA Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Know The Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              ADA Parking Requirements
            </h2>
            <p className="text-muted-foreground text-lg">
              Understanding the requirements helps you ensure your lot is fully compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adaRequirements.map((req, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display font-bold text-lg mb-4 text-foreground">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-asphalt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Don't Risk Non-Compliance
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let our experts assess your parking lot and ensure you meet all current ADA requirements. 
              Free assessments available.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Schedule Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
