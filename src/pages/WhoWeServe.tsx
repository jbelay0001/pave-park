import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, ShoppingBag, Factory, Church, Building, GraduationCap, Stethoscope, Hotel, Route } from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & Shopping Centers",
    description: "High-traffic parking lots that need durable, visible striping to manage customer flow and maximize capacity.",
    services: ["Parking space striping", "Cart corral marking", "Loading zone designation"],
  },
  {
    icon: Building2,
    title: "Commercial Office Parks",
    description: "Professional striping solutions that reflect your business image while ensuring employee and visitor safety.",
    services: ["Reserved space marking", "Visitor parking", "ADA compliance"],
  },
  {
    icon: Factory,
    title: "Industrial & Warehouses",
    description: "Heavy-duty striping built to withstand industrial traffic, including forklift lanes and safety zones.",
    services: ["Forklift traffic lanes", "Safety zone marking", "Loading dock striping"],
  },
  {
    icon: Route,
    title: "Streets & Roadways",
    description: "Professional road marking for municipalities and private roads, ensuring safe traffic flow and clear guidance.",
    services: ["Lane striping", "Crosswalk marking", "Curb painting"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Facilities",
    description: "Critical accessibility compliance and clear emergency access marking for hospitals and medical offices.",
    services: ["Emergency access lanes", "ADA parking", "Patient drop-off zones"],
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Safe, organized parking for students, staff, and visitors with clear traffic flow patterns.",
    services: ["Student parking areas", "Bus lanes", "Crosswalk striping"],
  },
  {
    icon: Church,
    title: "Churches & Places of Worship",
    description: "Well-organized lots that accommodate large gatherings while ensuring accessibility for all members.",
    services: ["Overflow parking", "Handicap spaces", "Drop-off areas"],
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "First impressions matter. Clean, professional striping that welcomes guests from the moment they arrive.",
    services: ["Guest parking", "Valet zones", "Loading areas"],
  },
  {
    icon: Building,
    title: "Multi-Family Residential",
    description: "Clear unit assignments and visitor parking that keeps residents happy and property values high.",
    services: ["Numbered spaces", "Visitor parking", "Fire lanes"],
  },
];

export default function WhoWeServe() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-asphalt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Who We Serve
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              Industries We{" "}
              <span className="text-primary">Specialize In</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              From small businesses to large commercial properties, we provide tailored striping solutions 
              that meet the unique needs of every industry.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-foreground">{industry.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Trusted by Businesses Across Industries
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">ADA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-2">24hr</div>
                <div className="text-muted-foreground">Quote Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-asphalt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Whatever your industry, we have the experience and expertise to deliver exceptional results. 
              Contact us today for a customized quote.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
