import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-icon.png`}
                alt="Techway Solution Logo"
                className="w-10 h-10 object-contain brightness-200"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Techway Solution
              </span>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed text-lg">
              Empowering Indian enterprises through world-class website creation, powerful mobile apps, and intelligent business automations.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors">Website Creation</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors">Technology Innovations</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>RSS Nagar, Sithurajapuram, Sivakasi - 626189, Tamilnadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98848-32321</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@techwaysolution.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Techway Solution. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
