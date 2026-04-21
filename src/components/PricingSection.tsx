import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917986259315?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Lip%20Blushing%20pricing";

const plans = [
  {
    name: "Lip Blushing",
    price: "₹10,000",
    features: ["Natural lip tint", "Single session", "Aftercare kit included", "1 follow-up touch-up", "FDA-approved pigments"],
    popular: false,
  },
  {
    name: "Premium Lip Blushing",
    price: "₹22,000",
    features: ["Custom ombré / gradient", "Premium Korean pigments", "Aftercare kit included", "2 follow-up touch-ups", "Shape correction included", "Priority booking"],
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-5 md:px-12 lg:px-20 bg-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-rose text-sm tracking-[0.2em] uppercase font-body mb-2">Investment</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">Pricing</h2>
          <p className="text-muted-foreground font-body mt-3 text-sm">Starting from · EMI options available</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-7 ${p.popular ? "bg-gradient-navy text-primary-foreground shadow-rose ring-2 ring-rose/30" : "bg-card text-card-foreground shadow-elegant"}`}
            >
              {p.popular && (
                <span className="inline-block bg-rose text-rose-foreground text-xs font-body font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold mb-1">{p.name}</h3>
              <p className="text-3xl font-display font-bold mb-6">
                {p.price}
                <span className="text-sm font-body font-normal opacity-70"> onwards</span>
              </p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-body">
                    <Check className={`w-4 h-4 shrink-0 ${p.popular ? "text-rose" : "text-rose"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-full transition-transform hover:scale-105 ${p.popular ? "bg-gradient-rose text-rose-foreground shadow-rose" : "bg-navy text-primary-foreground"}`}
              >
                <MessageCircle className="w-4 h-4" />
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
