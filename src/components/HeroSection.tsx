import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-img.png";

const WHATSAPP_URL = "https://wa.me/917986259315?text=Hi%2C%20I%27m%20interested%20in%20Lip%20Blushing%20treatment";
const PHONE_NUMBER = "tel:+917986259315";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lip blushing treatment result — beautifully tinted lips with Korean aesthetic"
          width={1024}
          height={1280}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-5 pt-24 pb-16 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-gradient-light font-body text-sm tracking-[0.15em] uppercase mb-4">
            Korean Permanent Makeup · Delhi
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold  text-[oklch(70.4%_0.191_22.216)] leading-[1.1] mb-6">
            Lip Blushing
            <span className="block text-gradient-rose">in Delhi</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Wake up every day with naturally tinted, perfectly shaped lips. Premium Korean lip blushing by certified artists at Elora's PMU.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-rose text-rose-foreground font-body font-semibold px-7 py-3.5 rounded-full shadow-rose transition-transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
            <a
              href={PHONE_NUMBER}
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground font-body font-medium px-7 py-3.5 rounded-full backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <p className="mt-6 text-primary-foreground/60 text-xs font-body">
            ✦ Starting from ₹10,000 · Painless · Lasts 2-3 Years
          </p>
        </motion.div>
      </div>
    </section>
  );
}
