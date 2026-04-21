import { motion } from "framer-motion";
import { Droplets, Clock, Sparkles, Heart, Shield, Sun } from "lucide-react";

const benefits = [
  { icon: Droplets, title: "Natural Tint", desc: "Achieve a soft, natural-looking lip color that enhances your beauty." },
  { icon: Clock, title: "Lasts 2-3 Years", desc: "Semi-permanent results so you wake up ready every single day." },
  { icon: Sparkles, title: "Korean Technique", desc: "Advanced Korean PMU methods for the most natural, precise results." },
  { icon: Heart, title: "Painless Process", desc: "Topical numbing ensures a comfortable, virtually pain-free experience." },
  { icon: Shield, title: "Safe Pigments", desc: "FDA-approved, organic pigments that are gentle on your skin." },
  { icon: Sun, title: "No Smudging", desc: "Swim, eat, exercise — your lip color stays flawless always." },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-5 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-rose text-sm tracking-[0.2em] uppercase font-body mb-2">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
            Benefits of Lip Blushing
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-rose/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-rose" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
