import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-asphalt text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">PrecisionStripe</span>
                <span className="text-primary text-xs font-medium tracking-wider">PARKING LOT STRIPING</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional parking lot striping services that keep your property safe, compliant, and looking its best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/ada-compliance" className="text-white/70 hover:text-primary transition-colors text-sm">ADA & Compliance</Link>
              </li>
              <li>
                <Link to="/who-we-serve" className="text-white/70 hover:text-primary transition-colors text-sm">Who We Serve</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">Parking Lot Striping</li>
              <li className="text-white/70 text-sm">ADA Compliance Marking</li>
              <li className="text-white/70 text-sm">Fire Lane Marking</li>
              <li className="text-white/70 text-sm">Stenciling & Symbols</li>
              <li className="text-white/70 text-sm">Warehouse Striping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Call Us</p>
                  <a href="tel:+15551234567" className="font-semibold hover:text-primary transition-colors">(555) 123-4567</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a href="mailto:info@precisionstripe.com" className="font-semibold hover:text-primary transition-colors">info@precisionstripe.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Location</p>
                  <span className="font-semibold">Serving the Greater Metro Area</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} PrecisionStripe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-white/50 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="text-white/50 hover:text-primary text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
