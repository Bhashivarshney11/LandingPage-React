import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-navy text-primary-foreground py-12 px-5 md:px-12 pb-28 md:pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-3">Elora's PMU</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Premium Korean permanent makeup &amp; esthetics. Trusted by 2000+ clients across India.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li><a href="#results" className="hover:text-rose transition-colors">Results</a></li>
              <li><a href="#benefits" className="hover:text-rose transition-colors">Benefits</a></li>
              <li><a href="#pricing" className="hover:text-rose transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-rose transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose" /> Delhi, India</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-rose" /> +91 79862 59315</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-rose" /> info@eloraspmu.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs font-body text-primary-foreground/40">
          © {new Date().getFullYear()} Elora's PMU &amp; Korean Esthetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
